import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Contact.css';
import { motion } from 'framer-motion';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="page-header" style={{ height: '72vh' }}>
                <div className="page-header-bg">
                    <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Contact Header" />
                    <div className="overlay-dark"></div>
                </div>
                <div className="page-title container">
                    {/* Falling Italic Text */}
                    <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                        style={{ position: 'relative', zIndex: 2 }}
                    >
                        <p style={{ fontFamily: 'var(--font-subheading)', fontSize: '2rem', color: '#fff', fontStyle: 'italic', marginBottom: '20px' }}>We are here to assist you</p>
                    </motion.div>

                    {/* Hanging Ribbon Sign */}
                    <motion.div
                        className="hanging-sign"
                        initial={{ y: -1000, rotateX: 45 }}
                        animate={{ y: 0, rotateX: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 60,
                            damping: 10,
                            mass: 1.5,
                            delay: 0.2
                        }}
                    >
                        <div className="ribbon-line left"></div>
                        <div className="ribbon-line right"></div>
                        <div className="sign-board">
                            <h1 style={{ margin: 0, lineHeight: 1.2 }}>CONTACT<br />US</h1>
                        </div>
                    </motion.div>
                </div>
            </div>

            <section className="contact-section container">
                <div className="contact-info">
                    <h2>GET IN TOUCH</h2>
                    <p className="contact-intro">For reservations and inquiries, please contact us.</p>

                    <div className="info-item">
                        <h4>ADDRESS</h4>
                        <p>Barsana, Mathura, Uttar Pradesh 281405, India</p>
                    </div>

                    <div className="info-item">
                        <h4>PHONE</h4>
                        <p>+91 72487 47000</p>
                    </div>

                    <div className="info-item">
                        <h4>EMAIL</h4>
                        <p>HOTELROYALGRANDBARSANA@gmail.com</p>
                    </div>
                </div>

                <div className="contact-form-wrapper">
                    <h3>SEND US A MESSAGE</h3>
                    <ContactForm />
                </div>
            </section>

            <section className="map-section container">
                <h2>GETTING HERE</h2>
                <div className="map-container">
                    <iframe
                        title="Hotel Royal Grand Barsana Map"
                        src="https://maps.google.com/maps?q=27.694759,77.433693&z=15&output=embed"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="directions-grid">
                    <div className="direction-card">
                        <h3>FROM AIRPORT</h3>
                        <p>The nearest airport is Kheria Airport (Agra) or Indira Gandhi International Airport (New Delhi). Private pick-up can be arranged upon request.</p>
                    </div>
                    <div className="direction-card">
                        <h3>BY TRAIN</h3>
                        <p>Mathura Junction and Kosi Kalan Railway Station are nearby, offering connections to major Indian cities.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

const ContactForm = () => {
    const [status, setStatus] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        setStatus("SENDING...");

        try {
            const response = await fetch("https://formspree.io/f/xwvvevbd", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
                // Clear success message after 5 seconds to let user know it's ready again
                setTimeout(() => setStatus(""), 5000);
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            setStatus("ERROR");
        }
    };

    if (status === "SUCCESS") {
        return (
            <div style={{ textAlign: 'center', padding: '40px 0', color: 'white' }}>
                <h4 style={{ color: 'var(--primary-gold)', fontSize: '1.5rem', marginBottom: '10px' }}>Thank You!</h4>
                <p>Your message has been sent successfully.</p>
                <button
                    onClick={() => setStatus("")}
                    style={{
                        marginTop: '20px',
                        background: 'transparent',
                        border: '1px solid var(--primary-gold)',
                        color: 'var(--primary-gold)',
                        padding: '10px 20px',
                        fontSize: '0.9rem'
                    }}
                >
                    SEND ANOTHER
                </button>
            </div>
        );
    }

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <input type="tel" name="phone" placeholder="Phone Number" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

            {status === "ERROR" && <p style={{ color: 'red', marginBottom: '10px' }}>Ooops! There was an error.</p>}

            <button type="submit" disabled={status === "SENDING..."}>
                {status === "SENDING..." ? "SENDING..." : "SEND MESSAGE"}
            </button>
        </form>
    );
};

export default Contact;
