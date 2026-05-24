import React, { useEffect, useRef, useState } from 'react';

const AboutSunPlants = () => {
  const sectionRef = useRef(null);
  const orbitRefs = useRef([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const animationRef = useRef(null);

  // Plant data: name, color, icon, orbit radius, speed, size
  const plantData = [
    { name: "Aloe Vera", color: "#6e9f4e", icon: "🌿", radius: 180, speed: 0.6, size: 50, delay: 0 },
    { name: "Monstera", color: "#4caf50", icon: "🍃", radius: 240, speed: 0.45, size: 58, delay: 1 },
    { name: "Fern", color: "#7cb342", icon: "🌱", radius: 140, speed: 0.8, size: 45, delay: 2 },
    { name: "Succulent", color: "#a5d6a7", icon: "🌵", radius: 300, speed: 0.35, size: 52, delay: 0.5 },
    { name: "Bamboo", color: "#8bc34a", icon: "🎋", radius: 210, speed: 0.7, size: 48, delay: 1.5 },
    { name: "Peace Lily", color: "#c5e1a5", icon: "🌸", radius: 270, speed: 0.5, size: 54, delay: 2.5 },
    { name: "Snake Plant", color: "#558b2f", icon: "🌿", radius: 160, speed: 0.9, size: 46, delay: 0.8 },
    { name: "Cactus", color: "#9ccc65", icon: "🌵", radius: 330, speed: 0.4, size: 50, delay: 1.8 },
    { name: "Orchid", color: "#e1bee7", icon: "🌸", radius: 195, speed: 0.65, size: 44, delay: 2.2 },
    { name: "Basil", color: "#66bb6a", icon: "🌿", radius: 255, speed: 0.55, size: 47, delay: 0.3 }
  ];

  // Core values content
  const coreValues = [
    { icon: "☀️", title: "Sunlit Vision", desc: "We radiate positivity and clarity in every project, illuminating the path forward with warmth and purpose." },
    { icon: "🌱", title: "Rooted Growth", desc: "Sustainable development practices that grow organically with your needs, never forcing unnatural cycles." },
    { icon: "🔄", title: "Circular Orbit", desc: "Continuous improvement — we revolve, evolve, and return stronger with each iteration." },
    { icon: "🌺", title: "Bloom Together", desc: "Collaborative ecosystem where ideas flourish into reality, nurtured by collective energy." }
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
        const progress = Math.min(1, Math.max(0, -rect.top / 500));
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
      setMousePosition({ x: x * 20, y: y * 15 });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop for orbiting plants
  useEffect(() => {
    let angles = plantData.map(() => Math.random() * Math.PI * 2);
    let lastTime = performance.now();

    const animate = () => {
      const now = performance.now();
      let delta = Math.min(0.033, (now - lastTime) / 1000);
      lastTime = now;
      
      // Update angles based on individual speeds
      angles = angles.map((angle, idx) => angle + plantData[idx].speed * delta);
      
      // Update each plant's position via CSS transforms
      orbitRefs.current.forEach((ref, idx) => {
        if (ref) {
          const plant = plantData[idx];
          const angle = angles[idx];
          const x = Math.cos(angle) * plant.radius;
          const z = Math.sin(angle) * plant.radius;
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

  return (
    <section 
      ref={sectionRef} 
      style={{
        minHeight: '100vh',
        padding: '80px 24px 100px',
        background: 'radial-gradient(ellipse at 30% 40%, #0a0f1a 0%, #03060c 100%)',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: "'Inter', 'Segoe UI', 'Space Grotesk', system-ui, sans-serif"
      }}
    >
      {/* Animated stars background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}>
        {[...Array(200)].map((_, i) => (
          <div
            key={i}
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
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none'
      }}>
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: `radial-gradient(circle, #ffdd88, #ffaa44)`,
              borderRadius: '50%',
              opacity: Math.random() * 0.4,
              animation: `floatParticle ${Math.random() * 10 + 6}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`,
              filter: 'blur(2px)'
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
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'rgba(139, 195, 74, 0.12)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(165, 214, 167, 0.3)',
            borderRadius: '100px',
            padding: '8px 24px',
            fontSize: '0.8rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: '#dcedc8'
          }}>
            <span style={{
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
            marginTop: '24px',
            marginBottom: '12px',
            background: 'linear-gradient(135deg, #ffd89b, #c5e1a5, #a5d6a7, #81c784)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            About Our <span style={{ color: '#ffb74d', background: 'none', WebkitBackgroundClip: 'unset' }}>Cosmic Nursery</span>
          </h1>
          <p style={{ color: '#b0bec5', maxWidth: '550px', margin: '0 auto', fontSize: '0.95rem', lineHeight: 1.6 }}>
            We revolve around growth — nurturing ideas like sun-warmed plants, each orbit brings new perspectives.
          </p>
        </div>

        {/* 3D SCENE: SUN + ORBITING PLANTS */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '520px',
          perspective: '1400px',
          perspectiveOrigin: '50% 50%',
          marginBottom: '48px'
        }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transformStyle: 'preserve-3d',
            transform: `translate(-50%, -50%) rotateX(${mousePosition.y * 0.05}deg) rotateY(${mousePosition.x * 0.05}deg)`,
            width: '100%',
            height: '100%'
          }}>
            {/* Orbit rings (visual paths) */}
            {plantData.map((plant, idx) => (
              <div
                key={`orbit-${idx}`}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: `${plant.radius * 2}px`,
                  height: `${plant.radius * 2}px`,
                  marginLeft: `-${plant.radius}px`,
                  marginTop: `-${plant.radius}px`,
                  borderRadius: '50%',
                  border: `1px solid ${plant.color}40`,
                  transform: `rotateX(65deg) rotateZ(${idx * 12}deg)`,
                  opacity: 0.3,
                  pointerEvents: 'none',
                  boxShadow: `0 0 12px ${plant.color}20`
                }}
              />
            ))}
            
            {/* Sun (center) */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%, -50%) translateZ(50px) scale(${1 + Math.sin(Date.now() * 0.003) * 0.02})`,
              width: '130px',
              height: '130px',
              zIndex: 20,
              cursor: 'pointer'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at 35% 35%, #ffdd99, #ff9933, #ff6600)',
                borderRadius: '50%',
                boxShadow: '0 0 60px rgba(255, 170, 68, 0.8), 0 0 120px rgba(255, 140, 0, 0.4)',
                animation: 'sunPulse 3s ease-in-out infinite',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '3.5rem',
                transition: 'transform 0.2s'
              }}>
                ☀️
              </div>
              {/* Sun rays */}
              <div style={{
                position: 'absolute',
                top: '-25%',
                left: '-25%',
                width: '150%',
                height: '150%',
                background: 'radial-gradient(circle, rgba(255,200,100,0.12) 0%, transparent 70%)',
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
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  width: `${plant.size}px`,
                  height: `${plant.size}px`,
                  marginLeft: `-${plant.size / 2}px`,
                  marginTop: `-${plant.size / 2}px`,
                  transformStyle: 'preserve-3d',
                  cursor: 'pointer',
                  transition: 'filter 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = `drop-shadow(0 0 12px ${plant.color})`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = 'none';
                }}
              >
                <div style={{
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
                  <span style={{ fontSize: '1.8rem' }}>{plant.icon}</span>
                  <span style={{ fontSize: '0.65rem', color: plant.color, marginTop: '6px', fontWeight: 600 }}>{plant.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values Grid with parallax */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '24px',
          marginBottom: '48px'
        }}>
          {coreValues.map((value, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(10, 20, 30, 0.6)',
                backdropFilter: 'blur(12px)',
                borderRadius: '24px',
                padding: '24px',
                border: '1px solid rgba(139, 195, 74, 0.25)',
                transform: `translateY(${scrollProgress * 15 * (idx % 2 === 0 ? 1 : -1)}px)`,
                transition: 'all 0.3s ease',
                cursor: 'default'
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = '#a5d6a7'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(139, 195, 74, 0.25)'}
            >
              <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>{value.icon}</div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px', color: '#dcedc8' }}>{value.title}</h3>
              <p style={{ color: '#9aaebf', fontSize: '0.85rem', lineHeight: 1.5 }}>{value.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '24px',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          {stats.map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: 'center',
                background: 'rgba(0, 0, 0, 0.45)',
                backdropFilter: 'blur(8px)',
                padding: '12px 28px',
                borderRadius: '60px',
                border: '1px solid rgba(165, 214, 167, 0.4)',
                minWidth: '140px',
                transform: `translateY(${scrollProgress * 8 * (i % 2 === 0 ? 1 : -1)}px)`
              }}
            >
              <div style={{ fontSize: '1.6rem' }}>{stat.icon}</div>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#a5d6a7' }}>{stat.value}</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '1px', color: '#b0bec5' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div style={{
          textAlign: 'center',
          borderTop: '1px dashed rgba(139, 195, 74, 0.3)',
          paddingTop: '32px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.4rem' }}>🌻</span>
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
            <span style={{ fontSize: '1.4rem' }}>🌿</span>
          </div>
          <p style={{ color: '#7e8c9e', fontSize: '0.75rem', marginTop: '16px' }}>
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
        marginTop: '48px'
      }}>
        <button
          style={{
            background: 'linear-gradient(95deg, #558b2f, #7cb342)',
            border: 'none',
            padding: '14px 40px',
            borderRadius: '60px',
            fontWeight: 700,
            fontSize: '0.9rem',
            color: '#fff',
            cursor: 'pointer',
            backdropFilter: 'blur(4px)',
            boxShadow: '0 10px 25px rgba(100, 200, 80, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
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
          onClick={() => alert('Welcome to our garden! 🌱 Let\'s grow together.')}
        >
          <span>🌱</span> JOIN OUR GARDEN <span>→</span>
        </button>
      </div>

      {/* CSS Keyframes Injection */}
      <style>{`
        @keyframes sunPulse {
          0%, 100% { transform: scale(1); box-shadow: 0 0 60px rgba(255, 170, 68, 0.8); }
          50% { transform: scale(1.03); box-shadow: 0 0 90px rgba(255, 170, 68, 1); }
        }
        @keyframes rotateRays {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.3); }
        }
        @keyframes floatParticle {
          0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
          50% { transform: translateY(-40px) translateX(20px); opacity: 0.5; }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
      `}</style>
    </section>
  );
};

export default About;