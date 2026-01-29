import React from 'react';
import './EventsSection.css';

const EventsSection = () => {
    const events = [
        {
            id: 1,
            title: "MEETINGS & CONFERENCES",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.11 PM (2).jpeg",
        },
        {
            id: 2,
            title: "EVENTS",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.12 PM.jpeg",
        },
        {
            id: 3,
            title: "TIMELESS WEDDINGS",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.11 PM (1).jpeg",
        }
    ];

    return (
        <section className="events-section container">
            <div className="events-header">
                <div className="events-title-block">
                    <div className="separator-line"></div>
                    <h2>EVENTS AND CONFERENCES</h2>
                </div>
                <p className="events-desc">
                    royal grand elevates every occasion into an awe-inspiring, immersive experience to cherish forever.
                </p>
            </div>

            <div className="events-grid">
                {events.map((item) => (
                    <div key={item.id} className="event-card">
                        <div className="event-image-wrapper">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="event-card-content">
                            <h3>{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default EventsSection;
