import React from 'react';
import './EventsSection.css';

const EventsSection = () => {
    const events = [
        {
            id: 1,
            title: "MEETINGS & CONFERENCES",
            image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 2,
            title: "EVENTS",
            image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        },
        {
            id: 3,
            title: "TIMELESS WEDDINGS",
            image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
                    Taj elevates every occasion into an awe-inspiring, immersive experience to cherish forever.
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
