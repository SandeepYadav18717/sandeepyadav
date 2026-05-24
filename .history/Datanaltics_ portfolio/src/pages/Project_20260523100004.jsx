import React from "react";
import "../Css/Project.css";


const projects = [
  {
    id: 1,
    title: "Bulk Mail Automation System",
    subtitle: "React • FastAPI • CSV",
    description:
      "Built a full-stack bulk email tool for uploading contact files, validating data, and sending structured mail campaigns efficiently.",
    tags: ["React", "FastAPI", "CSV", "API"],
    live: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Job Portal Dashboard",
    subtitle: "React • Node.js • MongoDB",
    description:
      "Created a responsive dashboard for job listings, applications, and recruiter-side management with a clean user experience.",
    tags: ["React", "Node.js", "MongoDB", "Dashboard"],
    live: "#",
    github: "#"
  },
  {
    id: 3,
    title: "E-commerce Website",
    subtitle: "React • JavaScript • CSS",
    description:
      "Developed a modern shopping interface with product cards, filters, cart flow, and responsive layouts for smooth browsing.",
    tags: ["React", "JavaScript", "CSS", "UI"],
    live: "#",
    github: "#"
  },
  {
    id: 4,
    title: "Student Management System",
    subtitle: "Python • SQL • Tkinter",
    description:
      "Designed a system to manage student records, attendance, and academic details with structured database operations.",
    tags: ["Python", "SQL", "CRUD", "Desktop App"],
    live: "#",
    github: "#"
  },
  {
    id: 5,
    title: "Portfolio Website",
    subtitle: "React • JSX • CSS",
    description:
      "Built a personal portfolio website to showcase skills, featured projects, contact details, and a modern frontend identity.",
    tags: ["React", "JSX", "CSS", "Portfolio"],
    live: "#",
    github: "#"
  },
  {
    id: 6,
    title: "Weather Forecast App",
    subtitle: "React • API • JavaScript",
    description:
      "Created a weather application that fetches real-time forecast data and displays temperature, conditions, and city-based search results.",
    tags: ["React", "REST API", "JavaScript", "Frontend"],
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
            <span className="glitch-text">IT</span>
            <span className="glitch-text accent"> PROJECTS</span>
          </h2>
          <p className="projects-subtext">
            A collection of software and web development projects built with
            frontend, backend, database, and API technologies.
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

                <div className="project-number">0{index + 1}</div>
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