import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./Footer.css"; 
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        {/* Logo & Description */}
        <div className="footer-section">
          <h2>Cloud Kitchen</h2>
          <p>Delivering fresh & delicious meals to your doorstep!</p>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@cloudkitchen.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Address: Coimbatore, Tamil Nadu, India</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-section social-icons">
          <h3>Follow Us</h3>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Cloud Kitchen. All rights reserved.</p>
      </div>

      {/* Footer Navigation Links */}
      <div className="footer-navigation">
        
      </div>
    </footer>
  );
};

export default Footer;
