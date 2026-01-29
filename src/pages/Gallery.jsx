import React, { useState, useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Gallery.css';
import { motion } from 'framer-motion';

const Gallery = () => {
    const [filter, setFilter] = useState('ALL');
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const images = [
        {
            src: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.11 PM (2).jpeg",
            category: "INTERIOR",
            description: "Grand Staircase"
        },
        {
            src: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.11 PM.jpeg",
            category: "INTERIOR",
            description: "Elegant Lobby Corridor"
        },
        {
            src: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.12 PM.jpeg",
            category: "DINING",
            description: "Master Chef at Work"
        },
        {
            src: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.08 PM.jpeg",
            category: "ROOMS",
            description: "Luxury Suite Bedroom"
        },
        {
            src: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.09 PM (1).jpeg",
            category: "ROOMS",
            description: "Royal Executive Room"
        },
        {
            src: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.10 PM (2).jpeg",
            category: "ROOMS",
            description: "Premium Deluxe Room"
        },
        {
            src: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.56.54 PM.jpeg",
            category: "ROOMS",
            description: "Presidential Suite View"
        },
        {
            src: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.11 PM (1).jpeg",
            category: "INTERIOR",
            description: "Designer Ceiling & Lighting"
        },
        {
            src: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.10 PM.jpeg",
            category: "ROOMS",
            description: "Classic Heritage Room"
        },
        {
            src: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.09 PM (2).jpeg",
            category: "ROOMS",
            description: "Grand Comfort Twin"
        }
    ];

    const filteredImages = filter === 'ALL' ? images : images.filter(img => img.category === filter);
    const categories = ["ALL", "ROOMS", "INTERIOR", "DINING"];

    return (
        <>
            <Navbar />
            <div className="page-header gallery-header">
                <div className="page-header-bg">
                    <img src="/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.11 PM (1).jpeg" alt="Gallery Header" />
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
                        <p style={{ fontFamily: 'var(--font-subheading)', fontSize: '2rem', color: '#fff', fontStyle: 'italic', marginBottom: '20px' }}>Capturing moments of timeless elegance</p>
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
                            <h1 style={{ margin: 0, lineHeight: 1.2 }}>VISUAL<br />JOURNEY</h1>
                        </div>
                    </motion.div>
                </div>
            </div>

            <section className="gallery-section container">
                <div className="gallery-filters">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filteredImages.map((img, index) => (
                        <div key={index} className="gallery-item animate-in" onClick={() => setSelectedImage(img)}>
                            <img src={img.src} alt={img.description} />
                            <div className="gallery-overlay">
                                <span className="gallery-category-tag">{img.category}</span>
                                <h3 className="gallery-image-title">{img.description}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            {selectedImage && (
                <div className="lightbox-overlay" onClick={() => setSelectedImage(null)}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="close-lightbox-btn" onClick={() => setSelectedImage(null)}>×</button>
                        <img src={selectedImage.src.replace('w=800', 'w=1600')} alt={selectedImage.description} />
                        <div className="lightbox-caption">
                            <h3>{selectedImage.category}</h3>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Gallery;
