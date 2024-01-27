// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
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
                <div className="nav-item">
                    <Link to='home' spy={true} smooth={true} offset={50} duration={700}>Home</Link>
                </div>
                <div className="nav-item">
                    <Link to='about' spy={true} smooth={true} offset={50} duration={700}>About</Link>
                </div>
                <div className="nav-item">
                    <Link to='skills' spy={true} smooth={true} offset={50} duration={700}>Skills</Link>
                </div>
                <div className="nav-item">
                    <Link to='projects' spy={true} smooth={true} offset={50} duration={700}>Projects</Link>
                </div>
                <div className="nav-item">
                    <Link to='resume' spy={true} smooth={true} offset={50} duration={700}>Resume</Link>
                </div>
                <div className="nav-item">
                    <Link to='contact' spy={true} smooth={true} offset={50} duration={700}>Contact</Link>
                </div>
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
