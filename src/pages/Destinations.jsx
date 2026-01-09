import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import './Destinations.css';

const Destinations = () => {
    const destinations = [
        { id: 1, name: "Udaipur", image: "https://images.unsplash.com/photo-1590059390492-d5495eb84025?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", count: "4 Hotels" },
        { id: 2, name: "Mumbai", image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", count: "3 Hotels" },
        { id: 3, name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", count: "5 Hotels" },
        { id: 4, name: "Jaipur", image: "https://images.unsplash.com/photo-1477587458883-47145ed94245?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", count: "3 Hotels" },
        { id: 5, name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", count: "6 Hotels" },
        { id: 6, name: "New Delhi", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", count: "4 Hotels" },
    ];

    return (
        <>
            <Navbar />
            <div className="page-header">
                <div className="header-bg">
                    <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Travel" />
                    <div className="header-overlay"></div>
                </div>
                <div className="header-content container">
                    <h1>Our Destinations</h1>
                    <p>Discover the world's most enchanting locations with Taj.</p>
                </div>
            </div>

            <section className="destinations-grid container">
                {destinations.map(city => (
                    <div key={city.id} className="destination-card">
                        <div className="dest-img">
                            <img src={city.image} alt={city.name} />
                        </div>
                        <div className="dest-info">
                            <h2>{city.name}</h2>
                            <span>{city.count}</span>
                            <button>EXPLORE</button>
                        </div>
                    </div>
                ))}
            </section>
            <Footer />
        </>
    );
};

export default Destinations;
