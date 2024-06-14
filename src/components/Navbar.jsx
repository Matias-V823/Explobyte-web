// src/components/Navbar.js
import React, { useState } from 'react';
import img from '../assets/Explobyte Blanco.png';
import { Link } from "react-router-dom";



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={img} alt="" />
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
                <Link to="/">Inicio</Link>
                <Link to="Servicios">Servicios</Link>
            </div>
            <div className="navbar-toggle" onClick={toggleMenu}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    );
};

export default Navbar;
