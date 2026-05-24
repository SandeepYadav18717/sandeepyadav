import { useEffect, useRef, useState } from "react";
import "..Css/SkillsAndCerts.css";

/* ─────────────────────────────────────────
   SKILLS DATA
───────────────────────────────────────── */
const skillGroups = [
  {
    label: "Data & Analytics",
    icon: "📊",
    skills: [
      { name: "Python",            pct: 88, color: "#4ade80" },
      { name: "SQL / MySQL",       pct: 85, color: "#38bdf8" },
      { name: "Power BI",          pct: 80, color: "#fb923c" },
      { name: "Google Analytics",  pct: 78, color: "#facc15" },
      { name: "Pandas & NumPy",    pct: 84, color: "#4ade80" },
    ],
  },
  {
    label: "Web Development",
    icon: "🌐",
    skills: [
      { name: "HTML & CSS",        pct: 92, color: "#f472b6" },
      { name: "JavaScript",        pct: 82, color: "#facc15" },
      { name: "React / Vite",      pct: 78, color: "#38bdf8" },
      { name: "REST APIs",         pct: 80, color: "#a78bfa" },
      { name: "Git / GitHub",      pct: 85, color: "#4ade80" },
    ],
  },
  {
    label: "Tools & Others",
    icon: "🛠️",
    skills: [
      { name: "Excel / Sheets",    pct: 90, color: "#4ade80" },
      { name: "FastAPI",           pct: 72, color: "#38bdf8" },
      { name: "Claude / AI APIs",  pct: 75, color: "#a78bfa" },
      { name: "Cyber Security",    pct: 68, color: "#fb923c" },
      { name: "Client Comm.",      pct: 88, color: "#f472b6" },
    ],
  },
];

/* ─────────────────────────────────────────
   CERTIFICATES DATA
   (Google Drive links kept as-is)
───────────────────────────────────────── */
const certs = [
  {
    id: 1,
    title: "HTML & CSS",
    issuer: "Infosys Springboard",
    icon: "🏗️",
    color: "#f472b6",
    bg: "rgba(244,114,182,0.08)",
    border: "rgba(244,114,182,0.2)",
    tag: "Web Dev",
    link: "https://drive.google.com/open?id=1VjbazkaFXqLneDA9rEClnEnSTXYzw-_Y&usp=drive_copy",
  },
  {
    id: 2,
    title: "Python Programming",
    issuer: "Infosys Springboard",
    icon: "🐍",
    color: "#4ade80",
    bg: "rgba(74,222,128,0.08)",
    border: "rgba(74,222,128,0.2)",
    tag: "Data",
    link: "https://drive.google.com/open?id=1VcXFGaJ4zMYXbI2buN4rOqFZF4EspUN9&usp=drive_copy",
  },
  {
    id: 3,
    title: "IIT Bombay Certification",
    issuer: "IIT Bombay",
    icon: "🎓",
    color: "#facc15",
    bg: "rgba(250,204,21,0.08)",
    border: "rgba(250,204,21,0.2)",
    tag: "Premium",
    link: "https://drive.google.com/open?id=1RybTyi7wgZZiIvR0wmsnJXYHi8CA6X8Q&usp=drive_copy",
    featured: true,
  },
  {
    id: 4,
    title: "Google Analytics",
    issuer: "Google",
    icon: "📈",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.08)",
    border: "rgba(56,189,248,0.2)",
    tag: "Analytics",
    link: "https://drive.google.com/open?id=1VenZbD9-G443WPeGw4om5mJjggaZBUOL&usp=drive_copy",
  },
  {
    id: 5,
    title: "Cyber Security",
    issuer: "Certified",
    icon: "🔐",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.08)",
    border: "rgba(251,146,60,0.2)",
    tag: "Security",
    link: "https://drive.google.com/open?id=1y57wSxOyuH82nm_laTWbtNs7qwPTnxKz&usp=drive_copy",
  },
  {
    id: 6,
    title: "Client Communication",
    issuer: "Professional",
    icon: "🤝",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.08)",
    border: "rgba(167,139,250,0.2)",
    tag: "Soft Skills",
    link: "https://drive.google.com/open?id=1VkGt3GKIIEtc_L-Ttwk3JQCYdJcndjLk&usp=drive_copy",
  },
  {
    id: 7,
    title: "Achievement Certificate",
    issuer: "Certified",
    icon: "🏅",
    color: "#facc15",
    bg: "rgba(250,204,21,0.08)",
    border: "rgba(250,204,21,0.2)",
    tag: "Achievement",
    link: "https://drive.google.com/open?id=1-2428966e-238d-4c50-a895-31c996e274d5.pdf",
  },
];

/* ─────────────────────────────────────────
   SKILL BAR (animates when scrolled into view)
───────────────────────────────────────── */
function SkillBar({ name, pct, color, delay }) {
  const [filled, setFilled] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFilled(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="sc-skill-row" ref={ref}>
      <div className="sc-skill-meta">
        <span className="sc-skill-name">{name}</span>
        <span className="sc-skill-pct" style={{ color }}>{pct}%</span>
      </div>
      <div className="sc-bar-track">
        <div
          className="sc-bar-fill"
          style={{
            width: filled ? `${pct}%` : "0%",
            background: `linear-gradient(90deg, ${color}99, ${color})`,
            transitionDelay: `${delay}s`,
          }}
        />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SKILL GROUP CARD
───────────────────────────────────────── */
function SkillGroup({ group }) {
  return (
    <div className="sc-skill-card">
      <div className="sc-skill-card-header">
        <span className="sc-skill-icon">{group.icon}</span>
        <span className="sc-skill-group-label">{group.label}</span>
      </div>
      <div className="sc-skill-list">
        {group.skills.map((s, i) => (
          <SkillBar key={s.name} {...s} delay={i * 0.08} />
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   CERT CARD
───────────────────────────────────────── */
function CertCard({ cert }) {
  return (
    <a
      className={`sc-cert-card ${cert.featured ? "sc-cert-card--feat" : ""}`}
      href={cert.link}
      target="_blank"
      rel="noreferrer"
      style={{ "--cert-color": cert.color, "--cert-bg": cert.bg, "--cert-border": cert.border }}
    >
      {cert.featured && <div className="sc-cert-feat-label">⭐ Premium</div>}

      {/* icon circle */}
      <div className="sc-cert-icon-wrap" style={{ background: cert.bg, border: `1px solid ${cert.border}` }}>
        <span className="sc-cert-icon">{cert.icon}</span>
      </div>

      <div className="sc-cert-info">
        <div className="sc-cert-title">{cert.title}</div>
        <div className="sc-cert-issuer">{cert.issuer}</div>
      </div>

      <div className="sc-cert-foot">
        <span className="sc-cert-tag" style={{ color: cert.color, background: cert.bg, border: `1px solid ${cert.border}` }}>
          {cert.tag}
        </span>
        <span className="sc-cert-view">View ↗</span>
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────
   MAIN EXPORT
───────────────────────────────────────── */
export default function SkillsAndCerts() {
  return (
    <>
      {/* ── SKILLS SECTION ── */}
      <section className="sc-section" id="skills">
        <div className="sc-inner">
          <p className="sc-tag">Expertise</p>
          <h2 className="sc-title">Core Skills</h2>
          <p className="sc-sub">
            A blend of data analytics, web development, and AI tooling built through real-world projects and certified courses.
          </p>
          <div className="sc-skills-grid">
            {skillGroups.map((g) => (
              <SkillGroup key={g.label} group={g} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CERTS SECTION ── */}
      <section className="sc-section sc-section--dark" id="certifications">
        <div className="sc-inner">
          <p className="sc-tag">Credentials</p>
          <h2 className="sc-title">Education &amp; Certificates</h2>
          <p className="sc-sub">
            Certifications from Infosys, IIT Bombay, Google, and more — click any card to view the certificate.
          </p>

          {/* stats row */}
          <div className="sc-stats-row">
            {[
              { n: "7+", l: "Certificates" },
              { n: "3",  l: "Institutions" },
              { n: "2",  l: "Infosys Certs" },
              { n: "1",  l: "IIT Bombay" },
            ].map((s) => (
              <div className="sc-stat-box" key={s.l}>
                <div className="sc-stat-n">{s.n}</div>
                <div className="sc-stat-l">{s.l}</div>
              </div>
            ))}
          </div>

          {/* cert grid */}
          <div className="sc-cert-grid">
            {certs.map((c) => (
              <CertCard key={c.id} cert={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}