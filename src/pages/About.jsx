import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      <div className="about-header">
        <div className="container">
          <h1>OUR <span className="text-gold">STORY</span></h1>
        </div>
      </div>
      
      <div className="container about-content">
        <div className="about-text-section">
          <h2>Bringing Big Flavour to Ottawa</h2>
          <div className="divider"></div>
          <p>
            Welcome to Quick Bites 122, your new favorite spot in the heart of downtown Ottawa. 
            Located in the vibrant ByWard Market area, we opened our doors with one simple mission: 
            to serve <strong>crave-worthy comfort food</strong> that doesn't compromise on quality or speed.
          </p>
          <p>
            Whether you're grabbing a quick lunch, fueling up for a night out, or ordering delivery 
            for a cozy night in, our menu is designed to satisfy. From our signature loaded potatoes 
            piled high with fresh toppings to our premium halal-certified beef wraps and crispy deep-fried cheese curds, 
            every item is crafted with passion.
          </p>
          
          <div className="about-highlights">
            <div className="highlight-box">
              <h3>Halal Friendly</h3>
              <p>We are proud to serve a halal-friendly menu so everyone can enjoy our big flavours.</p>
            </div>
            <div className="highlight-box">
              <h3>Fast Service</h3>
              <p>Quality food shouldn't mean a long wait. We prioritize speed without sacrificing taste.</p>
            </div>
          </div>
        </div>
        
        <div className="about-image-section">
          <div className="image-grid">
            <img src="/assets/loaded_potatoes.png" alt="Loaded Potatoes" className="grid-img img-1" />
            <img src="/assets/cheese_curds.png" alt="Cheese Curds" className="grid-img img-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
