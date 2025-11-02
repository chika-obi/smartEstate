// components/Hero.jsx
import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Buy, Sell, and Discover Properties Effortlessly</h1>
        <p>
          SmartEstate connects property buyers and sellers on one trusted
          platform — making real estate transactions faster, smarter, and more
          transparent.
        </p>
        <div className="hero-buttons">
          <a href="#listings" className="btn-primary">
            View Listings
          </a>
          <a href="#how-it-works" className="btn-secondary">
            Learn How It Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
