import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            <img src="/assets/new_logo_transparent.png" alt="Quick Bites 122 Logo" className="footer-logo-img" />
          </Link>
          <p className="footer-desc">
            Ottawa's premium spot for casual comfort food, halal-friendly meals, and fast service.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/quick_bites122/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61587045507626" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-links">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/menu">Our Menu</Link>
          <Link to="/contact">Contact & Location</Link>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <MapPin size={20} className="text-red" />
            <a href="https://www.google.com/maps/place/Quick+Bites+122/@45.4293347,-75.6918676,17z" target="_blank" rel="noreferrer">
              122 Clarence St, Unit 100<br/>Ottawa, ON K1N 5P6
            </a>
          </div>
          <div className="contact-item mt-2">
            <Phone size={20} className="text-red" />
            <a href="tel:+11234567890">(613) 555-0199</a> {/* Placeholder phone */}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Quick Bites 122. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
