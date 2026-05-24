import React, { useEffect, useState } from "react";
import "../Css/About.css";
const stats = [
  { label: "Problem Analysis", value: "📊 99%", color: "green" },
  { label: "Certification", value: "🎨 15+", color: "pink" },
  { label: "Projects", value: "☕ 9/9", color: "orange" },
  { label: "LeetCode", value: "🐛 220+", color: "blue" }
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
           Know MySelf
          </div>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="name-block">
              <h2 className="name-title">
                <span className="glitch-text">AB</span>
                <span className="glitch-text accent">OUT ME</span>
              </h2>

              <div className="terminal-line">
                <span>Hire Me -- sandeepyadav18717@gmail.com</span>
                <span className="status-badge">✦ ACTIVE ✦</span>
              </div>
            </div>

         

            <p className="about-bio">
                Hi, I'm Sandeep Yadav, a passionate data analyst with a knack for transforming raw data into compelling stories. With a background in Python, SQL, and data visualization, I thrive on uncovering insights that drive informed decisions. When I'm not crunching numbers, you can find me vibing to lofi beats or exploring the latest trends in data science. Let's connect and turn your data into dopamine! Im enthusiastic about collaborating on innovative projects, sharing knowledge, and continuously learning in the ever-evolving world of data. Whether it's building interactive dashboards or diving deep into machine learning, I'm always eager to take on new challenges and make an impact with data. Let's create something amazing together! frontend developer with a passion for crafting intuitive user experiences. With a strong foundation in JavaScript and React, I specialize in building dynamic web applications that seamlessly blend form and function. When I'm not coding, you can find me exploring the latest design trends or experimenting with new technologies to stay ahead of the curve. Let's connect and create something extraordinary together!

            </p>    

            <div className="highlights">
              <div className="highlight green">🎧 Do You want Resume?</div>
              <div className="highlight blue">⚡ +91 7827072303</div>
            </div>

            <div className="about-actions">
                           <button className="btn btn-secondary">Machine ;</button>

              <button className="btn btn-secondary">🎵 sandeepyadav18717@gmail.com</button>
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

       
      </div>
    </section>
  );
};

export default About;