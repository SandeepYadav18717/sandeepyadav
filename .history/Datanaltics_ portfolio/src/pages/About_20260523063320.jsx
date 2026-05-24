import "../Css/About.css";


function Skills() {

  return (

    <section className="skills-section">

      {/* TITLE */}
      <div className="skills-heading">

        <p>MY EXPERTISE</p>

        <h1>
          Skills Universe
        </h1>

      </div>

      {/* MAIN CONTAINER */}
      <div className="skills-container">

        {/* CENTER CIRCLE */}
        <div className="center-circle">
          Skills
        </div>

        {/* PYTHON */}
        <div className="skill skill-1">

          <div className="line"></div>

          <div className="skill-ball">
            🐍 Python
          </div>

        </div>

        {/* SQL */}
        <div className="skill skill-2">

          <div className="line"></div>

          <div className="skill-ball">
            🗄️ SQL
          </div>

        </div>

        {/* REACT */}
        <div className="skill skill-3">

          <div className="line"></div>

          <div className="skill-ball">
            ⚛ React
          </div>

        </div>

        {/* POWER BI */}
        <div className="skill skill-4">

          <div className="line"></div>

          <div className="skill-ball">
            📈 Power BI
          </div>

        </div>

        {/* JAVASCRIPT */}
        <div className="skill skill-5">

          <div className="line"></div>

          <div className="skill-ball">
            🌐 JavaScript
          </div>

        </div>

      </div>

    </section>

  );
}

export default Skills;