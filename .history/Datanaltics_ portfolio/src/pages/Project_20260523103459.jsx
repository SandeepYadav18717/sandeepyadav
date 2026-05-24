import "../Css/Project.css";

import "./FeaturedProjects.css";

const projects = [
  {
    id: 1,
    cat: "Real Estate Analytics",
    title: "TruEstate",
    desc: "A real estate data platform analyzing property trends, pricing models, and market insights with interactive data visualizations and smart search.",
    tags: ["JavaScript", "CSS", "API"],
    link: "https://github.com/SandeepYadav18717/TruEstate",
    thumb: "t1",
    chart: "line-green",
  },
  {
    id: 2,
    cat: "Weather Analytics",
    title: "Weather Dashboard",
    desc: "Real-time weather analytics app with trend analysis, temperature charts, and live API integration. Visualizes weather data across multiple cities.",
    tags: ["JavaScript", "REST API", "Charts"],
    link: "https://github.com/SandeepYadav18717/weather",
    thumb: "t2",
    chart: "bars-blue",
  },
  {
    id: 3,
    cat: "Portfolio Site",
    title: "Personal Portfolio",
    desc: "A modern React + Vite portfolio site built with a clean component structure, smooth animations, and fully responsive design across all devices.",
    tags: ["React", "Vite", "CSS"],
    link: "https://github.com/SandeepYadav18717/Sandeep_portfolio",
    thumb: "t3",
    chart: "donut",
  },
  {
    id: 4,
    cat: "Real Estate Platform",
    title: "TruEstae",
    desc: "Extended real estate management platform with property listings, advanced filtering, analytical components and seamless UI for market exploration.",
    tags: ["JavaScript", "API"],
    link: "https://github.com/SandeepYadav18717/TruEstae",
    thumb: "t4",
    chart: "line-pink",
  },
  {
    id: 5,
    cat: "Design System",
    title: "UI / CSS Design System",
    desc: "A comprehensive CSS component library featuring modern layouts, custom animations, and reusable styles for data-intensive analytics interfaces.",
    tags: ["CSS", "Design", "UI"],
    link: "https://github.com/SandeepYadav18717/sandeep",
    thumb: "t5",
    chart: "table",
  },
  {
    id: 6,
    cat: "Creative App",
    title: "Collage Generator",
    desc: "Interactive JavaScript application for creating and manipulating visual collages. Demonstrates advanced DOM manipulation, event handling, and creative UX.",
    tags: ["JavaScript", "Canvas"],
    link: "https://github.com/SandeepYadav18717/collag",
    thumb: "t6",
    chart: "collage",
  },
];

/* ─── SVG chart thumbnails ─── */
function ChartLineGreen() {
  return (
    <svg className="fp-chart" width="220" height="110" viewBox="0 0 220 110" overflow="visible">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points="0,90 38,62 75,76 110,32 148,50 180,16 220,28 220,110 0,110"
        fill="url(#g1)"
      />
      <polyline
        className="fp-draw"
        points="0,90 38,62 75,76 110,32 148,50 180,16 220,28"
        fill="none"
        stroke="#4ade80"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="180" cy="16" r="5" fill="#4ade80" opacity="0.9" />
      <circle cx="110" cy="32" r="3.5" fill="#4ade80" opacity="0.6" />
    </svg>
  );
}

function ChartBarsBlue() {
  const bars = [
    { x: 10, h: 46, delay: "0.05s" },
    { x: 44, h: 73, delay: "0.10s" },
    { x: 78, h: 59, delay: "0.15s" },
    { x: 112, h: 89, delay: "0.20s" },
    { x: 146, h: 67, delay: "0.25s" },
    { x: 180, h: 51, delay: "0.30s" },
  ];
  return (
    <svg className="fp-chart" width="220" height="110" viewBox="0 0 220 110">
      {bars.map((b, i) => (
        <rect
          key={i}
          className="fp-bar"
          x={b.x}
          y={101 - b.h}
          width="24"
          height={b.h}
          rx="4"
          fill="#38bdf8"
          opacity={0.5 + i * 0.07}
          style={{ animationDelay: b.delay }}
        />
      ))}
    </svg>
  );
}

function ChartDonut() {
  return (
    <svg className="fp-chart" width="220" height="110" viewBox="0 0 220 110">
      <circle cx="110" cy="55" r="42" fill="none" stroke="rgba(251,191,36,0.12)" strokeWidth="18" />
      <circle
        cx="110" cy="55" r="42" fill="none"
        stroke="#fbbf24" strokeWidth="18"
        strokeDasharray="184 80" strokeLinecap="round"
        transform="rotate(-90 110 55)"
      />
      <circle cx="110" cy="55" r="24" fill="none" stroke="rgba(249,115,22,0.12)" strokeWidth="11" />
      <circle
        cx="110" cy="55" r="24" fill="none"
        stroke="#f97316" strokeWidth="11"
        strokeDasharray="106 45" strokeLinecap="round"
        transform="rotate(-90 110 55)"
      />
      <text x="110" y="60" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700" fontFamily="JetBrains Mono,monospace">
        PORTFOLIO
      </text>
    </svg>
  );
}

function ChartLinePink() {
  return (
    <svg className="fp-chart" width="220" height="110" viewBox="0 0 220 110" overflow="visible">
      <defs>
        <linearGradient id="g4" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f472b6" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f472b6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points="0,88 40,62 80,74 120,40 160,56 200,20 220,30 220,110 0,110"
        fill="url(#g4)"
      />
      <polyline
        className="fp-draw"
        points="0,88 40,62 80,74 120,40 160,56 200,20 220,30"
        fill="none"
        stroke="#f472b6"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <polyline
        className="fp-draw fp-draw--delay"
        points="0,95 40,80 80,86 120,68 160,72 200,50 220,58"
        fill="none"
        stroke="#a855f7"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
    </svg>
  );
}

function ChartTable() {
  return (
    <svg className="fp-chart" width="220" height="110" viewBox="0 0 220 110">
      <rect x="14" y="12" width="192" height="22" rx="4" fill="rgba(56,189,248,0.14)" />
      <text x="24" y="27" fill="#7dd3fc" fontSize="8.5" fontWeight="600" fontFamily="JetBrains Mono,monospace">
        ID  Name         Score   Grade
      </text>
      {[
        { y: 39, ty: 51, text: "01  Dataset A    94.2    A+" },
        { y: 60, ty: 72, text: "02  Dataset B    87.6    A" },
        { y: 81, ty: 93, text: "03  Dataset C    91.0    A+" },
      ].map((r, i) => (
        <g key={i}>
          <rect x="14" y={r.y} width="192" height="16" rx="3" fill="rgba(255,255,255,0.03)" />
          <text x="24" y={r.ty} fill="rgba(255,255,255,0.42)" fontSize="8" fontFamily="JetBrains Mono,monospace">
            {r.text}
          </text>
        </g>
      ))}
    </svg>
  );
}

function ChartCollage() {
  const cells = [
    { x: 10, y: 10, w: 56, h: 42, fill: "rgba(244,114,182,0.22)" },
    { x: 74, y: 10, w: 56, h: 42, fill: "rgba(168,85,247,0.22)" },
    { x: 138, y: 10, w: 72, h: 42, fill: "rgba(244,114,182,0.14)" },
    { x: 10, y: 58, w: 76, h: 42, fill: "rgba(168,85,247,0.18)" },
    { x: 94, y: 58, w: 56, h: 42, fill: "rgba(244,114,182,0.18)" },
    { x: 158, y: 58, w: 52, h: 42, fill: "rgba(168,85,247,0.26)" },
  ];
  return (
    <svg className="fp-chart" width="220" height="110" viewBox="0 0 220 110">
      {cells.map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width={c.w} height={c.h} rx="5" fill={c.fill} />
      ))}
      <text x="38" y="36" textAnchor="middle" fontSize="18">🖼</text>
      <text x="102" y="36" textAnchor="middle" fontSize="18">🎨</text>
      <text x="174" y="36" textAnchor="middle" fontSize="18">🖼</text>
    </svg>
  );
}

const chartMap = {
  "line-green": <ChartLineGreen />,
  "bars-blue": <ChartBarsBlue />,
  donut: <ChartDonut />,
  "line-pink": <ChartLinePink />,
  table: <ChartTable />,
  collage: <ChartCollage />,
};

/* ─── Project Card ─── */
function ProjectCard({ project }) {
  return (
    <div className="fp-card">
      <div className={`fp-thumb fp-${project.thumb}`}>
        {chartMap[project.chart]}
      </div>
      <div className="fp-body">
        <span className="fp-cat">{project.cat}</span>
        <h3 className="fp-title">{project.title}</h3>
        <p className="fp-desc">{project.desc}</p>
        <div className="fp-foot">
          <div className="fp-tags">
            {project.tags.map((t) => (
              <span key={t} className="fp-tag">{t}</span>
            ))}
          </div>
          <a href={project.link} target="_blank" rel="noreferrer" className="fp-link">
            View ↗
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Section ─── */
export default function FeaturedProjects() {
  return (
    <section className="fp-section" id="projects">
      <div className="fp-inner">
        <p className="fp-sec-tag">Portfolio</p>
        <h2 className="fp-sec-title">Featured Projects</h2>
        <p className="fp-sec-sub">
          Real-world projects from data platforms to interactive web apps — all live on GitHub.
        </p>
        <div className="fp-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}