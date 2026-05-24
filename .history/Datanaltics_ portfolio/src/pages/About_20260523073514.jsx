import React, { useEffect, useRef, useState } from 'react';
import './About.css'; // We'll create this CSS file

const About3D = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const floatingElementsRef = useRef([]);
  
  // Stats for the "vibe meter"
  const stats = [
    { label: "DATA VIBES", value: "📊 99%", color: "#4ade80" },
    { label: "CREATIVE JUICE", value: "🎨 ∞", color: "#f472b6" },
    { label: "COFFEE FUEL", value: "☕ 8/7", color: "#fb923c" },
    { label: "BUGS SQUASHED", value: "🐛 420+", color: "#38bdf8" }
  ];

  // Tech stack with 3D rotation effect
  const techStack = [
    { name: "Python", icon: "🐍", color: "#4ade80", rotate: "0deg" },
    { name: "SQL", icon: "🗄️", color: "#38bdf8", rotate: "45deg" },
    { name: "Power BI", icon: "📊", color: "#fb923c", rotate: "90deg" },
    { name: "React", icon: "⚛️", color: "#61dafb", rotate: "135deg" },
    { name: "JS/TS", icon: "🌐", color: "#fbbf24", rotate: "180deg" },
    { name: "Pandas", icon: "🐼", color: "#a855f7", rotate: "225deg" },
    { name: "Tableau", icon: "📈", color: "#ec4899", rotate: "270deg" },
    { name: "Git", icon: "🐙", color: "#f97316", rotate: "315deg" }
  ];

  // Mood quotes that cycle
  const quotes = [
    "✨ turning chaos into insights ✨",
    "📈 data storyteller by heart 📈",
    "🎯 99.9% accuracy or bust 🎯",
    "🌀 live. laugh. analyze. 🌀",
    "🤖 python > everything 🤖"
  ];
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    // Rotating quote
    const quoteInterval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 3000);
    
    // Mouse move handler for 3D tilt and glow
    const handleMouseMove = (e) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x: x * 20, y: y * 20 });
      
      if (glowRef.current) {
        glowRef.current.style.left = e.clientX + 'px';
        glowRef.current.style.top = e.clientY + 'px';
      }
    };
    
    // Scroll handler for parallax
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.scrollY - rect.top + 200) / 500));
      setScrollProgress(progress);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearInterval(quoteInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [quotes.length]);

  // 3D tilt effect on card
  const cardStyle = {
    transform: `perspective(1200px) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
    transition: 'transform 0.1s ease-out'
  };

  // Floating elements animation with staggered delays
  const floatingElements = [
    { icon: "📊", x: "10%", y: "20%", delay: "0s", size: "2rem" },
    { icon: "🐍", x: "85%", y: "15%", delay: "0.5s", size: "2.5rem" },
    { icon: "⚛️", x: "90%", y: "70%", delay: "1s", size: "1.8rem" },
    { icon: "📈", x: "5%", y: "75%", delay: "0.3s", size: "2.2rem" },
    { icon: "🔮", x: "50%", y: "90%", delay: "0.8s", size: "2rem" },
    { icon: "💎", x: "20%", y: "85%", delay: "1.2s", size: "1.5rem" },
    { icon: "⚡", x: "75%", y: "45%", delay: "0.2s", size: "1.8rem" },
    { icon: "🎯", x: "15%", y: "50%", delay: "0.7s", size: "1.6rem" }
  ];

  return (
    <section 
      ref={sectionRef}
      className="about-3d-section"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '6rem 2rem',
        overflow: 'hidden',
        background: 'radial-gradient(ellipse at 30% 40%, #0a0e1a 0%, #05070a 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      {/* Glow cursor element */}
      <div ref={glowRef} className="cursor-glow-3d" style={{
        position: 'fixed',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(74,222,128,0.12) 0%, rgba(0,0,0,0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 10,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.05s'
      }} />

      {/* Animated grid background */}
      <div className="grid-bg" style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `linear-gradient(rgba(74,222,128,0.03) 1px, transparent 1px),
                         linear-gradient(90deg, rgba(74,222,128,0.03) 1px, transparent 1px)`,
        backgroundSize: '50px 50px',
        mask: 'radial-gradient(circle at 50% 50%, black 40%, transparent 90%)',
        pointerEvents: 'none'
      }} />

      {/* Floating 3D elements */}
      {floatingElements.map((el, idx) => (
        <div
          key={idx}
          className="floating-3d-icon"
          style={{
            position: 'absolute',
            left: el.x,
            top: el.y,
            fontSize: el.size,
            filter: 'drop-shadow(0 0 12px rgba(74,222,128,0.3))',
            animation: `float3d 6s ease-in-out infinite`,
            animationDelay: el.delay,
            zIndex: 5,
            opacity: 0.6,
            pointerEvents: 'none'
          }}
        >
          {el.icon}
        </div>
      ))}

      {/* Main content container with 3D perspective */}
      <div className="about-container" style={{
        maxWidth: '1300px',
        width: '100%',
        margin: '0 auto',
        position: 'relative',
        zIndex: 20
      }}>
        {/* Section badge - gen z style */}
        <div className="badge-wrapper" style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '1rem',
          animation: 'slideDownFade 0.8s ease'
        }}>
          <div style={{
            background: 'rgba(74,222,128,0.12)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(74,222,128,0.25)',
            borderRadius: '100px',
            padding: '0.4rem 1.2rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: "'Space Grotesk', monospace",
            fontSize: '0.7rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: '#4ade80'
          }}>
            <span style={{ width: '8px', height: '8px', background: '#4ade80', borderRadius: '50%', display: 'inline-block', animation: 'pulse 1.5s infinite' }}></span>
            ✦ 3D VIBE.ZONE ✦
          </div>
        </div>

        {/* Main flex layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '4rem',
          alignItems: 'center',
          '@media (max-width: 900px)': {
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }
        }}>
          {/* LEFT: 3D TILT CARD + CONTENT */}
          <div 
            ref={cardRef}
            className="tilt-card"
            style={{
              ...cardStyle,
              background: 'rgba(15, 20, 30, 0.65)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(74,222,128,0.2)',
              borderRadius: '32px',
              padding: '2rem',
              boxShadow: '0 25px 45px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(74,222,128,0.1)',
              transition: 'transform 0.2s ease-out, box-shadow 0.3s'
            }}
          >
            {/* Animated name with glitch effect */}
            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ 
                fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
                fontWeight: 900, 
                letterSpacing: '-0.03em',
                lineHeight: 1.1,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                alignItems: 'baseline'
              }}>
                <span className="glitch-text" data-text="SANDEEP">SANDEEP</span>
                <span style={{ color: '#4ade80', textShadow: '0 0 8px rgba(74,222,128,0.5)' }} className="glitch-text" data-text="YADAV">YADAV</span>
              </div>
              <div style={{ 
                fontFamily: "'Space Grotesk', monospace", 
                fontSize: '0.9rem', 
                color: '#94a3b8',
                marginTop: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                flexWrap: 'wrap'
              }}>
                <span>data_analyst@future:/insights$</span>
                <span style={{ 
                  background: 'rgba(74,222,128,0.15)', 
                  padding: '0.2rem 0.6rem', 
                  borderRadius: '6px',
                  fontSize: '0.7rem',
                  color: '#4ade80'
                }}>✦ ACTIVE ✦</span>
              </div>
            </div>

            {/* Rotating quote marquee */}
            <div style={{
              background: 'rgba(74,222,128,0.05)',
              borderRadius: '16px',
              padding: '0.8rem 1rem',
              marginBottom: '1.8rem',
              borderLeft: '3px solid #4ade80',
              transition: 'all 0.3s'
            }}>
              <p style={{ 
                fontFamily: "'Space Grotesk', monospace",
                fontSize: '0.85rem',
                color: '#cbd5e1',
                fontWeight: 500,
                letterSpacing: '-0.01em'
              }}>
                <span style={{ color: '#4ade80', marginRight: '0.5rem' }}>>_</span>
                {quotes[currentQuote]}
                <span style={{ animation: 'blink 1s infinite', marginLeft: '4px' }}>|</span>
              </p>
            </div>

            {/* Bio with modern vibe */}
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: 1.7, 
              color: '#cbd5e1',
              marginBottom: '1.5rem'
            }}>
              I'm a <strong style={{ color: '#4ade80' }}>data alchemist</strong> & frontend architect who turns 
              messy datasets into <strong style={{ color: '#f472b6' }}>✨story-driven insights✨</strong>. 
              Based in India, I vibe with Python, SQL, and React — blending analytics with 
              killer UI. My GitHub? <strong>9+ repos</strong> of pure creative energy. Let's make data 
              sexy again. 📈🔥
            </p>

            {/* Highlight flex row - gen z stats */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem'
            }}>
              <div style={{
                background: 'rgba(74,222,128,0.08)',
                borderRadius: '12px',
                padding: '0.5rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(74,222,128,0.2)'
              }}>
                <span>🎧</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>lofi hip hop + pandas</span>
              </div>
              <div style={{
                background: 'rgba(56,189,248,0.08)',
                borderRadius: '12px',
                padding: '0.5rem 1rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                border: '1px solid rgba(56,189,248,0.2)'
              }}>
                <span>⚡</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 500 }}>always shipping</span>
              </div>
            </div>

            {/* CTA Buttons - gen z style */}
            <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap', marginTop: '0.5rem' }}>
              <button className="btn-3d-primary" style={{
                background: 'linear-gradient(105deg, #4ade80 0%, #22c55e 100%)',
                border: 'none',
                padding: '0.8rem 1.8rem',
                borderRadius: '40px',
                fontWeight: 700,
                fontSize: '0.85rem',
                color: '#000',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s',
                boxShadow: '0 8px 20px rgba(74,222,128,0.2)'
              }} onMouseEnter={(e) => e.target.style.transform = 'translateY(-3px) scale(1.02)'} onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}>
                📂 VIEW PROJECTS <span>↗</span>
              </button>
              <button className="btn-3d-secondary" style={{
                background: 'rgba(255,255,255,0.05)',
                backdropFilter: 'blur(8px)',
                border: '1px solid rgba(255,255,255,0.1)',
                padding: '0.8rem 1.8rem',
                borderRadius: '40px',
                fontWeight: 600,
                fontSize: '0.85rem',
                color: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.2s'
              }} onMouseEnter={(e) => e.target.style.borderColor = '#4ade80'} onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}>
                🎵 SPOTIFY PLAYLIST
              </button>
            </div>
          </div>

          {/* RIGHT: 3D ORBIT STATS + TECH SPHERE */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {/* Stats grid with 3D cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1rem',
              marginBottom: '0.5rem'
            }}>
              {stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="stat-card-3d"
                  style={{
                    background: 'rgba(10, 15, 25, 0.7)',
                    backdropFilter: 'blur(12px)',
                    border: `1px solid ${stat.color}30`,
                    borderRadius: '20px',
                    padding: '1rem',
                    textAlign: 'center',
                    transition: 'all 0.3s cubic-bezier(0.2, 0.9, 0.4, 1.1)',
                    transform: `translateY(${scrollProgress * 10 * (idx % 2 === 0 ? 1 : -1)}px)`,
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                    e.currentTarget.style.borderColor = stat.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `translateY(${scrollProgress * 10 * (idx % 2 === 0 ? 1 : -1)}px)`;
                    e.currentTarget.style.borderColor = `${stat.color}30`;
                  }}
                >
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: stat.color, marginBottom: '0.25rem' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.05em', color: '#94a3b8' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* 3D rotating tech ring */}
            <div className="tech-orbit-container" style={{
              position: 'relative',
              height: '280px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '0.5rem'
            }}>
              <div style={{
                position: 'relative',
                width: '240px',
                height: '240px',
                animation: 'spinOrbit 25s linear infinite'
              }}>
                {techStack.map((tech, idx) => {
                  const angle = (idx / techStack.length) * 360;
                  const rad = angle * (Math.PI / 180);
                  const radius = 120;
                  const x = Math.cos(rad) * radius;
                  const y = Math.sin(rad) * radius;
                  return (
                    <div
                      key={idx}
                      className="tech-orb"
                      style={{
                        position: 'absolute',
                        left: `calc(50% + ${x}px - 24px)`,
                        top: `calc(50% + ${y}px - 24px)`,
                        width: '48px',
                        height: '48px',
                        background: `radial-gradient(circle at 30% 30%, ${tech.color}20, #00000080)`,
                        backdropFilter: 'blur(4px)',
                        border: `1px solid ${tech.color}60`,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.6rem',
                        boxShadow: `0 0 15px ${tech.color}40`,
                        transition: 'all 0.2s',
                        cursor: 'default'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.2)';
                        e.currentTarget.style.boxShadow = `0 0 25px ${tech.color}`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = `0 0 15px ${tech.color}40`;
                      }}
                    >
                      <span role="img" aria-label={tech.name}>{tech.icon}</span>
                    </div>
                  );
                })}
              </div>
              {/* Center core */}
              <div style={{
                position: 'absolute',
                width: '80px',
                height: '80px',
                background: 'radial-gradient(circle, #4ade8020, #0a0f1a)',
                borderRadius: '50%',
                border: '1px solid #4ade8040',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#4ade80',
                textShadow: '0 0 12px #4ade80',
                animation: 'pulseGlow 2s infinite'
              }}>
                🧠
              </div>
              <div style={{
                position: 'absolute',
                bottom: '-20px',
                fontSize: '0.7rem',
                fontFamily: "'Space Grotesk', monospace",
                color: '#64748b',
                background: 'rgba(0,0,0,0.5)',
                padding: '0.2rem 0.8rem',
                borderRadius: '20px',
                backdropFilter: 'blur(4px)',
                whiteSpace: 'nowrap'
              }}>
                ✦ full-stack data toolkit ✦
              </div>
            </div>

            {/* 3D holographic text line */}
            <div style={{
              textAlign: 'center',
              marginTop: '1rem',
              fontFamily: "'Space Grotesk', monospace",
              fontSize: '0.7rem',
              background: 'linear-gradient(135deg, #4ade80, #38bdf8)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontWeight: 600,
              letterSpacing: '0.15em'
            }}>
              // TURNING DATA INTO DOPAMINE //
            </div>
          </div>
        </div>

        {/* Bottom 3D wave / social proof */}
        <div style={{
          marginTop: '4rem',
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          padding: '1rem',
          borderTop: '1px solid rgba(74,222,128,0.1)',
          paddingTop: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span>🔥</span> 420+ commits '24
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span>⭐</span> 9+ public repos
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span>🏆</span> data viz enthusiast
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: '#94a3b8' }}>
            <span>🤝</span> open to collabs
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float3d {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(5deg); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes spinOrbit {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(74,222,128,0.3); transform: scale(1); }
          50% { box-shadow: 0 0 30px rgba(74,222,128,0.6); transform: scale(1.05); }
        }
        
        @keyframes slideDownFade {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .glitch-text {
          position: relative;
          animation: glitch 3s infinite;
        }
        
        @keyframes glitch {
          0%, 100% { text-shadow: none; }
          92% { text-shadow: none; }
          93% { text-shadow: -2px 0 #ff00c1, 2px 0 #00fff9; }
          94% { text-shadow: 2px 0 #ff00c1, -2px 0 #00fff9; }
          95% { text-shadow: none; }
        }
        
        @media (max-width: 900px) {
          .about-3d-section {
            padding: 4rem 1rem;
          }
          .tech-orbit-container {
            transform: scale(0.85);
          }
        }
        
        /* Additional hover effects */
        .stat-card-3d:hover {
          transition: all 0.2s ease;
        }
        
        .btn-3d-primary:active {
          transform: scale(0.98);
        }
      `}</style>
    </section>
  );
};

export default About;