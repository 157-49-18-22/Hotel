import React, { useEffect, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Amenities.css';
// Icons removed as they are no longer used
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
            title: "ROYAL ARCHITECTURE",
            desc: "Immerse yourself in the grand heritage of Barsana with our stunning architecture. Every corner of our hotel tells a story of elegance and tradition, blending historic charm with modern luxury for a truly unique stay.",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.11 PM (1).jpeg"
        },
        {
            title: "GRAND LOBBY",
            desc: "Step into a world of grandeur from the moment you arrive. Our temperature-controlled lobby offers a majestic welcome with its high ceilings, plush seating, and warm hospitality that makes you feel like royalty.",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.11 PM (2).jpeg"
        },
        {
            title: "SIGNATURE DINING",
            desc: "Embark on a culinary journey in our grand dining hall. From authentic Braj delicacies to international gourmet cuisines, our master chefs craft every dish with passion and precision using the finest local ingredients.",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.12 PM.jpeg"
        },
        {
            title: "PREMIUM HOSPITALITY",
            desc: "Our dedicated service team is at your side 24/7 to ensure your comfort. From arranging local temple tours in Barsana to ensuring your room is perfectly prepared, we are committed to making your stay flawless.",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.10 PM (2).jpeg"
        }
    ];





    return (
        <>
            <Navbar />
            <div className="page-header amenities-header">
                <div className="page-header-bg">
                    <img src="/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.11 PM.jpeg" alt="Amenities Header" />
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

            <Footer />
        </>
    );
};

export default Amenities;
