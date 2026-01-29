import React from 'react';
import './DiningSection.css';

const DiningSection = () => {
    const items = [
        {
            title: "EPICUREAN MASTERPIECES",
            image: "/dinner.jpg",
            desc: "Culinary delights crafted by master chefs."
        },
        {
            title: "ICONIC RESTAURANTS",
            image: "/Hotle pics/WhatsApp Image 2026-01-29 at 12.46.12 PM.jpeg",
            desc: "Ambiances that tell a story of their own."
        },
        {
            title: "SIGNATURE DISHES",
            image: "/paneer.jpg",
            desc: "Flavors that linger in your memory forever."
        }
    ];

    return (
        <section className="dining-section container">
            <div className="dining-header">
                <div className="separator-line"></div>
                <h2>SIGNATURE DINING</h2>
                <p>Embark on a journey of exquisite experiences, encompassing impeccable service, sophisticated ambience and masterful culinary artistry.</p>
                <a href="#" className="explore-link">EXPLORE &gt;</a>
            </div>

            <div className="dining-grid">
                {items.map((item, index) => (
                    <div key={index} className="dining-card">
                        <div className="dining-img-container">
                            <img src={item.image} alt={item.title} />
                        </div>
                        <div className="dining-info">
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DiningSection;
