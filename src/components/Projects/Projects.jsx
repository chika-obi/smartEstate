import React from "react";
import "./Projects.css";

function Projects() {
  const projectList = [
    {
      image:
         "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
      title: "Luxury Villa Showcase",
      description:
        "An elegant modern villa demo highlighting SmartEstate’s property presentation layout and booking features.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=800&q=60",
      title: "Agent Dashboard",
      description:
        "An interactive dashboard for agents to manage properties, track clients, and monitor deals in real time.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=800&q=60",
      title: "Smart Analytics",
      description:
        "Visual demo showing SmartEstate’s real-time insights into property value trends and market performance.",
    },
  ];

  return (
    <section className="projects" id="demo">
      <div className="projects-header">
        <h2>Projects & Demos</h2>
        <p>Explore how SmartEstate transforms property management and visualization.</p>
      </div>

      <div className="project-grid">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
