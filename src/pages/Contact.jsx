import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaInstagram, FaFacebook } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      <div className="contact-header">
        <div className="container">
          <h1>LOCATION & <span className="text-red">CONTACT</span></h1>
        </div>
      </div>

      <div className="container contact-content">
        <div className="contact-info-section">
          <h2>Get in Touch</h2>
          <p className="text-muted mb-4">
            We're located in the heart of Ottawa. Come visit us for a quick bite, or order online for delivery right to your door.
          </p>
          
          <div className="info-cards">
            <div className="info-card">
              <div className="icon-wrapper">
                <MapPin className="text-red" size={24} />
              </div>
              <div className="info-details">
                <h3>Visit Us</h3>
                <p>122 Clarence St, Unit 100<br/>Ottawa, ON K1N 5P6</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="icon-wrapper">
                <Clock className="text-gold" size={24} />
              </div>
              <div className="info-details">
                <h3>Hours</h3>
                <p>Mon - Thu: 11:00 AM - 10:00 PM<br/>Fri - Sat: 11:00 AM - 2:00 AM<br/>Sun: 12:00 PM - 9:00 PM</p>
              </div>
            </div>
            
            <div className="info-card">
              <div className="icon-wrapper">
                <Phone className="text-red" size={24} />
              </div>
              <div className="info-details">
                <h3>Contact</h3>
                <p><a href="tel:+11234567890">(613) 555-0199</a><br/><a href="mailto:hello@quickbites122.ca">hello@quickbites122.ca</a></p>
              </div>
            </div>
          </div>
          
          <div className="social-connect mt-4">
            <h3>Follow Us</h3>
            <div className="social-links-large">
              <a href="https://www.instagram.com/quick_bites122/" target="_blank" rel="noreferrer" className="social-btn instagram">
                <FaInstagram size={24} />
                <span>Instagram</span>
              </a>
              <a href="https://www.facebook.com/profile.php?id=61587045507626" target="_blank" rel="noreferrer" className="social-btn facebook">
                <FaFacebook size={24} />
                <span>Facebook</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="map-section">
          <div className="map-container">
            {/* Embedded Google Map */}
            <iframe 
              src="https://maps.google.com/maps?q=Quick%20Bites%20122,%20122%20Clarence%20St,%20Ottawa,%20ON&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Quick Bites 122 Location"
            ></iframe>
          </div>
          
          <div className="delivery-cta">
            <h3>Want it delivered?</h3>
            <p>Find us on your favorite delivery apps.</p>
            <div className="delivery-buttons">
              <a href="https://www.ubereats.com/store/quick-bites-122" target="_blank" rel="noreferrer" className="btn btn-primary">Uber Eats</a>
              <button className="btn btn-secondary">SkipTheDishes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
