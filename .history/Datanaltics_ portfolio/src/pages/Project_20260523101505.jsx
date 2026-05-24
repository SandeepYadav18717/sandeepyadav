import "../Css/Projects.css";

function Projects() {

  /* INTERACTIVE GLOW */
  const handleMove = (e) => {

    const card = e.currentTarget;

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;

    const y = e.clientY - rect.top;

    card.style.setProperty("--x", `${x}px`);

    card.style.setProperty("--y", `${y}px`);
  };

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
          <div
            className="proj-card reveal"
            onMouseMove={handleMove}
          >

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
                Property trends and market insights
                with smart analytics.
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
          <div
            className="proj-card reveal"
            onMouseMove={handleMove}
          >

            <div className="proj-thumb pt-2">

              <div className="emoji">
                📊
              </div>

            </div>

            <div className="proj-body">

              <div className="proj-cat">
                Dashboard
              </div>

              <h3 className="proj-title">
                KPI Dashboard
              </h3>

              <p className="proj-desc">
                Interactive analytics dashboard
                with performance metrics.
              </p>

              <div className="proj-foot">

                <div className="proj-tags">

                  <span className="proj-tag">
                    Power BI
                  </span>

                  <span className="proj-tag">
                    SQL
                  </span>

                </div>

                <a
                  href="#"
                  className="proj-link"
                >
                  View ↗
                </a>

              </div>

            </div>

          </div>

          {/* PROJECT 3 */}
          <div
            className="proj-card reveal"
            onMouseMove={handleMove}
          >

            <div className="proj-thumb pt-3">

              <div className="emoji">
                🌐
              </div>

            </div>

            <div className="proj-body">

              <div className="proj-cat">
                Frontend Project
              </div>

              <h3 className="proj-title">
                Portfolio Website
              </h3>

              <p className="proj-desc">
                Responsive React portfolio
                with animations and effects.
              </p>

              <div className="proj-foot">

                <div className="proj-tags">

                  <span className="proj-tag">
                    React
                  </span>

                  <span className="proj-tag">
                    CSS
                  </span>

                </div>

                <a
                  href="#"
                  className="proj-link"
                >
                  View ↗
                </a>

              </div>

            </div>

          </div>

          {/* PROJECT 4 */}
          <div
            className="proj-card reveal"
            onMouseMove={handleMove}
          >

            <div className="proj-thumb pt-4">

              <div className="emoji">
                🤖
              </div>

            </div>

            <div className="proj-body">

              <div className="proj-cat">
                AI Project
              </div>

              <h3 className="proj-title">
                ML Predictor
              </h3>

              <p className="proj-desc">
                Machine learning prediction
                system using Python.
              </p>

              <div className="proj-foot">

                <div className="proj-tags">

                  <span className="proj-tag">
                    Python
                  </span>

                  <span className="proj-tag">
                    ML
                  </span>

                </div>

                <a
                  href="#"
                  className="proj-link"
                >
                  View ↗
                </a>

              </div>

            </div>

          </div>

          {/* PROJECT 5 */}
          <div
            className="proj-card reveal"
            onMouseMove={handleMove}
          >

            <div className="proj-thumb pt-5">

              <div className="emoji">
                📈
              </div>

            </div>

            <div className="proj-body">

              <div className="proj-cat">
                Analytics
              </div>

              <h3 className="proj-title">
                Sales Dashboard
              </h3>

              <p className="proj-desc">
                Sales tracking dashboard
                with charts and KPIs.
              </p>

              <div className="proj-foot">

                <div className="proj-tags">

                  <span className="proj-tag">
                    Excel
                  </span>

                  <span className="proj-tag">
                    Power BI
                  </span>

                </div>

                <a
                  href="#"
                  className="proj-link"
                >
                  View ↗
                </a>

              </div>

            </div>

          </div>

          {/* PROJECT 6 */}
          <div
            className="proj-card reveal"
            onMouseMove={handleMove}
          >

            <div className="proj-thumb pt-6">

              <div className="emoji">
                🎨
              </div>

            </div>

            <div className="proj-body">

              <div className="proj-cat">
                UI Design
              </div>

              <h3 className="proj-title">
                Design System
              </h3>

              <p className="proj-desc">
                Reusable CSS component system
                with animations and layouts.
              </p>

              <div className="proj-foot">

                <div className="proj-tags">

                  <span className="proj-tag">
                    CSS
                  </span>

                  <span className="proj-tag">
                    UI/UX
                  </span>

                </div>

                <a
                  href="#"
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