import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Booking.css';
import { motion } from 'framer-motion';

const Booking = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Navbar />
            <div className="page-header booking-header" style={{ height: '40vh' }}>
                <div className="page-header-bg">
                    {/* Used a different luxury image */}
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Booking Header" />
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
                        <p style={{ fontFamily: 'var(--font-subheading)', fontSize: '2rem', color: '#fff', fontStyle: 'italic', marginBottom: '20px' }}>Start your journey with us</p>
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
                            <h1 style={{ margin: 0, lineHeight: 1.2 }}>BOOK A<br />STAY</h1>
                        </div>
                    </motion.div>
                </div>
            </div>

            <section className="booking-page-section container">
                <div className="booking-card-large">
                    <h2>REQUEST A STAY</h2>
                    <p style={{ marginBottom: '40px', color: '#666', fontSize: '1.1rem' }}>
                        Please fill in your details below. Our reservation team will contact you shortly to confirm availability and complete your booking.
                    </p>
                    <BookingForm />
                </div>
            </section>
            <Footer />
        </>
    );
};

const BookingForm = () => {
    const [status, setStatus] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = new FormData(form);

        setStatus("SENDING...");

        try {
            const response = await fetch("https://formspree.io/f/mojjajwp", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("SUCCESS");
                form.reset();
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
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
                <h3 style={{ color: 'var(--primary-gold)', fontSize: '2rem', marginBottom: '20px', fontFamily: 'var(--font-heading)' }}>Request Received</h3>
                <p style={{ fontSize: '1.2rem', color: '#333', marginBottom: '30px' }}>
                    Thank you for your interest. Our reservation team will contact you shortly to confirm your stay.
                </p>
                <button
                    onClick={() => setStatus("")}
                    className="check-availability-btn"
                    style={{ padding: '15px 40px', fontSize: '0.9rem' }}
                >
                    SUBMIT ANOTHER REQUEST
                </button>
            </div>
        );
    }

    return (
        <form className="booking-form-grid" onSubmit={handleSubmit}>
            <div className="form-group">
                <label>YOUR NAME</label>
                <input type="text" name="name" placeholder="Full Name" required />
            </div>
            <div className="form-group">
                <label>PHONE NUMBER</label>
                <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" required />
            </div>
            <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" name="email" placeholder="name@example.com" required />
            </div>
            <div className="form-group">
                <label>ROOM TYPE</label>
                <select name="room_type">
                    <option>Luxury Grande Room</option>
                    <option>Royal Suite</option>
                    <option>royal grand Club Room</option>
                    <option>Presidential Suite</option>
                </select>
            </div>
            <div className="form-group">
                <label>CHECK-IN DATE</label>
                <input type="date" name="check_in" required />
            </div>
            <div className="form-group">
                <label>CHECK-OUT DATE</label>
                <input type="date" name="check_out" required />
            </div>
            <div className="form-group">
                <label>ADULTS</label>
                <select name="adults">
                    <option>1 Adult</option>
                    <option>2 Adults</option>
                    <option>3 Adults</option>
                </select>
            </div>
            <div className="form-group">
                <label>CHILDREN</label>
                <select name="children">
                    <option>0 Children</option>
                    <option>1 Child</option>
                    <option>2 Children</option>
                </select>
            </div>
            <div className="form-group" style={{ gridColumn: 'span 2' }}>
                <label>SPECIAL REQUESTS</label>
                <input type="text" name="special_requests" placeholder="Any specific requirements?" />
            </div>

            <div style={{ gridColumn: 'span 2', textAlign: 'center', marginTop: '20px' }}>
                {status === "ERROR" && <p style={{ color: 'red', marginBottom: '15px' }}>Something went wrong. Please try again.</p>}

                <button type="submit" className="check-availability-btn" disabled={status === "SENDING..."}>
                    {status === "SENDING..." ? "SENDING REQUEST..." : "REQUEST CALLBACK"}
                </button>
            </div>
        </form>
    );
};

export default Booking;
