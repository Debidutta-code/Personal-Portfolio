// Navbar.js
import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar">
            <div className="brand-name">My Portfolio Website</div>
            <div className={`nav-items ${menuOpen ? 'show' : ''}`}>
                <div className="nav-item"><a href="#home">Home</a></div>
                <div className="nav-item"><a href="#about">About</a></div>
                <div className="nav-item"><a href="#projects">Projects</a></div>
                <div className="nav-item"><a href="#skills">Skills</a></div>
                <div className="nav-item"><a href="#resume">Resume</a></div>
                <div className="nav-item"><a href="#contact">Contact</a></div>
            </div>
            <div className="menu-button" onClick={toggleMenu}>
                <span className={`bar ${menuOpen ? 'rotate-down' : ''}`}></span>
                <span className={`bar ${menuOpen ? 'hide' : ''}`}></span>
                <span className={`bar ${menuOpen ? 'rotate-up' : ''}`}></span>
            </div>
        </div>
    );
}

export default Navbar;
