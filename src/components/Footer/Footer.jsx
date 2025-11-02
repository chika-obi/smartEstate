import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-about">
          <h3>SmartEstate</h3>
          <p>
            SmartEstate connects property buyers and sellers on one trusted platform. 
            We make real estate transactions faster, smarter, and more transparent. 
            As a platform owner, we facilitate deals and earn a small fee for every successful transaction.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#listings">Listings</a></li>
            <li><a href="#agents">Agents</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Services / Listings */}
        <div className="footer-services">
          <h4>Our Services</h4>
          <ul>
            <li>Property Listings</li>
            <li>Buy & Sell Properties</li>
            <li>Featured Agents</li>
            <li>Pricing Plans</li>
            <li>Transaction Facilitation</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><FontAwesomeIcon icon={faMapMarkerAlt} />123 Estate Lane,Nigeria</li>
            <li><FontAwesomeIcon icon={faPhone} /> +234 801 234 5678</li>
            <li><FontAwesomeIcon icon={faEnvelope} /> info@smartestate.com</li>
          </ul>

          {/* Social Media */}
          <div className="social-icons">
            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
          </div>
        </div>
      </div>

      {/* Newsletter / Footer Bottom */}
      <div className="footer-newsletter">
        <h4>Subscribe to our Newsletter</h4>
        <form>
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </form>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} SmartEstate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
