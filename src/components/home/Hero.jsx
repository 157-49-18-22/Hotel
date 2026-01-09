import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline /* Crucial for mobile autoplay */
                    className="hero-video"
                >
                    <source src="https://videos.pexels.com/video-files/7578552/7578552-uhd_2560_1440_30fps.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content container">
                {/* Falling Italic Text */}
                <motion.div
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    style={{ position: 'relative', zIndex: 2 }}
                >
                    <h2>Experience the Unimagined</h2>
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
                        <h1>TRUE INDIAN<br />HOSPITALITY</h1>
                    </div>
                </motion.div>
            </div>

            <div className="booking-widget-container">
                <div className="booking-widget">
                    <div className="search-field">
                        <label>WHERE TO?</label>
                        <input type="text" placeholder="Search your destination..." />
                    </div>
                    <div className="search-field">
                        <label>CHECK-IN</label>
                        <input type="date" />
                    </div>
                    <div className="search-field">
                        <label>CHECK-OUT</label>
                        <input type="date" />
                    </div>
                    <div className="search-field">
                        <label>GUESTS</label>
                        <select>
                            <option>1 Room, 1 Guest</option>
                            <option>1 Room, 2 Guests</option>
                            <option>2 Rooms, 4 Guests</option>
                        </select>
                    </div>
                    <div className="search-field">
                        <label>PROMO CODE</label>
                        <input type="text" placeholder="Optional" />
                    </div>
                    <button className="search-btn">CHECK AVAILABILITY</button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
