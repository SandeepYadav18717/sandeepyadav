import React, { useEffect, useRef, useState } from 'react';
import './AboutSunPlants.css';

const AboutSunPlants = () => {
  const sectionRef = useRef(null);
  const orbitRefs = useRef([]);
  const sunRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [rotationAngle, setRotationAngle] = useState(0);
  const animationRef = useRef(null);

  // Plant data: name, color, icon, orbit radius, speed, size
  const plantData = [
    { name: "Aloe Vera", color: "#6e9f4e", icon: "🌿", radius: 180, speed: 0.6, size: 45, delay: 0 },
    { name: "Monstera", color: "#4caf50", icon: "🍃", radius: 240, speed: 0.45, size: 55, delay: 1 },
    { name: "Fern", color: "#7cb342", icon: "🌱", radius: 140, speed: 0.8, size: 40, delay: 2 },
    { name: "Succulent", color: "#a5d6a7", icon: "🌵", radius: 300, speed: 0.35, size: 50, delay: 0.5 },
    { name: "Bamboo", color: "#8bc34a", icon: "🎋", radius: 210, speed: 0.7, size: 48, delay: 1.5 },
    { name: "Peace Lily", color: "#c5e1a5", icon: "🌸", radius: 270, speed: 0.5, size: 52, delay: 2.5 },
    { name: "Snake Plant", color: "#558b2f", icon: "🌿", radius: 160, speed: 0.9, size: 44, delay: 0.8 },
    { name: "Cactus", color: "#9ccc65", icon: "🌵", radius: 330, speed: 0.4, size: 47, delay: 1.8 },
    { name: "Orchid", color: "#e1bee7", icon: "🌸", radius: 195, speed: 0.65, size: 42, delay: 2.2 },
    { name: "Basil", color: "#66bb6a", icon: "🌿", radius: 255, speed: 0.55, size: 46, delay: 0.3 }
  ];

  // Team values / about content
  const coreValues = [
    { icon: "☀️", title: "Sunlit Vision", desc: "We radiate positivity and clarity in every project, illuminating the path forward." },
    { icon: "🌱", title: "Rooted Growth", desc: "Sustainable development practices that grow organically with your needs." },
    { icon: "🔄", title: "Circular Orbit", desc: "Continuous improvement — we revolve, evolve, and return stronger." },
    { icon: "🌺", title: "Bloom Together", desc: "Collaborative ecosystem where ideas flourish into reality." }
  ];

  const stats = [
    { value: "50+", label: "Projects Planted", icon: "🌿" },
    { value: "∞", label: "Creative Energy", icon: "✨" },
    { value: "24/7", label: "Sunshine Support", icon: "☀️" },
    { value: "🌍", label: "Global Garden", icon: "🌎" }
  ];

  // Handle scroll for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -rect.top / 600));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle mouse move for 3D tilt effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x: x * 15, y: y * 10 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop for orbiting plants
  useEffect(() => {
    let angles = plantData.map(() => Math.random() * Math.PI * 2);
    let startTime = performance.now();

    const animate = () => {
      const now = performance.now();
      const delta = (now - startTime) / 1000;
      startTime = now;
      
      // Update angles based on individual speeds
      angles = angles.map((angle, idx) => angle + plantData[idx].speed * delta);
      setRotationAngle(prev => prev + 0.005);
      
      // Update each plant's position via CSS transforms
      orbitRefs.current.forEach((ref, idx) => {
        if (ref) {
          const plant = plantData[idx];
          const angle = angles[idx];
          const x = Math.cos(angle) * plant.radius;
          const z = Math.sin(angle) * plant.radius;
          // Apply 3D transform: translate in X and Z, with slight Y floating
          const yOffset = Math.sin(Date.now() * 0.002 + idx) * 6;
          ref.style.transform = `translate3d(${x}px, ${yOffset}px, ${z}px) rotateY(${angle * 30}deg)`;
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [plantData]);

  // CSS for 3D scene container
  const scene3DStyle = {
    position: 'relative',
    width: '100%',
    height: '500px',
    perspective: '1200px',
    perspectiveOrigin: '50% 50%',
    marginBottom: '3rem'
  };

  const sunContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%) translateZ(50px) scale(${1 + Math.sin(Date.now() * 0.003) * 0.02})`,
    width: '120px',
    height: '120px',
    zIndex: 20,
    cursor: 'pointer',
    transition: 'transform 0.1s ease'
  };

  const orbitContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transformStyle: 'preserve-3d',
    transform: `translate(-50%, -50%) rotateX(${mousePosition.y * 0.03}deg) rotateY(${mousePosition.x * 0.03}deg)`,
    width: '100%',
    height: '100%'
  };

  return (
    <section ref={sectionRef} className="sun-about-section" style={{
      minHeight: '100vh',
      padding: '6rem 2rem',
      background: 'radial-gradient(ellipse at 30% 40%, #0a0f1a 0%, #03060c 100%)',
      overflow: 'hidden',
      position: 'relative',
      fontFamily: "'Inter', 'Space Grotesk', sans-serif"
    }}>
      {/* Animated stars background */}
      <div className="star-bg" style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {[...Array(150)].map((_, i) => (
          <div
            key={i}
            className="star"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              background: `rgba(255, 220, 150, ${Math.random() * 0.6 + 0.2})`,
              borderRadius: '50%',
              animation: `twinkle ${Math.random() * 4 + 2}s infinite`,
              boxShadow: '0 0 3px rgba(255,200,100,0.5)'
            }}
          />
        ))}
      </div>

      {/* Floating light particles */}
      <div className="floating-particles" style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      }}>
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `radial-gradient(circle, #ffdd88, #ffaa44)`,
              borderRadius: '50%',
              opacity: Math.random() * 0.5,
              animation: `floatParticle ${Math.random() * 8 + 5}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(1px)'
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div style={{
        position: 'relative',
        zIndex: 15,
        maxWidth: '1300px',
        margin: '0 auto'
      }}>
        {/* Header Badge */}
        <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          <div className="badge-glow" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(139, 195, 74, 0.12)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(165, 214, 167, 0.3)',
            borderRadius: '100px',
            padding: '0.5rem 1.5rem',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: '#dcedc8'
          }}>
            <span className="pulse-dot" style={{
              width: '8px',
              height: '8px',
              background: '#a5d6a7',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'pulse 1.5s infinite'
            }}></span>
            🌞 THE SOLAR GARDEN · WHERE IDEAS BLOOM 🌱
          </div>
          <h1 style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 800,
            marginTop: '1.5rem',
            marginBottom: '0.75rem',
            background: 'linear-gradient(135deg, #ffd89b, #c5e1a5, #a5d6a7, #81c784)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            About Our <span style={{ color: '#ffb74d', background: 'none', WebkitBackgroundClip: 'unset' }}>Cosmic Nursery</span>
          </h1>
          <p style={{ color: '#b0bec5', maxWidth: '550px', margin: '0 auto', fontSize: '0.95rem' }}>
            We revolve around growth — nurturing ideas like sun-warmed plants, each orbit brings new perspectives.
          </p>
        </div>

        {/* 3D SCENE: SUN + ORBITING PLANTS */}
        <div style={scene3DStyle}>
          <div style={orbitContainerStyle}>
            {/* Orbit rings (visual paths) */}
            {plantData.map((plant, idx) => (
              <div
                key={`orbit-${idx}`}
                className="orbit-ring"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: `${plant.radius * 2}px`,
                  height: `${plant.radius * 2}px`,
                  marginLeft: `-${plant.radius}px`,
                  marginTop: `-${plant.radius}px`,
                  borderRadius: '50%',
                  border: `1px solid ${plant.color}30`,
                  transform: `rotateX(65deg) rotateZ(${idx * 15}deg)`,
                  opacity: 0.25,
                  pointerEvents: 'none',
                  boxShadow: `0 0 8px ${plant.color}20`
                }}
              />
            ))}
            
            {/* Sun (center) */}
            <div style={sunContainerStyle}>
              <div className="sun-core" style={{
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 35% 35%, #ffdd99, #ff9933, #ff6600)',
                borderRadius: '50%',
                boxShadow: '0 0 60px rgba(255, 170, 68, 0.8), 0 0 120px rgba(255, 140, 0, 0.4)',
                animation: 'sunPulse 3s ease-in-out infinite',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3rem',
                cursor: 'pointer',
                transition: 'transform 0.2s'
              }}>
                ☀️
              </div>
              {/* Sun rays */}
              <div className="sun-rays" style={{
                position: 'absolute',
                top: '-20%',
                left: '-20%',
                width: '140%',
                height: '140%',
                background: 'radial-gradient(circle, rgba(255,200,100,0.15) 0%, transparent 70%)',
                borderRadius: '50%',
                animation: 'rotateRays 12s linear infinite',
                pointerEvents: 'none'
              }} />
            </div>
            
            {/* Orbiting Plants */}
            {plantData.map((plant, idx) => (
              <div
                key={`plant-${idx}`}
                ref={el => orbitRefs.current[idx] = el}
                className="orbiting-plant"
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: `${plant.size}px`,
                  height: `${plant.size}px',
                  marginLeft: `-${plant.size / 2}px`,
                  marginTop: `-${plant.size / 2}px`,
                  transformStyle: 'preserve-3d',
                  cursor: 'pointer',
                  transition: 'filter 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = 'drop-shadow(0 0 12px ' + plant.color + ')';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'none';
                }}
              >
                <div className="plant-card" style={{
                  width: '100%',
                  height: '100%',
                  background: `linear-gradient(145deg, ${plant.color}20, ${plant.color}08)`,
                  backdropFilter: 'blur(4px)',
                  borderRadius: '20px',
                  border: `1px solid ${plant.color}60`,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: `0 8px 20px rgba(0,0,0,0.3), 0 0 15px ${plant.color}30`,
                  transform: 'rotateY(180deg)',
                  transition: 'transform 0.3s'
                }}>
                  <span style={{ fontSize: '1.6rem' }}>{plant.icon}</span>
                  <span style={{ fontSize: '0.6rem', color: plant.color, marginTop: '4px', fontWeight: 600 }}>{plant.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Grid with parallax */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem'
        }}>
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              className="value-card"
              style={{
                background: 'rgba(10, 20, 30, 0.6)',
                backdropFilter: 'blur(12px)',
                borderRadius: '24px',
                padding: '1.5rem',
                border: '1px solid rgba(139, 195, 74, 0.25)',
                transform: `translateY(${scrollProgress * 15 * (idx % 2 === 0 ? 1 : -1)}px)`,
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#a5d6a7'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(139, 195, 74, 0.25)'}
            >
              <div style={{ fontSize: '2.4rem', marginBottom: '0.75rem' }}>{value.icon}</div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', color: '#dcedc8' }}>{value.title}</h3>
              <p style={{ color: '#9aaebf', fontSize: '0.85rem', lineHeight: 1.5 }}>{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1.5rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem'
        }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className="stat-pill"
              style={{
                textAlign: 'center',
                background: 'rgba(0, 0, 0, 0.45)',
                backdropFilter: 'blur(8px)',
                padding: '0.8rem 1.8rem',
                borderRadius: '60px',
                border: '1px solid rgba(165, 214, 167, 0.4)',
                minWidth: '130px',
                transform: `translateY(${scrollProgress * 8 * (i % 2 === 0 ? 1 : -1)}px)`
              }}
            >
              <div style={{ fontSize: '1.5rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#a5d6a7' }}>{stat.value}</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '1px', color: '#b0bec5' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div style={{
          textAlign: 'center',
          borderTop: '1px dashed rgba(139, 195, 74, 0.3)',
          paddingTop: '2rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.3rem' }}>🌻</span>
            <span style={{
              fontFamily: "'Space Grotesk', monospace",
              fontWeight: 500,
              background: 'linear-gradient(120deg, #ffd966, #a5d6a7)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              fontSize: '0.9rem'
            }}>
              "We don't just code — we cultivate ecosystems."
            </span>
            <span style={{ fontSize: '1.3rem' }}>🌿</span>
          </div>
          <p style={{ color: '#7e8c9e', fontSize: '0.75rem', marginTop: '1rem' }}>
            Each plant orbiting our sun represents a team member, a project, or a value — constantly growing, feeding from shared light.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div style={{
        position: 'relative',
        zIndex: 15,
        display: 'flex',
        justifyContent: 'center',
        marginTop: '3rem'
      }}>
        <button
          className="cta-garden"
          style={{
            background: 'linear-gradient(95deg, #558b2f, #7cb342)',
            border: 'none',
            padding: '0.9rem 2.5rem',
            borderRadius: '60px',
            fontWeight: 700,
            fontSize: '0.9rem',
            color: '#fff',
            cursor: 'pointer',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 10px 25px rgba(100, 200, 80, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.7rem',
            transition: 'all 0.2s'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 15px 35px rgba(100, 200, 80, 0.5)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 10px 25px rgba(100, 200, 80, 0.3)';
          }}
        >
          <span>🌱</span> JOIN OUR GARDEN <span>→</span>
        </button>
      </div>

      {/* Inject Keyframes */}
      <style>{`
        @keyframes sunPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 60px rgba(255, 170, 68, 0.8); }
          50% { transform: scale(1.02); box-shadow: 0 0 90px rgba(255, 170, 68, 1); }
        }
        @keyframes rotateRays {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-30px) translateX(15px); opacity: 0.6; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
        @keyframes floatPlant {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .orbiting-plant:hover .plant-card {
          transform: rotateY(180deg) scale(1.05);
        }
        .sun-core:hover {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default AboutSunPla;