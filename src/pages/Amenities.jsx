import React, { useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Amenities.css';
import { FaConciergeBell, FaCar, FaUserTie, FaUtensils, FaExchangeAlt, FaStethoscope } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Amenities = () => {
    const observerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.2 });

        const cards = document.querySelectorAll('.amenity-card');
        cards.forEach(card => observer.observe(card));

        return () => {
            if (cards) cards.forEach(card => observer.unobserve(card));
        };
    }, []);

    const amenities = [
        {
            title: "JIVA SPA",
            desc: "Immerse yourself in a sanctuary of wellness where ancient Indian healing wisdom meets modern luxury. Our therapists use bespoke blends of essential oils and traditional techniques to restore balance to your body, mind, and soul.",
            image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "INFINITY POOL",
            desc: "Swim amidst the clouds in our temperature-controlled infinity pool. Offering panoramic views of the city skyline, it serves as the perfect spot for a refreshing morning lap or a relaxing evening dip under the stars.",
            image: "https://images.unsplash.com/photo-1572331165267-854da2bbc729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "FINE DINING",
            desc: "Embark on a culinary journey with our world-class restaurants. From authentic local delicacies to international gourmet cuisines, our master chefs craft every dish with passion and precision using the finest ingredients.",
            image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        },
        {
            title: "CONCIERGE SERVICES",
            desc: "Our dedicated concierge team is at your service 24/7 to curate bespoke experiences. Whether it's securing a reservation at an exclusive restaurant or arranging a private city tour, we ensure every detail of your stay is flawless.",
            image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];



    const services = [
        { label: "24-Hour Concierge", icon: <FaConciergeBell /> },
        { label: "Limousine Service", icon: <FaCar /> },
        { label: "Butler Service", icon: <FaUserTie /> },
        { label: "Private Dining", icon: <FaUtensils /> },
        { label: "Currency Exchange", icon: <FaExchangeAlt /> },
        { label: "Doctor on Call", icon: <FaStethoscope /> }
    ];

    return (
        <>
            <Navbar />
            <div className="page-header amenities-header">
                <div className="page-header-bg">
                    <img src="https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Amenities Header" />
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
                        <p style={{ fontFamily: 'var(--font-subheading)', fontSize: '2rem', color: '#fff', fontStyle: 'italic', marginBottom: '20px' }}>Experience world-class luxury</p>
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
                            <h1 style={{ margin: 0, lineHeight: 1.2 }}>LUXURY<br />AMENITIES</h1>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="amenities-intro">
                <h2>UNPARALLELED SERVICES</h2>
                <p>We believe true luxury lies in the details. Every aspect of our service is thoughtfully designed to anticipate your needs and exceed your expectations.</p>
            </div>

            <section className="amenities-section container">
                {amenities.map((item, index) => (
                    <div key={index} className="amenity-card">
                        <div className="amenity-img">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="amenity-info">
                            <h3>{item.title}</h3>
                            <div className="gold-divider-small"></div>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </section>

            <section className="container" style={{ padding: '0 20px 80px' }}>
                <div style={{ background: '#fcfcfc', padding: '80px 40px', textAlign: 'center', borderTop: '1px solid #eee' }}>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.2rem', marginBottom: '10px', color: '#1a1a1a', letterSpacing: '1px' }}>
                        AT YOUR SERVICE
                    </h2>
                    <div className="gold-divider-small" style={{ margin: '0 auto 50px' }}></div>

                    <div className="service-icons-grid">
                        {services.map((srv, i) => (
                            <div key={i} className="service-icon-item">
                                <span className="service-icon">{srv.icon}</span>
                                <span className="service-label">{srv.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Amenities;
