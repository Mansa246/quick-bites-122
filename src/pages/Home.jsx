import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, MapPin } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home animate-fade-in">
      {/* Hero Section */}
      <section className="hero">
        <div className="container hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              CRAVE-WORTHY <span className="text-gold">COMFORT</span> FOOD.
            </h1>
            <p className="hero-subtitle">
              Ottawa's finest loaded potatoes, premium beef wraps, and deep-fried cheese curds. Fast, fresh, and halal-friendly.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn btn-primary">View Menu</Link>
              <a href="https://www.ubereats.com/store/quick-bites-122" target="_blank" rel="noreferrer" className="btn btn-secondary">
                Order Delivery
              </a>
            </div>
            
            <div className="hero-features">
              <div className="feature">
                <Star className="text-gold" size={20} />
                <span>Premium Quality</span>
              </div>
              <div className="feature">
                <Clock className="text-red" size={20} />
                <span>Fast Service</span>
              </div>
              <div className="feature">
                <MapPin className="text-gold" size={20} />
                <span>ByWard Market</span>
              </div>
            </div>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-glow"></div>
            <img src="/assets/beef_burger_wrap.png" alt="Premium Beef Wrap" className="hero-image" />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="history-section">
        <div className="container history-content">
          <div className="history-text">
            <h2>OUR <span className="text-gold">HISTORY</span></h2>
            <p>
              Born out of a passion for bold flavors and fast service, Quick Bites 122 started as a humble idea in the heart of Ottawa's ByWard Market. 
              We wanted to create a spot where comfort food meets quality, without the long wait. From our very first loaded potato to the thousands of signature wraps we serve today, 
              our commitment to halal-friendly, crave-worthy meals has never wavered. 
            </p>
            <Link to="/about" className="btn btn-secondary mt-2 inline-flex">
              Read Our Full Story <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Items */}
      <section className="featured-section">
        <div className="container">
          <div className="section-header">
            <h2>OUR <span className="text-red">SIGNATURES</span></h2>
            <p className="text-muted">The dishes that made us famous in Ottawa.</p>
          </div>
          
          <div className="featured-grid">
            <div className="featured-card">
              <div className="card-image-wrapper">
                <img src="/assets/loaded_potatoes.png" alt="Loaded Potatoes" />
              </div>
              <div className="card-content">
                <h3>Loaded Potatoes</h3>
                <p>Crispy, fluffy, and loaded to the brim with premium toppings and melted cheese.</p>
                <span className="price">$14.99</span>
              </div>
            </div>
            
            <div className="featured-card">
              <div className="card-image-wrapper">
                <img src="/assets/beef_burger_wrap.png" alt="Signature Wrap" />
              </div>
              <div className="card-content">
                <h3>Signature Beef Wrap</h3>
                <p>Juicy, halal-certified beef, fresh veggies, and our secret sauce wrapped to perfection.</p>
                <span className="price">$16.49</span>
              </div>
            </div>
            
            <div className="featured-card">
              <div className="card-image-wrapper">
                <img src="/assets/cheese_curds.png" alt="Cheese Curds" />
              </div>
              <div className="card-content">
                <h3>Deep Fried Cheese Curds</h3>
                <p>Golden, crispy outside with a gooey, stringy cheese center. A must-try side.</p>
                <span className="price">$9.99</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-4">
            <Link to="/menu" className="btn btn-secondary inline-flex">
              Explore Full Menu <ArrowRight className="ml-2" size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
