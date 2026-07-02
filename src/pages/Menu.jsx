import React, { useState } from 'react';
import './Menu.css';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Loaded Potatoes', 'Wraps & Subs', 'Sides', 'Drinks'];

  const menuItems = [
    { id: 1, name: 'Classic Loaded Potato', category: 'Loaded Potatoes', price: 12.99, description: 'Butter, sour cream, cheddar cheese, bacon bits, and green onions.' },
    { id: 2, name: 'Spicy Chicken Potato', category: 'Loaded Potatoes', price: 15.99, description: 'Spicy buffalo chicken, ranch drizzle, jalapeños, and melted cheese.' },
    { id: 3, name: 'Signature Beef Wrap', category: 'Wraps & Subs', price: 16.49, description: 'Halal-certified beef, fresh veggies, signature sauce, toasted wrap.' },
    { id: 4, name: 'Crispy Chicken Sub', category: 'Wraps & Subs', price: 14.99, description: 'Crispy fried chicken, lettuce, tomato, mayo on a fresh baked sub roll.' },
    { id: 5, name: 'Deep Fried Cheese Curds', category: 'Sides', price: 9.99, description: 'Golden crispy exterior with a hot, gooey cheese center. Served with marinara.' },
    { id: 6, name: 'Sweet Corn Cup', category: 'Sides', price: 6.99, description: 'Hot buttery corn topped with our special seasoning blend and mayo.' },
    { id: 7, name: 'Mozzarella Sticks', category: 'Sides', price: 8.99, description: 'Six piece crispy mozzarella sticks with dipping sauce.' },
    { id: 8, name: 'Fountain Drink', category: 'Drinks', price: 2.99, description: 'Assorted Pepsi products.' },
  ];

  const filteredItems = activeCategory === 'All' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page animate-fade-in">
      <div className="menu-header">
        <div className="container">
          <h1>OUR <span className="text-red">MENU</span></h1>
          <p>Halal-friendly. Fast service. Big flavour.</p>
        </div>
      </div>

      <div className="container">
        <div className="category-filters">
          {categories.map(category => (
            <button 
              key={category}
              className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="menu-item-header">
                <h3>{item.name}</h3>
                <span className="menu-price">${item.price.toFixed(2)}</span>
              </div>
              <p className="menu-desc">{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className="menu-cta">
          <p>Ready to experience the flavour?</p>
          <a href="https://www.ubereats.com/store/quick-bites-122" target="_blank" rel="noreferrer" className="btn btn-primary">
            Order on Uber Eats
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
