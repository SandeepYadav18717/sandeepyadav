import "../Css/Projects.css";

function Projects() {

  return (

    <section id="projects">

      <div className="sec-inner">

        {/* HEADING */}
        <div className="reveal">

          <div className="sec-tag">
            Portfolio
          </div>

          <h2 className="sec-title">
            Featured Projects
          </h2>

          <p className="sec-sub">
            Real-world projects from data platforms
            to interactive web applications — all live on GitHub.
          </p>

        </div>

        {/* GRID */}
        <div className="proj-grid">

          {/* PROJECT 1 */}
          <div className="proj-card reveal">

            <div className="proj-thumb pt-1">

              <svg
                className="proj-chart"
                width="220"
                height="110"
                viewBox="0 0 220 110"
              >

                <polyline
                  className="chart-path"
                  points="0,90 35,60 70,75 105,30 140,50 175,15 220,28"
                  fill="none"
                  stroke="#4ade80"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle
                  cx="175"
                  cy="15"
                  r="4"
                  fill="#4ade80"
                />

              </svg>

            </div>

            <div className="proj-body">

              <div className="proj-cat">
                Real Estate Analytics
              </div>

              <h3 className="proj-title">
                TruEstate
              </h3>

              <p className="proj-desc">
                A real estate data platform analyzing
                property trends and market insights.
              </p>

              <div className="proj-foot">

                <div className="proj-tags">

                  <span className="proj-tag">
                    JavaScript
                  </span>

                  <span className="proj-tag">
                    CSS
                  </span>

                  <span className="proj-tag">
                    API
                  </span>

                </div>

                <a
                  href="https://github.com/SandeepYadav18717/TruEstate"
                  target="_blank"
                  className="proj-link"
                >
                  View ↗
                </a>

              </div>

            </div>

          </div>

          {/* PROJECT 2 */}
          <div className="proj-card reveal">

            <div className="proj-thumb pt-2">

              <svg
                className="proj-chart"
                width="220"
                height="110"
                viewBox="0 0 220 110"
              >

                <rect x="10" y="55" width="24" height="45" rx="4" fill="#38bdf8" opacity="0.6"/>

                <rect x="44" y="30" width="24" height="70" rx="4" fill="#38bdf8" opacity="0.8"/>

                <rect x="78" y="45" width="24" height="55" rx="4" fill="#38bdf8" opacity="0.6"/>

                <rect x="112" y="15" width="24" height="85" rx="4" fill="#38bdf8"/>

                <rect x="146" y="35" width="24" height="65" rx="4" fill="#38bdf8" opacity="0.7"/>

                <rect x="180" y="50" width="24" height="50" rx="4" fill="#38bdf8" opacity="0.5"/>

              </svg>

            </div>

            <div className="proj-body">

              <div className="proj-cat">
                Weather Analytics
              </div>

              <h3 className="proj-title">
                Weather Dashboard
              </h3>

              <p className="proj-desc">
                Real-time weather analytics app
                with live API integration.
              </p>

              <div className="proj-foot">

                <div className="proj-tags">

                  <span className="proj-tag">
                    JavaScript
                  </span>

                  <span className="proj-tag">
                    REST API
                  </span>

                  <span className="proj-tag">
                    Charts
                  </span>

                </div>

                <a
                  href="https://github.com/SandeepYadav18717/weather"
                  target="_blank"
                  className="proj-link"
                >
                  View ↗
                </a>

              </div>

            </div>

          </div>

          {/* PROJECT 3 */}
          <div className="proj-card reveal">

            <div className="proj-thumb pt-3">

              <svg
                className="proj-chart"
                width="220"
                height="110"
                viewBox="0 0 220 110"
              >

                <circle
                  cx="110"
                  cy="55"
                  r="40"
                  fill="none"
                  stroke="rgba(251,191,36,0.1)"
                  strokeWidth="16"
                />

                <circle
                  cx="110"
                  cy="55"
                  r="40"
                  fill="none"
                  stroke="#fbbf24"
                  strokeWidth="16"
                  strokeDasharray="180 72"
                  strokeLinecap="round"
                  transform="rotate(-90 110 55)"
                />

                <text
                  x="110"
                  y="60"
                  textAnchor="middle"
                  fill="#fbbf24"
                  fontSize="11"
                  fontWeight="bold"
                >
                  PORTFOLIO
                </text>

              </svg>

            </div>

            <div className="proj-body">

              <div className="proj-cat">
                Portfolio Site
              </div>

              <h3 className="proj-title">
                Personal Portfolio
              </h3>

              <p className="proj-desc">
                Modern React + Vite portfolio
                with animations and responsive design.
              </p>

              <div className="proj-foot">

                <div className="proj-tags">

                  <span className="proj-tag">
                    React
                  </span>

                  <span className="proj-tag">
                    Vite
                  </span>

                  <span className="proj-tag">
                    CSS
                  </span>

                </div>

                <a
                  href="https://github.com/SandeepYadav18717"
                  target="_blank"
                  className="proj-link"
                >
                  View ↗
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Projects;