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
                <div className="navbar-left">
                    <button className="menu-btn">
                        <FaBars />
                        <span>MENU</span>
                    </button>
                </div>

                <div className="navbar-center logo">
                    <Link to="/">
                        <h1>TAJ</h1>
                        <span>HOTELS</span>
                    </Link>
                </div>

                <div className="navbar-right">
                    <div className="nav-links">
                        <Link to="/destinations">Destinations</Link>
                        <Link to="/hotels">Hotels</Link>
                        <Link to="/dining">Dining</Link>
                    </div>
                    <div className="nav-actions">
                        <button className="auth-btn">
                            <FaUser />
                            <span>Sign In</span>
                        </button>
                        <button className="book-btn">BOOK A STAY</button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
