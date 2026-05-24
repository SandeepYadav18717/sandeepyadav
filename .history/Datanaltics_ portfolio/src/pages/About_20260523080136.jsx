import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import './AboutSunPlants.css'; // optional custom styles

const AboutSunPlants = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const sunRef = useRef(null);
  const plantsRef = useRef([]);
  const orbitsRef = useRef([]);
  const frameIdRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef(null);

  // Plant data: name, color, size, orbit radius, speed
  const plantData = [
    { name: "Aloe Vera", color: "#6e9f4e", icon: "🌿", radius: 2.8, speed: 0.6, size: 0.45 },
    { name: "Monstera", color: "#4caf50", icon: "🍃", radius: 3.5, speed: 0.4, size: 0.55 },
    { name: "Fern", color: "#7cb342", icon: "🌱", radius: 2.2, speed: 0.9, size: 0.4 },
    { name: "Succulent", color: "#a5d6a7", icon: "🌵", radius: 4.2, speed: 0.3, size: 0.5 },
    { name: "Bamboo", color: "#8bc34a", icon: "🎋", radius: 3.0, speed: 0.7, size: 0.48 },
    { name: "Peace Lily", color: "#c5e1a5", icon: "🌸", radius: 3.8, speed: 0.5, size: 0.52 },
    { name: "Snake Plant", color: "#558b2f", icon: "🌿", radius: 2.5, speed: 0.8, size: 0.44 },
    { name: "Cactus", color: "#9ccc65", icon: "🌵", radius: 4.5, speed: 0.35, size: 0.47 }
  ];

  // About content data
  const teamValues = [
    { icon: "☀️", title: "Growth Mindset", desc: "We nurture ideas like plants need sunlight — constantly evolving and reaching higher." },
    { icon: "🌱", title: "Sustainable Code", desc: "Clean, maintainable, and eco-friendly development practices." },
    { icon: "🤝", title: "Rooted Community", desc: "Strong foundations with open collaboration and knowledge sharing." },
    { icon: "✨", title: "Bloom Together", desc: "Every project is a garden where creativity flourishes." }
  ];

  const stats = [
    { value: "50+", label: "projects planted", color: "#8bc34a" },
    { value: "∞", label: "green ideas", color: "#a5d6a7" },
    { value: "24/7", label: "sunlight energy", color: "#ffb74d" },
    { value: "🌍", label: "global garden", color: "#81c784" }
  ];

  useEffect(() => {
    // --- THREE.JS SETUP ---
    const container = mountRef.current;
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050b1a);
    scene.fog = new THREE.FogExp2(0x050b1a, 0.012);
    sceneRef.current = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);
    cameraRef.current = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- LIGHTS ---
    // Ambient light
    const ambientLight = new THREE.AmbientLight(0x404060);
    scene.add(ambientLight);
    
    // Main directional light (simulating sun light)
    const mainLight = new THREE.DirectionalLight(0xffeebb, 1.2);
    mainLight.position.set(5, 8, 3);
    mainLight.castShadow = true;
    mainLight.receiveShadow = false;
    scene.add(mainLight);
    
    // Fill light from below
    const fillLight = new THREE.PointLight(0x88aaff, 0.3);
    fillLight.position.set(0, -2, 0);
    scene.add(fillLight);
    
    // Back rim light
    const rimLight = new THREE.PointLight(0xffaa66, 0.5);
    rimLight.position.set(-2, 2, -4);
    scene.add(rimLight);
    
    // Glow effect around sun area (point light)
    const sunGlowLight = new THREE.PointLight(0xffaa55, 1.2, 15);
    sunGlowLight.position.set(0, 0.5, 0);
    scene.add(sunGlowLight);
    
    // --- CENTRAL SUN (glowing sphere with emission)---
    const sunGeometry = new THREE.SphereGeometry(0.9, 64, 64);
    const sunMaterial = new THREE.MeshStandardMaterial({
      color: 0xffaa55,
      emissive: 0xff6622,
      emissiveIntensity: 0.65,
      metalness: 0.2,
      roughness: 0.3
    });
    const sunMesh = new THREE.Mesh(sunGeometry, sunMaterial);
    sunMesh.castShadow = false;
    sunMesh.receiveShadow = false;
    scene.add(sunMesh);
    sunRef.current = sunMesh;
    
    // Add a pulsing glow halo (sprite or simple ring)
    const haloGeometry = new THREE.SphereGeometry(1.05, 32, 32);
    const haloMaterial = new THREE.MeshBasicMaterial({
      color: 0xffaa66,
      transparent: true,
      opacity: 0.15,
      side: THREE.BackSide
    });
    const halo = new THREE.Mesh(haloGeometry, haloMaterial);
    scene.add(halo);
    
    // Small particles orbiting very close (dust)
    const dustCount = 300;
    const dustGeometry = new THREE.BufferGeometry();
    const dustPositions = new Float32Array(dustCount * 3);
    for (let i = 0; i < dustCount; i++) {
      const radius = 1.1 + Math.random() * 0.5;
      const angle = Math.random() * Math.PI * 2;
      const yOffset = (Math.random() - 0.5) * 1.2;
      dustPositions[i*3] = Math.cos(angle) * radius;
      dustPositions[i*3+1] = yOffset;
      dustPositions[i*3+2] = Math.sin(angle) * radius;
    }
    dustGeometry.setAttribute('position', new THREE.BufferAttribute(dustPositions, 3));
    const dustMaterial = new THREE.PointsMaterial({ color: 0xffaa77, size: 0.03, transparent: true, opacity: 0.6 });
    const dustParticles = new THREE.Points(dustGeometry, dustMaterial);
    scene.add(dustParticles);
    
    // --- ORBITING PLANTS (grouped rings with custom meshes)---
    const plantsGroup = [];
    
    plantData.forEach((plant, idx) => {
      // Create a group for each plant
      const group = new THREE.Group();
      
      // Stem (cylinder)
      const stemMat = new THREE.MeshStandardMaterial({ color: plant.color, roughness: 0.4, metalness: 0.1 });
      const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 0.5, 6), stemMat);
      stem.position.y = -0.2;
      group.add(stem);
      
      // Leaves (simple geometry - a few small cubes or cones)
      const leafMat = new THREE.MeshStandardMaterial({ color: plant.color, emissive: 0x336622, emissiveIntensity: 0.1 });
      const leafCount = 3 + Math.floor(Math.random() * 3);
      for (let i = 0; i < leafCount; i++) {
        const leaf = new THREE.Mesh(new THREE.ConeGeometry(0.12, 0.25, 8), leafMat);
        leaf.position.set(Math.sin(i) * 0.18, 0.1 + i * 0.12, Math.cos(i * 1.5) * 0.18);
        leaf.rotation.z = i * 1.2;
        group.add(leaf);
      }
      
      // Top flower/bud
      const budMat = new THREE.MeshStandardMaterial({ color: plant.color, emissive: 0x88ff88, emissiveIntensity: 0.15 });
      const bud = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8), budMat);
      bud.position.y = 0.35;
      group.add(bud);
      
      // Add tiny floating particles around each plant (pollen)
      const pollenCount = 8;
      const pollenGroup = new THREE.Group();
      for (let p = 0; p < pollenCount; p++) {
        const particle = new THREE.Mesh(new THREE.SphereGeometry(0.02, 4), new THREE.MeshStandardMaterial({ color: 0xffdd88, emissive: 0xaa6633 }));
        particle.position.set(Math.sin(p) * 0.22, Math.cos(p * 1.3) * 0.2 + 0.1, Math.cos(p) * 0.22);
        pollenGroup.add(particle);
      }
      group.add(pollenGroup);
      
      group.userData = {
        angle: (idx / plantData.length) * Math.PI * 2,
        radius: plant.radius,
        speed: plant.speed,
        yOffset: Math.sin(idx) * 0.3,
        pollenGroup: pollenGroup,
        pollenSpeed: 0.5 + idx * 0.1
      };
      
      group.position.x = Math.cos(group.userData.angle) * group.userData.radius;
      group.position.z = Math.sin(group.userData.angle) * group.userData.radius;
      group.position.y = group.userData.yOffset;
      
      scene.add(group);
      plantsRef.current.push(group);
      
      // Add a faint trail ring (orbit visual)
      const orbitPoints = [];
      const orbitRadius = plant.radius;
      for (let ang = 0; ang <= Math.PI * 2; ang += 0.1) {
        orbitPoints.push(new THREE.Vector3(Math.cos(ang) * orbitRadius, 0.1, Math.sin(ang) * orbitRadius));
      }
      const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
      const orbitMaterial = new THREE.LineBasicMaterial({ color: 0x88aa55, transparent: true, opacity: 0.2 });
      const orbitRing = new THREE.LineLoop(orbitGeometry, orbitMaterial);
      scene.add(orbitRing);
      orbitsRef.current.push(orbitRing);
    });
    
    // --- ADD GROUND / GRASS DISC (subtle)---
    const groundDiscMat = new THREE.MeshStandardMaterial({ color: 0x1a3a2a, roughness: 0.8, metalness: 0.05, transparent: true, opacity: 0.4 });
    const groundDisc = new THREE.Mesh(new THREE.CircleGeometry(5.2, 16), groundDiscMat);
    groundDisc.rotation.x = -Math.PI / 2;
    groundDisc.position.y = -0.8;
    groundDisc.receiveShadow = true;
    scene.add(groundDisc);
    
    // Add floating particles (fireflies/light motes)
    const fireflyCount = 180;
    const fireflyGeo = new THREE.BufferGeometry();
    const fireflyPositions = new Float32Array(fireflyCount * 3);
    for (let i = 0; i < fireflyCount; i++) {
      fireflyPositions[i*3] = (Math.random() - 0.5) * 12;
      fireflyPositions[i*3+1] = Math.random() * 4 - 0.5;
      fireflyPositions[i*3+2] = (Math.random() - 0.5) * 12;
    }
    fireflyGeo.setAttribute('position', new THREE.BufferAttribute(fireflyPositions, 3));
    const fireflyMat = new THREE.PointsMaterial({ color: 0xffaa66, size: 0.05, transparent: true, blending: THREE.AdditiveBlending });
    const fireflies = new THREE.Points(fireflyGeo, fireflyMat);
    scene.add(fireflies);
    
    // --- MOUSE INTERACTION (slow camera rotation)---
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = (event.clientY / window.innerHeight) * 2 - 1;
      mousePosition.current = { x: x * 0.5, y: y * 0.3 };
    };
    window.addEventListener('mousemove', handleMouseMove);
    
    // --- SCROLL PROGRESS for parallax---
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -rect.top / 500));
        setScrollProgress(progress);
      }
    };
    window.addEventListener('scroll', handleScroll);
    
    // --- ANIMATION LOOP---
    let time = 0;
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);
      time += 0.016;
      
      // Rotate plants around sun
      plantsRef.current.forEach((plant, idx) => {
        const data = plant.userData;
        if (data) {
          data.angle += 0.012 * data.speed;
          const xPos = Math.cos(data.angle) * data.radius;
          const zPos = Math.sin(data.angle) * data.radius;
          plant.position.x = xPos;
          plant.position.z = zPos;
          // slight vertical floating
          plant.position.y = data.yOffset + Math.sin(time * 1.2 + idx) * 0.08;
          
          // Rotate plant to face outward slightly
          plant.lookAt(xPos * 2, plant.position.y, zPos * 2);
          
          // Animate pollen particles around plant
          if (data.pollenGroup) {
            data.pollenGroup.rotation.y += 0.02;
            data.pollenGroup.rotation.x = Math.sin(time * data.pollenSpeed) * 0.3;
          }
        }
      });
      
      // Animate dust particles rotation
      dustParticles.rotation.y += 0.008;
      dustParticles.rotation.x = Math.sin(time * 0.5) * 0.1;
      
      // Sun pulsing
      const intensity = 0.65 + Math.sin(time * 4) * 0.1;
      sunMaterial.emissiveIntensity = intensity;
      sunGlowLight.intensity = 1.0 + Math.sin(time * 3) * 0.2;
      halo.scale.setScalar(1 + Math.sin(time * 3) * 0.02);
      
      // Fireflies gentle drift
      fireflies.rotation.y += 0.002;
      fireflies.rotation.x = Math.sin(time * 0.2) * 0.05;
      
      // Camera movement based on mouse and scroll
      const targetX = mousePosition.current.x * 1.2;
      const targetY = mousePosition.current.y * 0.8 + scrollProgress * 0.5;
      camera.position.x += (targetX - camera.position.x) * 0.05;
      camera.position.y += (targetY + 1.5 - camera.position.y) * 0.05;
      camera.lookAt(0, 0.5, 0);
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Resize handler
    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);
      if (rendererRef.current && container) {
        container.removeChild(rendererRef.current.domElement);
      }
      // dispose geometries/materials
      sunGeometry.dispose();
      sunMaterial.dispose();
      plantsRef.current.forEach(group => {
        group.children.forEach(child => {
          if (child.isMesh) {
            child.geometry?.dispose();
            child.material?.dispose();
          }
        });
      });
    };
  }, []);
  
  return (
    <section ref={sectionRef} style={{
      position: 'relative',
      minHeight: '100vh',
      padding: '6rem 2rem',
      overflow: 'hidden',
      fontFamily: "'Inter', 'Space Grotesk', sans-serif"
    }}>
      {/* 3D canvas container */}
      <div ref={mountRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        outline: 'none'
      }} />
      
      {/* Overlay content - glassmorphic panel */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1300px',
        margin: '0 auto',
        background: 'rgba(5, 11, 26, 0.55)',
        backdropFilter: 'blur(12px)',
        borderRadius: '48px',
        border: '1px solid rgba(139, 195, 74, 0.3)',
        padding: '2.5rem',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
        transition: 'transform 0.3s ease'
      }}>
        {/* Header badge */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.6rem',
            background: 'rgba(139, 195, 74, 0.15)',
            border: '1px solid rgba(139, 195, 74, 0.4)',
            borderRadius: '100px',
            padding: '0.4rem 1.2rem',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            color: '#c5e1a5'
          }}>
            <span style={{ fontSize: '1.1rem' }}>☀️</span> THE SOLAR GARDEN · WHERE IDEAS BLOOM
          </div>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 6vw, 4.5rem)',
            fontWeight: 800,
            marginTop: '1.2rem',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #ffd89b, #c5e1a5, #a5d6a7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            About Our<span style={{ color: '#ffb74d' }}> Cosmic Nursery</span>
          </h1>
          <p style={{ color: '#b0bec5', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}>
            We revolve around growth — nurturing ideas like sun-warmed plants, each orbit brings new perspectives.
          </p>
        </div>
        
        {/* Main grid: values + orbiting stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.8rem',
          marginBottom: '3rem'
        }}>
          {teamValues.map((val, idx) => (
            <div key={idx} style={{
              background: 'rgba(15, 25, 35, 0.6)',
              backdropFilter: 'blur(8px)',
              borderRadius: '24px',
              padding: '1.5rem',
              border: '1px solid rgba(139, 195, 74, 0.25)',
              transition: 'all 0.3s ease',
              transform: `translateY(${scrollProgress * 10 * (idx % 2 === 0 ? 1 : -1)}px)`
            }} onMouseEnter={(e) => e.currentTarget.style.borderColor = '#a5d6a7'}
               onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(139, 195, 74, 0.25)'}>
              <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{val.icon}</div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '0.5rem', color: '#dcedc8' }}>{val.title}</h3>
              <p style={{ color: '#9aaebf', fontSize: '0.85rem', lineHeight: 1.5 }}>{val.desc}</p>
            </div>
          ))}
        </div>
        
        {/* Stats row with 3D floating effect */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
          marginBottom: '2.5rem',
          padding: '1rem 0'
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              textAlign: 'center',
              background: 'rgba(0,0,0,0.4)',
              backdropFilter: 'blur(8px)',
              padding: '1rem 1.8rem',
              borderRadius: '80px',
              border: `1px solid ${stat.color}60`,
              minWidth: '120px'
            }}>
              <div style={{ fontSize: '1.8rem', fontWeight: 800, color: stat.color }}>{stat.value}</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '1px', color: '#b0bec5' }}>{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Mission statement with plant reference */}
        <div style={{
          textAlign: 'center',
          borderTop: '1px dashed rgba(139, 195, 74, 0.4)',
          paddingTop: '2rem',
          marginTop: '0.5rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '1.2rem' }}>🌻</span>
            <span style={{ fontFamily: "'Space Grotesk', monospace", fontWeight: 500, background: 'linear-gradient(120deg, #ffd966, #a5d6a7)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent' }}>
              "We don't just code — we cultivate ecosystems."
            </span>
            <span style={{ fontSize: '1.2rem' }}>🌿</span>
          </div>
          <p style={{ color: '#90a4ae', fontSize: '0.8rem', marginTop: '1rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            Each plant orbiting our sun represents a team member, a project, or a value — constantly growing, feeding from shared light.
          </p>
        </div>
      </div>
      
      {/* Floating small call to action */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        <button style={{
          background: 'linear-gradient(95deg, #558b2f, #7cb342)',
          border: 'none',
          padding: '0.9rem 2.2rem',
          borderRadius: '60px',
          fontWeight: 700,
          fontSize: '0.9rem',
          color: '#fff',
          cursor: 'pointer',
          backdropFilter: 'blur(4px)',
          boxShadow: '0 8px 20px rgba(100, 200, 80, 0.3)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.6rem',
          transition: 'transform 0.2s'
        }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
           onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
          <span>🌱</span> JOIN OUR GARDEN <span>→</span>
        </button>
      </div>
      
      {/* Styles for subtle animations */}
      <style>{`
        @keyframes floatPlant {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </section>
  );
};

export default About;