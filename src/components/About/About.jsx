// components/About.jsx
import React from "react";
import "./About.css";

const features = [
  {
    title: "Buy Properties",
    description:
      "Explore verified property listings and find your dream home or investment property with ease and transparency.",
    icon: "🏠",
  },
  {
    title: "Sell Properties",
    description:
      "List your property quickly and reach thousands of potential buyers while ensuring secure transactions.",
    icon: "📈",
  },
  {
    title: "We Facilitate Deals",
    description:
      "SmartEstate earns a small facilitation fee per successful transaction, keeping the platform running smoothly and improving user experience.",
    icon: "🤝",
  },
];

const About = () => {
  return (
    <section id="about" className="about">
      <div className="about-header">
        <h2>About SmartEstate</h2>
        <p>
          SmartEstate is a modern real estate marketplace connecting property buyers and sellers seamlessly. Whether you want to buy, sell, or invest, our platform makes real estate transactions easier, faster, and smarter.
        </p>
      </div>

      <div className="feature-cards">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
