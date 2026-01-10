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
            src: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "EXTERIOR",
            description: "The Grand Facade at Sunset"
        },
        {
            src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "INTERIOR",
            description: "Lobby Lounge - A warm welcome awaits"
        },
        {
            src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "INTERIOR",
            description: "Executive Suite Living Area"
        },
        {
            src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "EXTERIOR",
            description: "Private Balcony Views"
        },
        {
            src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "INTERIOR",
            description: "Royal Hallway"
        },
        {
            src: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "DINING",
            description: "Fine Dining Experience at 'The Aura'"
        },
        {
            src: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "INTERIOR",
            description: "Presidential Bedroom"
        },
        {
            src: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "INTERIOR",
            description: "Luxury Bathroom Amenities"
        },
        {
            src: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "POOL",
            description: "Infinity Pool - Serenity by the water"
        },
        {
            src: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",

            category: "POOL",
            description: "Evening Poolside Ambiance"
        },
        {
            src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "DINING",
            description: "Al Fresco Dining"
        },
        {
            src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            category: "DINING",
            description: "Chef's Table Special"
        }
    ];

    const filteredImages = filter === 'ALL' ? images : images.filter(img => img.category === filter);
    const categories = ["ALL", "EXTERIOR", "INTERIOR", "DINING", "POOL"];

    return (
        <>
            <Navbar />
            <div className="page-header gallery-header">
                <div className="page-header-bg">
                    <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Gallery Header" />
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
