import "../Css/Project.css";

import React from "react";
import "./FeaturedProjects.css";

const projects = [
  {
    id: 1,
    title: "Sales Analytics Dashboard",
    subtitle: "Power BI • SQL • Excel",
    description:
      "Interactive dashboard for tracking KPIs, revenue trends, regional sales, and customer performance with clean data storytelling.",
    tags: ["Power BI", "SQL", "Data Cleaning", "Dashboard"],
    link: "#",
    github: "#",
    accent: "green"
  },
  {
    id: 2,
    title: "E-commerce Insights App",
    subtitle: "Python • Pandas • Streamlit",
    description:
      "Analyzed product, order, and customer behavior data to uncover top categories, repeat purchase patterns, and business growth metrics.",
    tags: ["Python", "Pandas", "Streamlit", "EDA"],
    link: "#",
    github: "#",
    accent: "blue"
  },
  {
    id: 3,
    title: "Portfolio Website",
    subtitle: "React • CSS • JavaScript",
    description:
      "Modern personal portfolio with smooth UI, responsive sections, animated cards, and a strong visual identity for showcasing work.",
    tags: ["React", "CSS", "Responsive UI", "Frontend"],
    link: "#",
    github: "#",
    accent: "pink"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="featured-projects" id="projects">
      <div className="projects-container">
        <div className="projects-heading">
          <span className="projects-badge">Featured Projects</span>
          <h2>Stuff I’ve built</h2>
          <p>
            A few projects that blend data, frontend, and problem solving into
            polished user experiences.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-card ${project.accent}`}>
              <div className="project-top">
                <div>
                  <h3>{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>
                <div className="project-icon">↗</div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.link} className="project-btn live">
                  Live Demo
                </a>
                <a href={project.github} className="project-btn code">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;