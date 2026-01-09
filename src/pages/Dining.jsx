import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Destinations.css'; // Reusing header styles
import './Dining.css';

const Dining = () => {
    return (
        <>
            <Navbar />
            <div className="page-header">
                <div className="header-bg">
                    <img src="https://images.unsplash.com/photo-1514362545857-3bc16549766b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Dining" />
                    <div className="header-overlay"></div>
                </div>
                <div className="header-content container">
                    <h1>Signature Dining</h1>
                    <p>Savour the finest flavours from around the globe.</p>
                </div>
            </div>

            <section className="dining-page-container container">
                <div className="dining-grid-page">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                        <div key={item} className="restaurant-card">
                            <div className="restaurant-img">
                                <img src={`https://images.unsplash.com/photo-1550966871-3ed3c47e2ce2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80`} alt="Restaurant" />
                            </div>
                            <div className="restaurant-info">
                                <h3>Golden Dragon</h3>
                                <p className="cuisine">Sichuan & Cantonese</p>
                                <p className="desc">Known for its authentic flavours and elegant ambience.</p>
                                <button className="reserve-btn">RESERVE TABLE</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Dining;
