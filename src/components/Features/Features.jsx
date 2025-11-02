import React from "react";
import "./Features.css";

function Features() {
  const featureList = [
    {
      icon: "🏠",
      title: "Property Management",
      description:
        "Easily add, update, and manage all your properties in one place with a clean, intuitive interface.",
    },
    {
      icon: "👥",
      title: "Client Tracking",
      description:
        "Track client inquiries, communications, and deals effortlessly through your personalized dashboard.",
    },
    {
      icon: "💼",
      title: "Automated Workflows",
      description:
        "Save time by automating routine tasks like reminders, lease renewals, and document generation.",
    },
    {
      icon: "📊",
      title: "Analytics & Insights",
      description:
        "Visualize property performance and gain insights to make data-driven investment decisions.",
    },
    {
      icon: "🔐",
      title: "Secure Cloud Access",
      description:
        "Access your data anywhere, anytime, with enterprise-grade security and backup features.",
    },
    {
      icon: "📱",
      title: "Mobile Ready",
      description:
        "Use SmartEstate seamlessly across all devices — from desktop to smartphone.",
    },
  ];

  return (
    <section className="features" id="features">
      <div className="features-header">
        <h2>Key Features</h2>
        <p>Everything you need to manage real estate smarter and faster.</p>
      </div>

      <div className="feature-grid">
        {featureList.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
