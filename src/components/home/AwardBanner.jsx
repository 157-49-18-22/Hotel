import React from 'react';
import hotelImg from '../../assets/hotel.png';
import './AwardBanner.css';

const AwardBanner = () => {
    return (
        <section className="award-section container">
            <div className="award-header">
                <div className="separator-line"></div>
                <h2>INDIA'S PRIDE, WORLD'S STRONGEST</h2>
                <div className="separator-line"></div>
            </div>

            <p className="award-subtitle">
                royal grand has yet again been recognised as World's Strongest Hotel Brand and India's
                Strongest Brand, across sectors, by Brand Finance 2025 Reports
            </p>

            <div className="award-banner-image">
                <img
                    src={hotelImg}
                    alt="royal grand Palace Night View"
                />

            </div>
        </section>
    );
};

export default AwardBanner;
