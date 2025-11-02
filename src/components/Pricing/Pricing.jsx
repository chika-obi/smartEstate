// components/Pricing.jsx
import React from "react";
import "./Pricing.css";

const plans = [
  {
    title: "Basic",
    price: "$50 / deal",
    features: [
      "List up to 5 properties",
      "Standard support",
      "Basic property analytics",
    ],
  },
  {
    title: "Pro",
    price: "$100 / deal",
    features: [
      "Unlimited property listings",
      "Priority support",
      "Advanced property analytics",
      "Featured listings",
    ],
  },
  {
    title: "Enterprise",
    price: "$200 / deal",
    features: [
      "Dedicated account manager",
      "Custom solutions",
      "Full analytics & reporting",
      "Marketing assistance",
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div key={index} className="pricing-card">
            <h3>{plan.title}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="btn-primary">Get Started</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
