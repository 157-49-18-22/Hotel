import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <img src="/logo.png" alt="Hotel Royal Grand Barsana" className="footer-logo-image" />
                    </div>
                    <div className="footer-socials">
                        <span className="social-label">CONNECT WITH US</span>
                        <div className="social-icons">
                            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
                            <a href="#" aria-label="Twitter"><FaTwitter /></a>
                            <a href="#" aria-label="Instagram"><FaInstagram /></a>
                            <a href="#" aria-label="YouTube"><FaYoutube /></a>
                            <a href="#" aria-label="Pinterest"><FaPinterestP /></a>
                        </div>
                    </div>
                </div>

                <div className="footer-divider-gold"></div>

                <div className="footer-links-grid simplified-footer">
                    <div className="footer-column nav-column">
                        <h3>EXPLORE</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/rooms">Rooms & Suites</a></li>
                            <li><a href="/gallery">Gallery</a></li>
                            <li><a href="/amenities">Amenities</a></li>
                            <li><a href="/contact">Contact Us</a></li>
                            <li><a href="/book">Book Now</a></li>
                        </ul>
                    </div>

                    <div className="footer-column newsletter-column">
                        <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
                        <p>Stay updated with our latest news and special offers.</p>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your email address" />
                            <button type="button">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Hotel Royal Grand Barsana. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
