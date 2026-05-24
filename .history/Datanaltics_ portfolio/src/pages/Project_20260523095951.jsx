import React from "react";
import "../Css/Project.css";


      "Built a recommendation engine using similarity logic and data preprocessing to suggest relevant content to users.",
    tags: ["Machine Learning", "Python", "Pandas", "Recommendation"],
    live: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Bulk Mail Automation Tool",
    subtitle: "React • FastAPI • CSV",
    description:
      "Full-stack tool for uploading contact files, validating records, and automating structured bulk email workflows efficiently.",
    tags: ["React", "FastAPI", "CSV", "Automation"],
    live: "#",
    github: "#"
  }
];

const FeaturedProjects = () => {
  return (
    <section className="featured-projects-section" id="projects">
      <div className="projects-container">
        <div className="projects-badge-wrapper">
          <div className="projects-badge">
            <span className="projects-badge-dot"></span>
            ✦ FEATURED PROJECTS ✦
          </div>
        </div>

        <div className="projects-heading">
          <h2 className="projects-title">
            <span className="glitch-text">SELECTED</span>
            <span className="glitch-text accent"> WORK</span>
          </h2>

          <p className="projects-subtext">
            A collection of projects where data, frontend, and creative problem
            solving come together.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={project.id}>
              <div className="project-card-top">
                <div>
                  <h3>{project.title}</h3>
                  <span className="project-subtitle">{project.subtitle}</span>
                </div>

                <div className="project-number">
                  0{index + 1}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span className="project-tag" key={i}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="project-actions">
                <a href={project.live} className="project-btn primary-btn">
                  🚀 LIVE DEMO
                </a>
                <a href={project.github} className="project-btn secondary-btn">
                  💻 GITHUB
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