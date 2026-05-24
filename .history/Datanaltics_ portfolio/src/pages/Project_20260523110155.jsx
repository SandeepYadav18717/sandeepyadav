import "../Css/Project.css";





/* ─────────────────────────────────────────
   PROJECT DATA  – update any field freely
───────────────────────────────────────── */
const projects = [
  {
    id: 1,
    cat: "AI · Python · FastAPI",
    title: "AI PDF Fact Checker",
    desc: "Upload any PDF and let Claude AI verify every claim inside it. Built with Python FastAPI backend and Claude API — highlights factual errors, uncertain statements, and verified facts in real time.",
    tags: ["Python", "FastAPI", "Claude API", "React"],
    liveLink: "https://ai-pdf-fact-checker.netlify.app/",
    githubLink: "https://github.com/SandeepYadav18717",
    thumb: "t-ai",
    chart: "ai",
    featured: true,
  },
  {
    id: 2,
    cat: "Data Analytics · Power BI",
    title: "Tata Sales Analysis",
    desc: "End-to-end sales analytics report for Tata — revenue breakdowns, regional performance, product-line trends, and YoY comparisons visualized through rich charts and executive-ready PDF dashboards.",
    tags: ["Python", "Pandas", "Power BI", "PDF Report"],
    liveLink: "https://github.com/SandeepYadav18717/sales_Anlytcs/blob/main/Sales%20Analysis1_merged.pdf",
    githubLink: "https://github.com/SandeepYadav18717/sales_Anlytcs",
    thumb: "t-sales",
    chart: "sales",
    featured: false,
  },
  {
    id: 3,
    cat: "Real Estate Platform",
    title: "TruEstate",
    desc: "A modern real estate data platform with live property listings, smart search filters, pricing analytics, and interactive market-trend dashboards. Fully deployed on Netlify.",
    tags: ["JavaScript", "React", "CSS", "API"],
    liveLink: "https://truestae.netlify.app/",
    githubLink: "https://github.com/SandeepYadav18717/TruEstate",
    thumb: "t-real",
    chart: "line-green",
    featured: false,
  },
//   {
//     id: 4,
//     cat: "Weather Analytics",
//     title: "Weather Dashboard",
//     desc: "Real-time weather analytics app powered by live APIs — temperature trends, city comparisons, forecast charts, and responsive design built with React + Vite. Live on Netlify.",
//     tags: ["React", "Vite", "REST API", "Charts"],
//     liveLink: "https://zippy-crumble-f03f41.netlify.app/",
//     githubLink: "https://github.com/SandeepYadav18717/weather",
//     thumb: "t-weather",
//     chart: "bars-blue",
//     featured: false,
//   },
//   {
//     id: 5,
//     cat: "Portfolio Site",
//     title: "Personal Portfolio",
//     desc: "A React + Vite portfolio showcasing projects, skills, and experience. Component-based architecture with smooth animations and fully responsive layout across all screen sizes.",
//     tags: ["React", "Vite", "CSS"],
//     liveLink: "https://sandeepyadav18717.github.io/sandeep/",
//     githubLink: "https://github.com/SandeepYadav18717/Sandeep_portfolio",
//     thumb: "t-port",
//     chart: "donut",
//     featured: false,
//   },
  {
    id: 6,
    cat: "Creative App",
    title: "Sales data",
    desc: "Interactive JavaScript application for creating and arranging visual collages. Demonstrates advanced DOM manipulation, drag-and-drop events, and creative canvas-based UX.",
    tags: ["JavaScript", "Canvas", "Pthon", "Data Visualization"],
    liveLink: "https://github.com/SandeepYadav18717/sales_Anlytcs/blob/main/Sales%20Analysis1_merged.pdf",
    githubLink: "https://github.com/SandeepYadav18717/sales_Anlytcs",
    thumb: "t-collage",
    chart: "collage",
    featured: false,
  },
];

/* ─────────────────────────────────────────
   SVG CHART THUMBNAILS
───────────────────────────────────────── */

/* AI Fact Checker — brain / neural net style */
function ChartAI() {
  const nodes = [
    { cx: 40, cy: 55, r: 7 },
    { cx: 90, cy: 28, r: 5 },
    { cx: 90, cy: 55, r: 5 },
    { cx: 90, cy: 82, r: 5 },
    { cx: 145, cy: 38, r: 5 },
    { cx: 145, cy: 72, r: 5 },
    { cx: 190, cy: 55, r: 7 },
  ];
  const edges = [
    [40,55,90,28],[40,55,90,55],[40,55,90,82],
    [90,28,145,38],[90,28,145,72],
    [90,55,145,38],[90,55,145,72],
    [90,82,145,38],[90,82,145,72],
    [145,38,190,55],[145,72,190,55],
  ];
  return (
    <svg className="fp-chart" width="230" height="110" viewBox="0 0 230 110">
      {edges.map(([x1,y1,x2,y2], i) => (
        <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="rgba(99,102,241,0.35)" strokeWidth="1.2"
          className="fp-draw" style={{ animationDelay: `${i * 0.06}s` }}
        />
      ))}
      {nodes.map((n, i) => (
        <circle key={i} cx={n.cx} cy={n.cy} r={n.r}
          fill={i === 0 || i === nodes.length - 1 ? "#818cf8" : "rgba(129,140,248,0.5)"}
          stroke="#6366f1" strokeWidth="1.5"
        />
      ))}
      {/* check mark on output */}
      <circle cx="190" cy="55" r="13" fill="none" stroke="rgba(74,222,128,0.4)" strokeWidth="1.5" strokeDasharray="4 2"/>
      <polyline points="183,55 188,61 198,49" fill="none" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="fp-draw" style={{ animationDelay: "0.8s" }}/>
    </svg>
  );
}

/* Tata Sales — multi-bar + trend line */
function ChartSales() {
  const groups = [
    { x: 14,  hA: 52, hB: 38 },
    { x: 54,  hA: 70, hB: 55 },
    { x: 94,  hA: 44, hB: 62 },
    { x: 134, hA: 88, hB: 70 },
    { x: 174, hA: 65, hB: 80 },
  ];
  const base = 101;
  return (
    <svg className="fp-chart" width="230" height="110" viewBox="0 0 230 110">
      {groups.map((g, i) => (
        <g key={i}>
          <rect className="fp-bar" x={g.x} y={base - g.hA} width="14" height={g.hA} rx="3"
            fill="#f59e0b" opacity="0.85" style={{ animationDelay: `${i * 0.1}s` }}/>
          <rect className="fp-bar" x={g.x + 16} y={base - g.hB} width="14" height={g.hB} rx="3"
            fill="#fb923c" opacity="0.65" style={{ animationDelay: `${i * 0.1 + 0.05}s` }}/>
        </g>
      ))}
      <polyline className="fp-draw"
        points="21,49 61,31 101,57 141,13 181,36"
        fill="none" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray="200" style={{ animationDelay: "0.5s" }}
      />
      {[21,61,101,141,181].map((x, i) => {
        const ys = [49,31,57,13,36];
        return <circle key={i} cx={x} cy={ys[i]} r="3" fill="#fbbf24"/>;
      })}
    </svg>
  );
}

/* TruEstate — green area line */
function ChartLineGreen() {
  return (
    <svg className="fp-chart" width="230" height="110" viewBox="0 0 230 110" overflow="visible">
      <defs>
        <linearGradient id="g-green" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4ade80" stopOpacity="0.22"/>
          <stop offset="100%" stopColor="#4ade80" stopOpacity="0"/>
        </linearGradient>
      </defs>
      <polygon points="0,90 40,62 80,76 115,32 155,50 185,16 230,28 230,110 0,110" fill="url(#g-green)"/>
      <polyline className="fp-draw"
        points="0,90 40,62 80,76 115,32 155,50 185,16 230,28"
        fill="none" stroke="#4ade80" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        strokeDasharray="320"
      />
      <circle cx="185" cy="16" r="5" fill="#4ade80" opacity="0.9"/>
      <circle cx="115" cy="32" r="3.5" fill="#4ade80" opacity="0.6"/>
    </svg>
  );
}

/* Weather — blue bars */
function ChartBarsBlue() {
  const bars = [
    { x: 10, h: 46, d: "0.05s" }, { x: 46, h: 73, d: "0.10s" },
    { x: 82, h: 59, d: "0.15s" }, { x: 118, h: 89, d: "0.20s" },
    { x: 154, h: 67, d: "0.25s" }, { x: 190, h: 51, d: "0.30s" },
  ];
  return (
    <svg className="fp-chart" width="230" height="110" viewBox="0 0 230 110">
      {bars.map((b, i) => (
        <rect key={i} className="fp-bar"
          x={b.x} y={101 - b.h} width="26" height={b.h} rx="4"
          fill="#38bdf8" opacity={0.45 + i * 0.1}
          style={{ animationDelay: b.d }}
        />
      ))}
    </svg>
  );
}

/* Portfolio — donut */
function ChartDonut() {
  return (
    <svg className="fp-chart" width="230" height="110" viewBox="0 0 230 110">
      <circle cx="115" cy="55" r="42" fill="none" stroke="rgba(251,191,36,0.12)" strokeWidth="18"/>
      <circle cx="115" cy="55" r="42" fill="none" stroke="#fbbf24" strokeWidth="18"
        strokeDasharray="184 80" strokeLinecap="round" transform="rotate(-90 115 55)"/>
      <circle cx="115" cy="55" r="24" fill="none" stroke="rgba(249,115,22,0.12)" strokeWidth="11"/>
      <circle cx="115" cy="55" r="24" fill="none" stroke="#f97316" strokeWidth="11"
        strokeDasharray="106 45" strokeLinecap="round" transform="rotate(-90 115 55)"/>
      <text x="115" y="60" textAnchor="middle" fill="#fbbf24" fontSize="10" fontWeight="700"
        fontFamily="JetBrains Mono,monospace">PORTFOLIO</text>
    </svg>
  );
}

/* Collage — grid blocks */
function ChartCollage() {
  const cells = [
    { x: 10, y: 10, w: 58, h: 42, fill: "rgba(244,114,182,0.22)" },
    { x: 76, y: 10, w: 58, h: 42, fill: "rgba(168,85,247,0.22)" },
    { x: 142, y: 10, w: 78, h: 42, fill: "rgba(244,114,182,0.14)" },
    { x: 10, y: 58, w: 78, h: 42, fill: "rgba(168,85,247,0.18)" },
    { x: 96, y: 58, w: 58, h: 42, fill: "rgba(244,114,182,0.18)" },
    { x: 162, y: 58, w: 58, h: 42, fill: "rgba(168,85,247,0.26)" },
  ];
  return (
    <svg className="fp-chart" width="230" height="110" viewBox="0 0 230 110">
      {cells.map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width={c.w} height={c.h} rx="5" fill={c.fill}/>
      ))}
      <text x="39" y="36" textAnchor="middle" fontSize="18">🖼</text>
      <text x="105" y="36" textAnchor="middle" fontSize="18">🎨</text>
      <text x="181" y="36" textAnchor="middle" fontSize="18">🖼</text>
    </svg>
  );
}

const chartMap = {
  ai: <ChartAI />,
  sales: <ChartSales />,
  "line-green": <ChartLineGreen />,
  "bars-blue": <ChartBarsBlue />,
  donut: <ChartDonut />,
  collage: <ChartCollage />,
};

/* ─────────────────────────────────────────
   ICONS
───────────────────────────────────────── */
const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
);

const ExternalIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

/* ─────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────── */
function ProjectCard({ project }) {
  return (
    <div className={`fp-card ${project.featured ? "fp-card--featured" : ""}`}>
      {project.featured && <div className="fp-badge">⭐ Featured</div>}
      <div className={`fp-thumb fp-${project.thumb}`}>
        {chartMap[project.chart]}
      </div>
      <div className="fp-body">
        <span className="fp-cat">{project.cat}</span>
        <h3 className="fp-title">{project.title}</h3>
        <p className="fp-desc">{project.desc}</p>
        <div className="fp-tags" style={{ marginBottom: "1rem" }}>
          {project.tags.map((t) => (
            <span key={t} className="fp-tag">{t}</span>
          ))}
        </div>
        <div className="fp-foot">
          <a href={project.githubLink} target="_blank" rel="noreferrer" className="fp-btn fp-btn--ghost">
            <GitHubIcon /> GitHub
          </a>
          <a href={project.liveLink} target="_blank" rel="noreferrer" className="fp-btn fp-btn--primary">
            Live Demo <ExternalIcon />
          </a>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   SECTION
───────────────────────────────────────── */
export default function Projects() {
  return (
    <section className="fp-section" id="projects">
      <div className="fp-inner">

        {/* Header */}
        <p className="fp-sec-tag">Portfolio</p>
        <h2 className="fp-sec-title">Featured Projects</h2>
        <p className="fp-sec-sub">
          Live apps, data reports, and AI tools — all built by Sandeep Yadav.
        </p>

        {/* Grid */}
        <div className="fp-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="fp-github-cta">
          <p>Want to see everything?</p>
          <a
            href="https://github.com/SandeepYadav18717"
            target="_blank"
            rel="noreferrer"
            className="fp-btn fp-btn--github"
          >
            <GitHubIcon />
            View All on GitHub — SandeepYadav18717
          </a>
        </div>

      </div>
    </section>
  );
}