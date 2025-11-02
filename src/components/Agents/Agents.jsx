// components/Agents.jsx
import React from "react";
import "./Agents.css";

const agents = [
  {
    name: "John Doe",
    role: "Senior Property Agent",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Jane Smith",
    role: "Property Consultant",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
  },
  {
    name: "Mike Johnson",
    role: "Sales Executive",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
  },
];

const Agents = () => {
  return (
    <section id="agents" className="agents">
      <h2>Meet Our Agents</h2>
      <div className="agents-grid">
        {agents.map((agent, index) => (
          <div key={index} className="agent-card">
            <img src={agent.image} alt={agent.name} />
            <h3>{agent.name}</h3>
            <p>{agent.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Agents;
