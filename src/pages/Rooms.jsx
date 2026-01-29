import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Rooms.css';
import { motion } from 'framer-motion';

const Rooms = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ... (keep rooms array same) ...
    const rooms = [
        {
            id: 1,
            name: "2 bed",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.08 PM.jpeg",
            price: "₹ 2000 / Night",
            desc: "Spectacular views of the plush interiors, tastefully appointed with modern comforts. Perfect for a peaceful retreat.",
            longDesc: "Experience the ultimate in luxury with our Luxury Grande Room. This room features a plush King-sized bed, elegantly designed wooden interiors, and ambient lighting that creates a cozy atmosphere. Modern amenities include high-speed Wi-Fi, a premium TV, and a well-stocked minibar.",
            amenities: ["450 Sq Ft", "Interior View", "King Bed", "Rain Shower"]
        },
        {
            id: 2,
            name: "3 bed ",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.56.54 PM.jpeg",
            price: "₹ 25,00 / Night",
            desc: "Indulge in royalty with expansive living spaces and premium furnishings. Designed for an unforgettable stay.",
            longDesc: "Live like royalty in our Royal Suite. This expansive suite includes a separate living area and a master bedroom with premium linens. Guests enjoy signature furniture, a spacious bathroom, and high-end decor that reflects the heritage of Barsana.",
            amenities: ["800 Sq Ft", "Royal Decor", "Butler Service", "Mini Bar"]
        },
        {
            id: 3,
            name: "2 bed",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.09 PM.jpeg",
            price: "₹ 2000 / Night",
            desc: "Elegant and spacious, offering a perfect blend of comfort and style for the modern traveler.",
            longDesc: "The Royal Grand Club Room is designed for travelers who appreciate fine details. It features textured walls, premium upholstery, and a large workspace. Enjoy complimentary high tea and access to our exclusive lounge areas.",
            amenities: ["500 Sq Ft", "Work Desk", "High Tea", "Club Access"]
        },
        {
            id: 4,
            name: "2 bed",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.09 PM (1).jpeg",
            price: "₹ 2000 / Night",
            desc: "The epitome of grandeur, offering unmatched luxury and privacy for our most discerning guests.",
            longDesc: "Our Presidential Suite is the pinnacle of luxury. Featuring two bedrooms, a private lounge, and a massive bathroom with a soaking tub. Every piece of furniture is handcrafted to provide a majestic experience.",
            amenities: ["1200 Sq Ft", "Panoramic View", "Private Lounge", "24/7 Butler"]
        },
        {
            id: 5,
            name: "3 bed",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.09 PM (2).jpeg",
            price: "₹ 25,00 / Night",
            desc: "A beautiful blend of traditional aesthetics and modern facilities for a comfortable stay.",
            longDesc: "The Heritage Deluxe Room captures the spirit of the city with its traditional design elements. It offers two twin beds, large windows for natural light, and all essential modern conveniences.",
            amenities: ["400 Sq Ft", "Twin Beds", "Traditional Decor", "Smart TV"]
        },
        {
            id: 6,
            name: "",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.09 PM (3).jpeg",
            price: "₹ 14,000 / Night",
            desc: "Spacious twin beds with a modern layout, ideal for business partners or friends.",
            longDesc: "Our Executive Twin Room provides independent sleeping comfort with two separate beds. The room is equipped with a functional work area and high-speed internet, making it ideal for business trips.",
            amenities: ["450 Sq Ft", "Twin Beds", "Work Desk", "High-Speed Wi-Fi"]
        },
        {
            id: 7,
            name: "Regal Comfort Room",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.10 PM.jpeg",
            price: "₹ 16,000 / Night",
            desc: "Warm and inviting interiors designed to make you feel right at home with a touch of luxury.",
            longDesc: "Regal Comfort Rooms are designed with warm tones and soft lighting to ensure a relaxing stay. The room features a comfortable King bed and a seating area where you can enjoy your morning coffee.",
            amenities: ["420 Sq Ft", "King Bed", "Seating Area", "Coffee Maker"]
        },
        {
            id: 8,
            name: "Majestic Garden Room",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.10 PM (1).jpeg",
            price: "₹ 17,000 / Night",
            desc: "Beautifully decorated room with views that bring a sense of tranquility to your stay.",
            longDesc: "The Majestic Garden Room offers peaceful views and a serene environment. The interior is decorated with natural textures and colors, providing a refreshing escape from the city bustle.",
            amenities: ["480 Sq Ft", "Quiet Zone", "Luxury Bath", "Welcome Drinks"]
        },
        {
            id: 9,
            name: "Classic Prime Suite",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.10 PM (2).jpeg",
            price: "₹ 20,000 / Night",
            desc: "A premium suite offering superior comfort and a host of exclusive amenities.",
            longDesc: "The Classic Prime Suite is perfect for those who want a bit more space. It features a larger floor area, premium toiletries, and a dedicated sitting space for private meetings or relaxation.",
            amenities: ["600 Sq Ft", "Premium Toiletries", "Private Bar", "LCD TV"]
        },
        {
            id: 10,
            name: "Grand Palace View Room",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.56.54 PM (1).jpeg",
            price: "₹ 22,000 / Night",
            desc: "Wake up to stunning architecture and a sense of grandeur every morning.",
            longDesc: "The Grand Palace View Room provides a unique perspective of the hotel's stunning architecture. The room is spacious, with high ceilings and luxury finishes that make every moment feel special.",
            amenities: ["550 Sq Ft", "Palace View", "High Ceiling", "Plush Linens"]
        }
    ];

    // ... (keep state and handlers same) ...

    // State for 360 Modal and Details Modal
    const [show360, setShow360] = useState(null);
    const [showDetails, setShowDetails] = useState(null);

    const handleOpen360 = (room) => {
        setShow360(room);
    };

    const handleClose360 = () => {
        setShow360(null);
    };

    const handleViewDetails = (room) => {
        setShowDetails(room);
    };

    const handleCloseDetails = () => {
        setShowDetails(null);
    };

    const handleBookNow = (room) => {
        // Navigate to booking page, potentially passing the selected room state
        navigate('/book', { state: { selectedRoom: room } });
    };

    return (
        <>
            <Navbar />
            <div className="page-header">
                <div className="page-header-bg">
                    <img src="/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.11 PM.jpeg" alt="Rooms Header" />
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
                        <p style={{ fontFamily: 'var(--font-subheading)', fontSize: '2rem', color: '#fff', fontStyle: 'italic', marginBottom: '20px' }}>Experience the epitome of comfort and grandeur</p>
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
                            <h1 style={{ margin: 0, lineHeight: 1.2 }}>LUXURY ROOMS<br />& SUITES</h1>
                        </div>
                    </motion.div>
                </div>
            </div>

            <section className="rooms-section container">
                {rooms.map((room, index) => (
                    <div key={room.id} className={`room-card ${index % 2 !== 0 ? 'reverse' : ''}`}>
                        <div className="room-image">
                            <img src={room.image} alt={room.name} />
                            <div className="room-overlay-hover">
                                <button onClick={() => handleOpen360(room)}>VIEW 360° TOUR</button>
                            </div>
                        </div>
                        <div className="room-info">
                            <span className="room-price">{room.price}</span>
                            <h2>{room.name}</h2>
                            <div className="gold-divider"></div>
                            <p>{room.desc}</p>
                            <div className="room-features">
                                {room.amenities.map((amenity, i) => (
                                    <span key={i} className="feature-pill">{amenity}</span>
                                ))}
                            </div>
                            <div className="room-actions">
                                <button className="book-room-btn" onClick={() => handleViewDetails(room)}>VIEW DETAILS</button>
                                <button className="book-now-small-btn" onClick={() => handleBookNow(room)}>BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* 360 Tour Modal */}
            {show360 && (
                <div className="modal-360-overlay" onClick={handleClose360}>
                    <div className="modal-360-content" onClick={e => e.stopPropagation()}>
                        <button className="close-360-btn" onClick={handleClose360}>×</button>
                        <h3>{show360.name} - 360° View</h3>
                        <div className="panorama-container">
                            {/* Simulating 360 view with a wide image that scrolls */}
                            <img src={show360.image} alt="360 View" className="panorama-image" />
                            <div className="panorama-hint">Drag to rotate (Simulated)</div>
                        </div>
                    </div>
                </div>
            )}

            {/* Room Details Modal */}
            {showDetails && (
                <div className="details-modal-overlay" onClick={handleCloseDetails}>
                    <div className="details-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="close-details-btn" onClick={handleCloseDetails}>×</button>
                        <div className="details-modal-image">
                            <img src={showDetails.image} alt={showDetails.name} />
                        </div>
                        <div className="details-modal-info">
                            <h2>{showDetails.name}</h2>
                            <span className="details-modal-price">{showDetails.price}</span>
                            <div className="gold-divider" style={{ margin: '0 0 20px 0' }}></div>
                            <p className="details-modal-desc">
                                {showDetails.longDesc || showDetails.desc}
                            </p>

                            <h4>AMENITIES</h4>
                            <div className="details-features-list">
                                {showDetails.amenities.map((amenity, i) => (
                                    <div key={i} className="details-feature-item">{amenity}</div>
                                ))}
                                <div className="details-feature-item">Free High-Speed Wi-Fi</div>
                                <div className="details-feature-item">LED TV with HD Channels</div>
                                <div className="details-feature-item">In-room Safe</div>
                            </div>

                            <button className="details-book-btn" onClick={() => {
                                handleCloseDetails();
                                handleBookNow(showDetails);
                            }}>
                                BOOK THIS ROOM
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </>
    );
};

export default Rooms;
