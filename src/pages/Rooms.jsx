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
            name: "Luxury Grande Room",
            image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
            price: "₹ 25,000 / Night",
            desc: "Spectacular views of the city skyline, tastefully appointed with modern comforts. Perfect for both business and leisure travelers looking for a sanctuary in the city.",
            longDesc: "Experience the ultimate in luxury with our Luxury Grande Room. Spanning 550 sq ft, this room features floor-to-ceiling windows offering panoramic views of the city skyline. The room differs a plush King-sized bed with 400-thread-count linens, a marble bathroom with a deep soaking tub and a rain shower. Modern amenities include high-speed Wi-Fi, a 55-inch smart TV, and a well-stocked minibar.",
            amenities: ["550 Sq Ft", "City View", "King Bed", "marble bath"]
        },
        {
            id: 2,
            name: "Royal Suite",
            image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1974&auto=format&fit=crop",
            price: "₹ 45,000 / Night",
            desc: "Indulge in royalty with expansive living spaces and butler service. The Royal Suite offers a separate living area, dining space, and a powder room.",
            longDesc: "Live like royalty in our Royal Suite. This expansive 1200 sq ft suite includes a separate living room, a dining area for four, and a powder room for guests. The master bedroom is a haven of tranquility, featuring a signature King bed and a walk-in closet. Guests enjoy 24-hour butler service, airport transfers in a luxury sedan, and access to the exclusive Executive Lounge.",
            amenities: ["1200 Sq Ft", "Sea View", "Butler Service", "Airport Transfer"]
        },
        {
            id: 3,
            name: "royal grand Club Room",
            image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070&auto=format&fit=crop",
            price: "₹ 35,000 / Night",
            desc: "Exclusive access to the royal grand Club Lounge, complimentary high tea, and usage of the boardroom. Designed for the discerning traveler.",
            longDesc: "The royal grand Club Room is designed for the business traveler who appreciates exclusivity. Located on the higher floors, these rooms offer breathtaking views and access to the royal grand Club Lounge, where you can enjoy complimentary breakfast, afternoon high tea, and evening cocktails. The room includes a large work desk, ergonomic chair, and premium stationery.",
            amenities: ["600 Sq Ft", "Club Access", "High Tea", "Work Desk"]
        },
        {
            id: 4,
            name: "Presidential Suite",
            image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
            price: "₹ 1,50,000 / Night",
            desc: "The epitome of luxury, offering unmatched grandeur, a private gym, massage room, and a dedicated pantry. Experience life at the top.",
            longDesc: "The Presidential Suite is the jewel in our crown. Spread across 3000 sq ft, it offers unmatched grandeur and privacy. The suite includes a grand living room, a private dining room for ten, a study, a private gym, and a massage room. The master bathroom features a Jacuzzi with city views. A dedicated butler and chef are at your service 24/7 to cater to your every whim.",
            amenities: ["3000 Sq Ft", "Panoramic View", "Private Gym", "24/7 Butler"]
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
                    <img src="https://images.unsplash.com/photo-1595576508898-0ad5c879a061?q=80&w=1974&auto=format&fit=crop" alt="Rooms Header" />
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
