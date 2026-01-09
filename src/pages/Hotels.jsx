import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Hotels.css';

const Hotels = () => {
    const hotels = [
        { id: 1, name: "Taj Mahal Palace", location: "Mumbai", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: "5.0" },
        { id: 2, name: "Taj Lake Palace", location: "Udaipur", image: "https://images.unsplash.com/photo-1590059390492-d5495eb84025?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: "4.9" },
        { id: 3, name: "Taj Exotica", location: "Goa", image: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: "4.8" },
        { id: 4, name: "Rambagh Palace", location: "Jaipur", image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", rating: "4.9" }, // Reused image placeholder
    ];

    return (
        <>
            <Navbar />
            <div className="page-header">
                <div className="header-bg">
                    <img src="https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Hotels" />
                    <div className="header-overlay"></div>
                </div>
                <div className="header-content container">
                    <h1>Our Hotels</h1>
                    <p>Experience the epitome of luxury at our award-winning properties.</p>
                </div>
            </div>

            <section className="hotels-list container">
                {hotels.map(hotel => (
                    <div key={hotel.id} className="hotel-card">
                        <div className="hotel-img">
                            <img src={hotel.image} alt={hotel.name} />
                        </div>
                        <div className="hotel-content">
                            <span className="hotel-location">{hotel.location}</span>
                            <h2>{hotel.name}</h2>
                            <p>A symbol of Indian hospitality, offering a blend of rich history and modern luxury.</p>
                            <div className="hotel-actions">
                                <span className="hotel-rating">★ {hotel.rating}</span>
                                <button className="book-now-btn">BOOK NOW</button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
            <Footer />
        </>
    );
};

export default Hotels;
