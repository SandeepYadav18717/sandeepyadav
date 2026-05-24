import React, { useEffect, useState } from "react";
import "../Css/About.css";
const stats = [
  { label: "DATA VIBES", value: "📊 99%", color: "green" },
  { label: "CREATIVE JUICE", value: "🎨 ∞", color: "pink" },
  { label: "COFFEE FUEL", value: "☕ 8/7", color: "orange" },
  { label: "BUGS SQUASHED", value: "🐛 420+", color: "blue" }
];

const techStack = [
  { name: "Python", icon: "🐍", color: "green" },
  { name: "SQL", icon: "🗄️", color: "blue" },
  { name: "Power BI", icon: "📊", color: "orange" },
  { name: "React", icon: "⚛️", color: "cyan" },
  { name: "JS/TS", icon: "🌐", color: "yellow" },
  { name: "Pandas", icon: "🐼", color: "purple" },
  { name: "Tableau", icon: "📈", color: "pink" },
  { name: "Git", icon: "🐙", color: "orange" }
];

const quotes = [
  "✨ turning chaos into insights ✨",
  "📈 data storyteller by heart 📈",
  "🎯 99.9% accuracy or bust 🎯",
  "🌀 live. laugh. analyze. 🌀",
  "🤖 python > everything 🤖"
];

const floatingElements = [
  { icon: "📊", left: "10%", top: "20%", delay: "0s", size: "2rem" },
  { icon: "🐍", left: "85%", top: "15%", delay: "0.5s", size: "2.5rem" },
  { icon: "⚛️", left: "90%", top: "70%", delay: "1s", size: "1.8rem" },
  { icon: "📈", left: "5%", top: "75%", delay: "0.3s", size: "2.2rem" },
  { icon: "🔮", left: "50%", top: "90%", delay: "0.8s", size: "2rem" },
  { icon: "💎", left: "20%", top: "85%", delay: "1.2s", size: "1.5rem" },
  { icon: "⚡", left: "75%", top: "45%", delay: "0.2s", size: "1.8rem" },
  { icon: "🎯", left: "15%", top: "50%", delay: "0.7s", size: "1.6rem" }
];

const About = () => {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [glow, setGlow] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);

    const handleMouseMove = (e) => {
      setGlow({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(quoteInterval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="about-section">
      <div
        className="cursor-glow"
        style={{
          left: `${glow.x}px`,
          top: `${glow.y}px`
        }}
      />

      <div className="grid-bg" />

      {floatingElements.map((el, idx) => (
        <div
          key={idx}
          className="floating-icon"
          style={{
            left: el.left,
            top: el.top,
            fontSize: el.size,
            animationDelay: el.delay
          }}
        >
          {el.icon}
        </div>
      ))}

      <div className="about-container">
        <div className="badge-wrapper">
          <div className="section-badge">
            <span className="badge-dot" />
            ✦ 3D VIBE.ZONE ✦
          </div>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="name-block">
              <h2 className="name-title">
                <span className="glitch-text">SANDEEP</span>
                <span className="glitch-text accent">YADAV</span>
              </h2>

              <div className="terminal-line">
                <span>data_analyst@future:/insights$</span>
                <span className="status-badge">✦ ACTIVE ✦</span>
              </div>
            </div>

            <div className="quote-box">
              <p>
                <span className="quote-prefix">_</span>
                {quotes[currentQuote]}
                <span className="blink">|</span>
              </p>
            </div>

            <p className="about-bio">
              I'm a <strong>data alchemist</strong> & frontend architect who
              turns messy datasets into <strong>✨story-driven insights✨</strong>.
              Based in India, I vibe with Python, SQL, and React — blending
              analytics with killer UI. My GitHub? <strong>9+ repos</strong> of
              pure creative energy.
            </p>

            <div className="highlights">
              <div className="highlight green">🎧 lofi hip hop + pandas</div>
              <div className="highlight blue">⚡ always shipping</div>
            </div>

            <div className="about-actions">
              <button className="btn btn-primary">📂 VIEW PROJECTS ↗</button>
              <button className="btn btn-secondary">🎵 Ai Project</button>
            </div>
          </div>

          <div className="about-side">
            <div className="stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className={`stat-card ${stat.color}`}>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="tech-orbit-container">
              <div className="tech-orbit">
                {techStack.map((tech, idx) => {
                  const angle = (idx / techStack.length) * 360;
                  const rad = (angle * Math.PI) / 180;
                  const radius = 110;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;

                  return (
                    <div
                      key={idx}
                      className={`tech-orb ${tech.color}`}
                      style={{
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`
                      }}
                      title={tech.name}
                    >
                      <span role="img" aria-label={tech.name}>
                        {tech.icon}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="tech-core">🧠</div>
              <div className="tech-caption">✦ Tech-stack data toolkit ✦</div>
            </div>

            <div className="holo-line">// TURNING DATA INTO DOPAMINE //</div>
          </div>
        </div>

        <div className="about-footer">
          <div>🔥 420+ commits '24</div>
          <div>⭐ 9+ public repos</div>
          <div>🏆 data viz enthusiast</div>
          <div>🤝 open to collabs</div>
        </div>
      </div>
    </section>
  );
};

export default About;