import React from 'react';
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
                    src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="royal grand Palace Night View"
                />
                <div className="award-overlay">
                    <div className="award-details">
                        <div className="award-item">
                            <h3>WORLD'S STRONGEST</h3>
                            <span>HOTEL BRAND 2025</span>
                            <p>2024 • 2023 • 2021</p>
                        </div>
                        <div className="vertical-divider"></div>
                        <div className="award-item">
                            <h3>INDIA'S STRONGEST</h3>
                            <span>BRAND 2025</span>
                            <p>2020 • 2022 • 2023 • 2024</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardBanner;
