// components/Header.jsx
import React from "react";
import "./Header.css";

const Header = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <div className="logo">SmartEstate</div>
      <nav className="nav">
        <button onClick={() => scrollToSection("home")}>Home</button>
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("how-it-works")}>How It Works</button>
        <button onClick={() => scrollToSection("listings")}>Listings</button>
        <button onClick={() => scrollToSection("agents")}>Agents</button>
        <button onClick={() => scrollToSection("pricing")}>Pricing</button>
        <button onClick={() => scrollToSection("contact")}>Contact</button>
      </nav>
    </header>
  );
};

export default Header;
