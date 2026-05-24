import "../Css/Project.css";

function Project() {

  return (

  <section id="projects">
  <div class="sec-inner">
    <div class="reveal">
      <div class="sec-tag">Portfolio</div>
      <h2 class="sec-title">Featured Projects</h2>
      <p class="sec-sub">Real-world projects from data platforms to interactive web applications — all live on GitHub.</p>
    </div>
    <div class="proj-grid">
 
      <div class="proj-card reveal">
        <div class="proj-thumb pt-1">
          <svg class="proj-chart" width="220" height="110" viewBox="0 0 220 110">
            <polyline class="chart-path" points="0,90 35,60 70,75 105,30 140,50 175,15 220,28" fill="none" stroke="#4ade80" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="0,90 35,60 70,75 105,30 140,50 175,15 220,28" fill="url(#gfill)" opacity="0.15"/>
            <defs>
              <linearGradient id="gfill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#4ade80"/>
                <stop offset="100%" stop-color="transparent"/>
              </linearGradient>
            </defs>
            <circle cx="175" cy="15" r="4" fill="#4ade80" opacity="0.9"/>
          </svg>
        </div>
        <div class="proj-body">
          <div class="proj-cat">Real Estate Analytics</div>
          <h3 class="proj-title">TruEstate</h3>
          <p class="proj-desc">A real estate data platform analyzing property trends, pricing models, and market insights. Features interactive data visualizations and smart search.</p>
          <div class="proj-foot">
            <div class="proj-tags">
              <span class="proj-tag">JavaScript</span>
              <span class="proj-tag">CSS</span>
              <span class="proj-tag">API</span>
            </div>
            <a href="https://github.com/SandeepYadav18717/TruEstate" target="_blank" class="proj-link">View ↗</a>
          </div>
        </div>
      </div>
 
      <div class="proj-card reveal">
        <div class="proj-thumb pt-2">
          <svg class="proj-chart" width="220" height="110" viewBox="0 0 220 110">
          
            <rect x="10" y="55" width="24" height="45" rx="4" fill="#38bdf8" opacity="0.6"/>
            <rect x="44" y="30" width="24" height="70" rx="4" fill="#38bdf8" opacity="0.8"/>
            <rect x="78" y="45" width="24" height="55" rx="4" fill="#38bdf8" opacity="0.6"/>
            <rect x="112" y="15" width="24" height="85" rx="4" fill="#38bdf8"/>
            <rect x="146" y="35" width="24" height="65" rx="4" fill="#38bdf8" opacity="0.7"/>
            <rect x="180" y="50" width="24" height="50" rx="4" fill="#38bdf8" opacity="0.5"/>
          </svg>
        </div>
        <div class="proj-body">
          <div class="proj-cat">Weather Analytics</div>
          <h3 class="proj-title">Weather Dashboard</h3>
          <p class="proj-desc">Real-time weather analytics app with trend analysis, temperature charts, and live API integration. Visualizes weather data across multiple cities.</p>
          <div class="proj-foot">
            <div class="proj-tags">
              <span class="proj-tag">JavaScript</span>
              <span class="proj-tag">REST API</span>
              <span class="proj-tag">Charts</span>
            </div>
            <a href="https://github.com/SandeepYadav18717/weather" target="_blank" class="proj-link">View ↗</a>
          </div>
        </div>
      </div>
 
      <div class="proj-card reveal">
        <div class="proj-thumb pt-3">
          <svg class="proj-chart" width="220" height="110" viewBox="0 0 220 110">
            <!-- donut-style rings -->
            <circle cx="110" cy="55" r="40" fill="none" stroke="rgba(251,191,36,0.1)" stroke-width="16"/>
            <circle cx="110" cy="55" r="40" fill="none" stroke="#fbbf24" stroke-width="16" stroke-dasharray="180 72" stroke-linecap="round" transform="rotate(-90 110 55)"/>
            <circle cx="110" cy="55" r="24" fill="none" stroke="rgba(251,191,36,0.1)" stroke-width="10"/>
            <circle cx="110" cy="55" r="24" fill="none" stroke="#f97316" stroke-width="10" stroke-dasharray="100 51" stroke-linecap="round" transform="rotate(-90 110 55)"/>
            <text x="110" y="60" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold" font-family="monospace">PORTFOLIO</text>
          </svg>
        </div>
        <div class="proj-body">
          <div class="proj-cat">Portfolio Site</div>
          <h3 class="proj-title">Personal Portfolio</h3>
          <p class="proj-desc">A modern React + Vite portfolio site (the original!) built with a clean component structure, animations, and responsive design across all devices.</p>
          <div class="proj-foot">
            <div class="proj-tags">
              <span class="proj-tag">React</span>
              <span class="proj-tag">Vite</span>
              <span class="proj-tag">CSS</span>
            </div>
            <a href="https://github.com/SandeepYadav18717/Sandeep_portfolio" target="_blank" class="proj-link">View ↗</a>
          </div>
        </div>
      </div>
 
      <div class="proj-card reveal">
        <div class="proj-thumb pt-4">
          <svg class="proj-chart" width="220" height="110" viewBox="0 0 220 110">
            <polyline class="chart-path" points="0,85 40,60 80,72 120,40 160,55 200,20 220,30" fill="none" stroke="#f472b6" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="animation-delay:0.3s"/>
            <polyline class="chart-path" points="0,90 40,78 80,82 120,65 160,70 200,48 220,56" fill="none" stroke="#a855f7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.5" style="animation-delay:0.6s"/>
          </svg>
        </div>
        <div class="proj-body">
          <div class="proj-cat">Real Estate Platform</div>
          <h3 class="proj-title">TruEstae</h3>
          <p class="proj-desc">Extended real estate management platform with property listings, advanced filtering, analytical components and seamless UI for market exploration.</p>
          <div class="proj-foot">
            <div class="proj-tags">
              <span class="proj-tag">JavaScript</span>
              <span class="proj-tag">API</span>
            </div>
            <a href="https://github.com/SandeepYadav18717/TruEstae" target="_blank" class="proj-link">View ↗</a>
          </div>
        </div>
      </div>
 
      <div class="proj-card reveal">
        <div class="proj-thumb pt-5">
          <svg class="proj-chart" width="220" height="110" viewBox="0 0 220 110">
            <rect x="0" y="0" width="220" height="110" fill="none"/>
            <!-- table mockup -->
            <rect x="15" y="15" width="190" height="22" rx="4" fill="rgba(56,189,248,0.15)"/>
            <text x="25" y="30" fill="#38bdf8" font-size="8" font-family="monospace">ID  Name       Score  Grade</text>
            <rect x="15" y="42" width="190" height="16" rx="3" fill="rgba(255,255,255,0.03)"/>
            <text x="25" y="53" fill="rgba(255,255,255,0.5)" font-size="7.5" font-family="monospace">01  Dataset A  94.2   A+</text>
            <rect x="15" y="62" width="190" height="16" rx="3" fill="rgba(255,255,255,0.02)"/>
            <text x="25" y="73" fill="rgba(255,255,255,0.4)" font-size="7.5" font-family="monospace">02  Dataset B  87.6   A</text>
            <rect x="15" y="82" width="190" height="16" rx="3" fill="rgba(255,255,255,0.03)"/>
            <text x="25" y="93" fill="rgba(255,255,255,0.4)" font-size="7.5" font-family="monospace">03  Dataset C  91.0   A+</text>
          </svg>
        </div>
        <div class="proj-body">
          <div class="proj-cat">Design System</div>
          <h3 class="proj-title">UI / CSS Design System</h3>
          <p class="proj-desc">A comprehensive CSS component library and design system featuring modern layouts, custom animations, and reusable styles for data-intensive interfaces.</p>
          <div class="proj-foot">
            <div class="proj-tags">
              <span class="proj-tag">CSS</span>
              <span class="proj-tag">Design</span>
            </div>
            <a href="https://github.com/SandeepYadav18717/sandeep" target="_blank" class="proj-link">View ↗</a>
          </div>
        </div>
      </div>
 
      <div class="proj-card reveal">
        <div class="proj-thumb pt-6">
          <svg class="proj-chart" width="220" height="110" viewBox="0 0 220 110">
            <!-- grid of image placeholders = collage -->
            <rect x="10" y="10" width="55" height="42" rx="5" fill="rgba(244,114,182,0.25)"/>
            <rect x="72" y="10" width="55" height="42" rx="5" fill="rgba(168,85,247,0.25)"/>
            <rect x="134" y="10" width="76" height="42" rx="5" fill="rgba(244,114,182,0.15)"/>
            <rect x="10" y="58" width="76" height="42" rx="5" fill="rgba(168,85,247,0.2)"/>
            <rect x="93" y="58" width="55" height="42" rx="5" fill="rgba(244,114,182,0.2)"/>
            <rect x="155" y="58" width="55" height="42" rx="5" fill="rgba(168,85,247,0.3)"/>
            <text x="37" y="35" text-anchor="middle" fill="#f472b6" font-size="16">🖼</text>
            <text x="99" y="35" text-anchor="middle" fill="#a855f7" font-size="16">🎨</text>
            <text x="172" y="35" text-anchor="middle" fill="#f472b6" font-size="16">🖼</text>
          </svg>
        </div>
        <div class="proj-body">
          <div class="proj-cat">Creative App</div>
          <h3 class="proj-title">Collage Generator</h3>
          <p class="proj-desc">Interactive JavaScript application for creating and manipulating visual collages. Demonstrates advanced DOM manipulation, event handling, and creative UX design.</p>
          <div class="proj-foot">
            <div class="proj-tags">
              <span class="proj-tag">JavaScript</span>
              <span class="proj-tag">Canvas</span>
            </div>
            <a href="https://github.com/SandeepYadav18717/collag" target="_blank" class="proj-link">View ↗</a>
          </div>
        </div>
      </div>
 
    </div>
  </div>
</section>
 

  );
}

export default Project;