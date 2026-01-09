import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBars } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

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

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <div className="navbar-left logo">
                    <Link to="/">
                        <h1>TAJ</h1>
                        <span>HOTELS</span>
                    </Link>
                </div>

                <div className="navbar-right">
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
    );
};

export default Navbar;
