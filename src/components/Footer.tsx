'use client';

import './css/Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer-section text-white pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Logo, Socials, and Text */}
          <div className="col-md-4 footer-left text-md-start text-center">
            <img src="/assets/img/logo.png" alt="DreamzCricket Logo" height={50} className="mb-3" />
            <p className="footer-text mt-3">
              DreamzCricket is your ultimate destination for fantasy sports. Predict. Play. Win.
            </p>
            
            <div className="social-icons">
              <a href="#" className="social-icon"><FaFacebookF /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaInstagram /></a>
              <a href="#" className="social-icon"><FaYoutube /></a>
            </div>

            
          </div>

          {/* Navigation Links */}
          <div className="col-md-4 text-center">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/" className="footer-link">Home</a></li>
              <li><a href="/#how-to-play" className="footer-link">How to Play</a></li>
              <li><a href="/#faq" className="footer-link">FAQ</a></li>
              <li><a href="/contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="col-md-4 text-center">
            <h5 className="mb-3">Legal</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="/terms" className="footer-link">Terms & Conditions</a></li>
              <li><a href="/privacy" className="footer-link">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-light mt-4" />

        <div className="text-center small">
          © {new Date().getFullYear()} DreamzCricket. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
