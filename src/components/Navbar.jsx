import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/menu', label: 'Menu' },
    { path: '/contact', label: 'Location & Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <Link to="/" className="logo">
          <img src="/assets/new_logo_transparent.png" alt="Quick Bites 122 Logo" className="logo-img" />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={location.pathname === link.path ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/menu" className="btn btn-primary nav-btn">Order Now</Link>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-toggle desktop-hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} color="#F2A93B" /> : <Menu size={28} color="#F2A93B" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="mobile-menu desktop-hidden animate-fade-in">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={location.pathname === link.path ? 'active' : ''}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/menu" className="btn btn-primary" onClick={() => setIsOpen(false)}>Order Now</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
