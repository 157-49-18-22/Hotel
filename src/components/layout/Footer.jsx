import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPinterestP } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">TAJ</h2>
                        <span className="footer-tagline">HOTELS</span>
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

                <div className="footer-links-grid">
                    <div className="footer-column">
                        <h3>OUR BRANDS</h3>
                        <ul>
                            <li><a href="#">Taj</a></li>
                            <li><a href="#">SeleQtions</a></li>
                            <li><a href="#">Vivanta</a></li>
                            <li><a href="#">Ginger</a></li>
                            <li><a href="#">Ama Stays & Trails</a></li>
                            <li><a href="#">Qmin</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>CORPORATE</h3>
                        <ul>
                            <li><a href="#">Company Information</a></li>
                            <li><a href="#">Corporate Governance</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Social Responsibility</a></li>
                            <li><a href="#">Investor Relations</a></li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h3>SUPPORT</h3>
                        <ul>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Customer Care</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
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
                    <p>&copy; {new Date().getFullYear()} The Indian Hotels Company Limited. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
