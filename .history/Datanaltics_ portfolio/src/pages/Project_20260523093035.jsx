import "../Css/Project.css";

function Projects() {

  return (

    <section className="projects-section">

      {/* HEADING */}
      <div className="projects-heading">

        <p>
          MY WORK
        </p>

        <h1>
          Featured Projects
        </h1>

      </div>

      {/* PROJECTS */}
      <div className="projects-container">

        {/* PROJECT 1 */}
        <div className="project-card">

          {/* IMAGE */}
          <div className="project-image">
            📊
          </div>

          {/* CONTENT */}
          <div className="project-content">

            <h2>
              Sales Dashboard
            </h2>

            <p>
              Interactive Power BI dashboard
              for KPI tracking, sales insights,
              and business analytics.
            </p>

            {/* SKILLS */}
            <div className="project-skills">

              <span>Power BI</span>

              <span>SQL</span>

              <span>Excel</span>

            </div>

            {/* BUTTON */}
            <button>
              View Project ↗
            </button>

          </div>

        </div>

        {/* PROJECT 2 */}
        <div className="project-card">

          <div className="project-image">
            🌐
          </div>

          <div className="project-content">

            <h2>
              Portfolio Website
            </h2>

            <p>
              Modern responsive portfolio website
              built using React, JavaScript,
              and CSS animations.
            </p>

            <div className="project-skills">

              <span>React</span>

              <span>JavaScript</span>

              <span>CSS</span>

            </div>

            <button>
              Live Demo ↗
            </button>

          </div>

        </div>

        {/* PROJECT 3 */}
        <div className="project-card">

          <div className="project-image">
            🤖
          </div>

          <div className="project-content">

            <h2>
              Machine Learning Model
            </h2>

            <p>
              Predictive ML model using Python,
              Pandas, and Scikit-learn for
              advanced analytics.
            </p>

            <div className="project-skills">

              <span>Python</span>

              <span>Pandas</span>

              <span>Machine Learning</span>

            </div>

            <button>
              GitHub ↗
            </button>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Projects;