import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 50;
            if (isScrolled !== scrolled) {
                setScrolled(isScrolled);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolled]);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="container navbar-container">
                    <div className="navbar-left logo">
                        <Link to="/">
                            <img src="/logo.png" alt="Hotel Royal Grand Barsana" className="logo-image" />
                        </Link>
                    </div>

                    <div className="menu-icon" onClick={toggleMenu}>
                        <FaBars />
                    </div>

                    <div className="navbar-right desktop-menu">
                        <div className="nav-links">
                            <Link to="/rooms">ROOMS</Link>
                            <Link to="/gallery">GALLERY</Link>
                            <Link to="/amenities">AMENITIES</Link>
                            <Link to="/contact">CONTACT</Link>
                        </div>
                        <div className="nav-actions">
                            <Link to="/book" className="book-btn">BOOK NOW</Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Sidebar Menu */}
            <div className={`mobile-menu-overlay ${isOpen ? 'active' : ''}`} onClick={toggleMenu}></div>
            <div className={`mobile-menu-sidebar ${isOpen ? 'active' : ''}`}>
                <div className="mobile-menu-header">
                    <div className="mobile-logo">
                        <img src="/logo.png" alt="Hotel Royal Grand Barsana" className="mobile-logo-image" />
                    </div>
                    <button className="close-btn" onClick={toggleMenu}>
                        <FaTimes />
                    </button>
                </div>
                <nav className="mobile-nav-links">
                    <Link to="/rooms" onClick={toggleMenu}>ROOMS</Link>
                    <Link to="/gallery" onClick={toggleMenu}>GALLERY</Link>
                    <Link to="/amenities" onClick={toggleMenu}>AMENITIES</Link>
                    <Link to="/contact" onClick={toggleMenu}>CONTACT</Link>
                    <Link to="/book" className="mobile-book-btn" onClick={toggleMenu}>BOOK NOW</Link>
                </nav>
            </div>
        </>
    );
};

export default Navbar;
