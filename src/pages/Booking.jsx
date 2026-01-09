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
                    <h2>RESERVATION</h2>
                    <form className="booking-form-grid">
                        <div className="form-group">
                            <label>CHECK-IN DATE</label>
                            <input type="date" />
                        </div>
                        <div className="form-group">
                            <label>CHECK-OUT DATE</label>
                            <input type="date" />
                        </div>
                        <div className="form-group">
                            <label>ADULTS</label>
                            <select>
                                <option>1 Adult</option>
                                <option>2 Adults</option>
                                <option>3 Adults</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>CHILDREN</label>
                            <select>
                                <option>0 Children</option>
                                <option>1 Child</option>
                                <option>2 Children</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>ROOM TYPE</label>
                            <select>
                                <option>Luxury Grande Room</option>
                                <option>Royal Suite</option>
                                <option>Taj Club Room</option>
                                <option>Presidential Suite</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>PROMO CODE</label>
                            <input type="text" placeholder="Optional" />
                        </div>
                    </form>
                    <button className="check-availability-btn">CHECK AVAILABILITY</button>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Booking;
