import React from 'react';
import './DiningSection.css';

const DiningSection = () => {
    const items = [
        {
            title: "EPICUREAN MASTERPIECES",
            image: "https://images.unsplash.com/photo-1577106263724-2c8e03bfe9f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            desc: "Culinary delights crafted by master chefs."
        },
        {
            title: "ICONIC RESTAURANTS",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
            desc: "Ambiances that tell a story of their own."
        },
        {
            title: "SIGNATURE DISHES",
            image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
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
