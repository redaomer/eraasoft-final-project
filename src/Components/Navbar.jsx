import React, { useState } from 'react';
import { FaVideo, FaSearch, FaShoppingBag, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  return (
    <nav className="navbar" style={{ position: 'relative', zIndex: 50 }}>
      <div className="navbar-left">
        <h2 className="logo">ZOSE</h2>
        <FaVideo className="logo-icon" />
      </div>

      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/pages">Pages</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="navbar-right">
        <FaSearch onClick={() => setShowSearch(!showSearch)} className="icon" style={{ cursor: 'pointer' }} />
        <FaShoppingBag onClick={() => setShowCart(!showCart)} className="icon" style={{ cursor: 'pointer' }} />
        <FaCog onClick={() => setShowSettings(!showSettings)} className="icon" style={{ cursor: 'pointer' }} />
      </div>

      {showSearch && (
        <div className="search-modal">
          <input type="text" placeholder="Search here..." autoFocus />
          <button onClick={() => setShowSearch(false)}>Close</button>
        </div>
      )}

      {showCart && (
        <div className="cart-popup">
          <p>🛒 Your cart is empty</p>
          <button onClick={() => setShowCart(false)}>Close</button>
        </div>
      )}

      {showSettings && (
        <div className="settings-popup">
          <p>⚙️ Settings</p>
          <ul>
            <li>Profile</li>
            <li>Notifications</li>
            <li>Logout</li>
          </ul>
          <button onClick={() => setShowSettings(false)}>Close</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;