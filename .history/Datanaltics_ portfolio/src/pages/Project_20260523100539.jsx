import React from "react";
import "../Css/Project.css";


import React, { useEffect, useRef, useState } from "react";

const Projects = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const projects = [
    {
      id: 1,
      title: "Bulk Mail Automation System",
      tech: "React • FastAPI • CSV",
      description:
        "Built a full-stack tool for uploading contact files, validating records, and automating structured bulk email workflows efficiently.",
      tags: ["React", "FastAPI", "CSV", "Automation"]
    },
    {
      id: 2,
      title: "Job Portal Dashboard",
      tech: "React • Node.js • MongoDB",
      description:
        "Created a responsive dashboard for job listings, user applications, recruiter management, and admin-side insights.",
      tags: ["React", "Node.js", "MongoDB", "Dashboard"]
    },
    {
      id: 3,
      title: "E-commerce Website",
      tech: "React • JavaScript • CSS",
      description:
        "Developed a shopping interface with product cards, filters, cart functionality, and a responsive browsing experience.",
      tags: ["React", "JavaScript", "CSS", "UI"]
    },
    {
      id: 4,
      title: "Student Management System",
      tech: "Python • SQL • Tkinter",
      description:
        "Designed a desktop system for managing student records, attendance, and academic details with structured CRUD operations.",
      tags: ["Python", "SQL", "CRUD", "Desktop App"]
    },
    {
      id: 5,
      title: "Portfolio Website",
      tech: "React • JSX • CSS",
      description:
        "Built a personal portfolio to showcase skills, featured work, contact details, and a modern frontend identity.",
      tags: ["React", "JSX", "CSS", "Portfolio"]
    },
    {
      id: 6,
      title: "Weather Forecast App",
      tech: "React • API • JavaScript",
      description:
        "Created a weather app that fetches live forecast data and shows temperature, conditions, and city-based search results.",
      tags: ["React", "REST API", "JavaScript", "Frontend"]
    }
  ];

  const floatingElements = [
    { icon: "💻", x: "10%", y: "20%", delay: "0s", size: "2rem" },
    { icon: "⚛️", x: "85%", y: "15%", delay: "0.5s", size: "2.5rem" },
    { icon: "🧠", x: "90%", y: "70%", delay: "1s", size: "1.8rem" },
    { icon: "🚀", x: "5%", y: "75%", delay: "0.3s", size: "2.2rem" },
    { icon: "📦", x: "50%", y: "90%", delay: "0.8s", size: "2rem" },
    { icon: "💎", x: "20%", y: "85%", delay: "1.2s", size: "1.5rem" },
    { icon: "⚡", x: "75%", y: "45%", delay: "0.2s", size: "1.8rem" },
    { icon: "🎯", x: "15%", y: "50%", delay: "0.7s", size: "1.6rem" }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x: x * 20, y: y * 20 });

      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + "px";
        glowRef.current.style.top = e.clientY + "px";
      }
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, (window.scrollY - rect.top + 200) / 500)
      );
      setScrollProgress(progress);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const cardStyle = {
    transform: `perspective(1200px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
    transition: "transform 0.1s ease-out"
  };

  return (
    <section
      ref={sectionRef}
      className="projects-3d-section"
      style={{
        position: "relative",
        minHeight: "100vh",
        padding: "6rem 2rem",
        overflow: "hidden",
        background: "radial-gradient(ellipse at 30% 40%, #0a0e1a 0%, #05070a 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <div
        ref={glowRef}
        className="cursor-glow-3d"
        style={{
          position: "fixed",
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(circle, rgba(74,222,128,0.12) 0%, rgba(0,0,0,0) 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
          zIndex: 10,
          transform: "translate(-50%, -50%)",
          transition: "transform 0.05s"
        }}
      />

      <div
        className="grid-bg"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          mask: "radial-gradient(circle at 50% 50%, black 40%, transparent 90%)",
          pointerEvents: "none"
        }}
      />

      {floatingElements.map((el, idx) => (
        <div
          key={idx}
          className="floating-3d-icon"
          style={{
            position: "absolute",
            left: el.x,
            top: el.y,
            fontSize: el.size,
            filter: "drop-shadow(0 0 12px rgba(74,222,128,0.3))",
            animation: `float3d 6s ease-in-out infinite`,
            animationDelay: el.delay,
            zIndex: 5,
            opacity: 0.6,
            pointerEvents: "none"
          }}
        >
          {el.icon}
        </div>
      ))}

      <div
        className="projects-container"
        style={{
          maxWidth: "1300px",
          width: "100%",
          margin: "0 auto",
          position: "relative",
          zIndex: 20
        }}
      >
        <div
          className="badge-wrapper"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
            animation: "slideDownFade 0.8s ease"
          }}
        >
          <div
            style={{
              background: "rgba(74,222,128,0.12)",
              backdropFilter: "blur(8px)",
              border: "1px solid rgba(74,222,128,0.25)",
              borderRadius: "100px",
              padding: "0.4rem 1.2rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              fontFamily: "'Space Grotesk', monospace",
              fontSize: "0.7rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#4ade80"
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                background: "#4ade80",
                borderRadius: "50%",
                display: "inline-block",
                animation: "pulse 1.5s infinite"
              }}
            ></span>
            ✦ FEATURED PROJECTS ✦
          </div>
        </div>

        <div
          ref={cardRef}
          className="tilt-card"
          style={{
            ...cardStyle,
            background: "rgba(15, 20, 30, 0.65)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(74,222,128,0.2)",
            borderRadius: "32px",
            padding: "2rem",
            boxShadow:
              "0 25px 45px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(74,222,128,0.1)",
            transition: "transform 0.2s ease-out, box-shadow 0.3s"
          }}
        >
          <div style={{ marginBottom: "2rem", textAlign: "center" }}>
            <div
              style={{
                fontSize: "clamp(2rem, 5vw, 3.5rem)",
                fontWeight: 900,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                alignItems: "baseline",
                justifyContent: "center"
              }}
            >
              <span className="glitch-text" data-text="FEATURED">
                FEATURED
              </span>
              <span
                style={{
                  color: "#4ade80",
                  textShadow: "0 0 8px rgba(74,222,128,0.5)"
                }}
                className="glitch-text"
                data-text="PROJECTS"
              >
                PROJECTS
              </span>
            </div>

            <div
              style={{
                fontFamily: "'Space Grotesk', monospace",
                fontSize: "0.9rem",
                color: "#94a3b8",
                marginTop: "0.8rem"
              }}
            >
              <span>builds@portfolio:/showcase$</span>
            </div>

            <p
              style={{
                fontSize: "1rem",
                lineHeight: 1.7,
                color: "#cbd5e1",
                maxWidth: "800px",
                margin: "1rem auto 0"
              }}
            >
              A curated collection of software, frontend, backend, and API-based
              builds crafted with code, logic, and clean user experience.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.2rem"
            }}
            