import "../Css/Projects.css";

function Projects() {

  return (

    <section id="projects">

      <div className="sec-inner">

        <div className="projects-heading">

          <p className="sec-tag">
            Portfolio
          </p>

          <h2 className="sec-title">
            Featured Projects
          </h2>

          <p className="sec-sub">
            Real-world projects from data platforms
            to interactive web applications.
          </p>

        </div>

        <div className="proj-grid">

          {/* PROJECT 1 */}
          <div className="proj-card">

            <div className="proj-thumb pt-1">

              <div className="emoji">
                📊
              </div>

            </div>

            <div className="proj-body">

              <div className="proj-cat">
                Real Estate Analytics
              </div>

              <h3 className="proj-title">
                TruEstate
              </h3>

              <p className="proj-desc">

                Real estate platform analyzing
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
          <div className="proj-card">

            <div className="proj-thumb pt-2">

              <div className="emoji">
                🌦️
              </div>

            </div>

            <div className="proj-body">

              <div className="proj-cat">
                Weather Analytics
              </div>

              <h3 className="proj-title">
                Weather Dashboard
              </h3>

              <p className="proj-desc">

                Live weather analytics app
                with charts and API integration.

              </p>

              <div className="proj-foot">

                <div className="proj-tags">

                  <span className="proj-tag">
                    JavaScript
                  </span>

                  <span className="proj-tag">
                    API
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
          <div className="proj-card">

            <div className="proj-thumb pt-3">

              <div className="emoji">
                ⚛️
              </div>

            </div>

            <div className="proj-body">

              <div className="proj-cat">
                Portfolio Site
              </div>

              <h3 className="proj-title">
                Personal Portfolio
              </h3>

              <p className="proj-desc">

                Responsive portfolio website
                built using React and CSS.

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