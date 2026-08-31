import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Check if admin is currently logged in
  const isLoggedIn = !!localStorage.getItem('adminToken');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="navbar-wrapper">
      <nav className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <span className="logo">
            SHIVAM<span className="Nav-highlight">.dev</span>
          </span>
        </Link>

        {/* Hamburger Icon for Mobile/Tablet */}
        <button 
          className={`hamburger ${isOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Nav Links & Admin Button Drawer */}
        <div className={`nav-drawer ${isOpen ? 'open' : ''}`}>
          <ul className="nav-menu">
            <li>
              <Link 
                to="/" 
                className={`nav-item ${location.pathname === '/' ? 'active-link' : ''}`} 
                onClick={closeMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/Academics" 
                className={`nav-item ${location.pathname === '/Academics' ? 'active-link' : ''}`} 
                onClick={closeMenu}
              >
                Academics
              </Link>
            </li>
            <li>
              <Link 
                to="/Projects" 
                className={`nav-item ${location.pathname === '/Projects' ? 'active-link' : ''}`} 
                onClick={closeMenu}
              >
                Project
              </Link>
            </li>
            <li>
              <Link 
                to="/Contact" 
                className={`nav-item ${location.pathname === '/Contact' ? 'active-link' : ''}`} 
                onClick={closeMenu}
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Admin Navigation Button */}
          <Link 
            to="/Admin" 
            className={`nav-btn ${location.pathname === '/Admin' ? 'active-admin' : ''}`} 
            onClick={closeMenu}
          >
            🔒 Admin {isLoggedIn && <span className="status-badge">●</span>}
          </Link>
        </div>

      </nav>
    </header>
  );
};

export default Navigation;