// components/HowItWorks.jsx
import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    title: "Browse & Buy",
    description:
      "Explore verified property listings and find your dream home or investment property.",
    svg: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="#00bcd4">
        <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3z" />
      </svg>
    ),
  },
  {
    title: "List & Sell",
    description:
      "List your property and reach thousands of potential buyers with ease and security.",
    svg: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="#00bcd4">
        <path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zm0-8h14V7H7v2z" />
      </svg>
    ),
  },
  {
    title: "Facilitated Deals",
    description:
      "SmartEstate ensures every transaction is smooth, transparent, and earns a small facilitation fee.",
    svg: (
      <svg width="50" height="50" viewBox="0 0 24 24" fill="#00bcd4">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 14h-2v-2h2v2zm0-4h-2V6h2v6z" />
      </svg>
    ),
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="how-it-works">
      <h2>How SmartEstate Works</h2>
      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={index} className="step-item">
            <div className="icon">{step.svg}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {index < steps.length - 1 && <div className="connector" />}
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
