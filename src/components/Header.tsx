'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import './css/Header.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    // Set initial scroll state
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Close menu when clicking on nav items (for mobile)
  const closeMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        {/* Logo */}
        <Link href="/" className="logo" onClick={closeMenu}>
          <img 
            src="/assets/img/logo.png" 
            alt="DreamzCricket Logo" 
            className="logo-img" 
          />
        </Link>

        {/* Burger Icon - Only visible on mobile */}
        <div 
          className={`burger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation */}
        <nav className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <Link href="/" className="nav-link" onClick={closeMenu}>Home</Link>
          <Link href="/#how-to-play" className="nav-link" onClick={closeMenu} scroll={false}>
            How to Play
          </Link>
          <Link href="/#about-us" className="nav-link" onClick={closeMenu} scroll={false}>
            About Us
          </Link>
          <Link href="/#faq" className="nav-link" onClick={closeMenu} scroll={false}>
            FAQ
          </Link>
          <Link href="/terms" className="nav-link" onClick={closeMenu}>
            Terms
          </Link>
          <Link href="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </Link>
          <Link 
            href="#download" 
            className="btn btn-danger download-btn" 
            onClick={closeMenu}
            scroll={false}
          >
            Download App
          </Link>
        </nav>
      </div>
    </header>
  );
}