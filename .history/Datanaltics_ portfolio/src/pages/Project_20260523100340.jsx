import React from "react";
import "../Css/Project.css";


import React, { useEffect, useRef, useState } from "react";
import "./Projects.css";

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const glowRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Bulk Mail Automation System",
      tech: "React • FastAPI • CSV",
      desc: "Built a full-stack bulk email tool for uploading contact files, validating data, and sending structured mail campaigns efficiently.",
      tags: ["React", "FastAPI", "CSV", "API"]
    },
    {
      id: 2,
      title: "Job Portal Dashboard",
      tech: "React • Node.js • MongoDB",
      desc: "Created a responsive dashboard for job listings, applications, and recruiter-side management with a clean user experience.",
      tags: ["React", "Node.js", "MongoDB", "Dashboard"]
    },
    {
      id: 3,
      title: "E-commerce Website",
      tech: "React • JavaScript • CSS",
      desc: "Developed a modern shopping interface with product cards, filters, cart flow, and responsive layouts for smooth browsing.",
      tags: ["React", "JavaScript", "CSS", "UI"]
    },
    {
      id: 4,
      title: "Student Management System",
      tech: "Python • SQL • Tkinter",
      desc: "Designed a system to manage student records, attendance, and academic details with structured database operations.",
      tags: ["Python", "SQL", "CRUD", "Desktop"]
    },
    {
      id: 5,
      title: "Portfolio Website",
      tech: "React • JSX • CSS",
      desc: "Built a personal portfolio website to showcase skills, featured projects, contact details, and a modern frontend identity.",
      tags: ["React", "JSX", "CSS", "Portfolio"]
    },
    {
      id: 6,
      title: "Weather Forecast App",
      tech: "React • API • JavaScript",
      desc: "Created a weather application that fetches real-time forecast data and displays temperature, conditions, and city-based search results.",
      tags: ["React", "REST API", "JavaScript", "Frontend"]
    }
  ];

  const floatingElements = [
    { icon: "💻", x: "8%", y: "18%", delay: "0s", size: "2rem" },
    { icon: "⚛️", x: "88%", y: "15%", delay: "0.5s", size: "2.3rem" },
    { icon: "🧠", x: "92%", y: "72%", delay: "1s", size: "1.8rem" },
    { icon: "🚀", x: "6%", y: "76%", delay: "0.3s", size: "2.2rem" },
    { icon: "📦", x: "52%", y: "92%", delay: "0.8s", size: "2rem" },
    { icon: "⚡", x: "75%", y: "45%", delay: "0.2s", size: "1.8rem" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setMousePosition({ x: x * 20, y: y * 20 });

      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cardStyle = {
    transform: `perspective(1200px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
    transition: "transform 0.1s ease-out"
  };

  return (
    <section ref={sectionRef} className="projects-3d-section">
      <div ref={glowRef} className="cursor-glow-3d" />
      <div className="grid-bg" />

      {floatingElements.map((el, idx) => (
        <div
          key={idx}
          className="floating-3d-icon"
          style={{
            left: el.x,
            top: el.y,
            fontSize: el.size,
            animationDelay: el.delay
          }}
        >
          {el.icon}
        </div>
      ))}

      <div className="projects-container">
        <div className="badge-wrapper">
          <div className="section-badge">
            <span className="dot"></span>
            ✦ FEATURED PROJECTS ✦
          </div>
        </div>

        <div className="projects-panel" style={cardStyle}>
          <div className="projects-header">
            <h2>
              <span className="glitch-text">FEATURED</span>
              <span className="glitch-text accent"> PROJECTS</span>
            </h2>
            <p>
              Here are six IT projects that reflect my frontend, backend, API,
              and data-focused development work.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-top">
                  <div>
                    <h3>{project.title}</h3>
                    <span>{project.tech}</span>
                  </div>
                  <div className="project-id">0{project.id}</div>
                </div>

                <p>{project.desc}</p>

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <button className="btn-3d-primary">📂 VIEW PROJECT</button>
                  <button className="btn-3d-secondary">💻 SOURCE CODE</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;