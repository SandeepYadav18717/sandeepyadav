import "./About.css";
import "../Css/About.css";
function About() {

  return (

    <section className="about-section">

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">

          <div className="about-tag">
            About Me
          </div>

          <h1 className="about-heading">
            Turning Ideas Into
            <span> Real Projects</span>
          </h1>

          <p className="about-text">
            Hi, I'm <strong>Sandeep Yadav</strong> — a passionate
            Data Analyst and Frontend Developer who loves transforming
            raw data into meaningful insights and interactive digital
            experiences.
          </p>

          <p className="about-text">
            I enjoy building modern dashboards, solving analytical
            problems, and designing clean user interfaces that feel
            intuitive and engaging.
          </p>

          <p className="about-text">
            From Python and SQL to React and Power BI, I constantly
            explore new technologies to improve my skills and create
            impactful real-world projects.
          </p>

          {/* INFO BOX */}
          <div className="about-box">

            <div className="about-item">
              <h3>Experience</h3>
              <p>Frontend & Data Projects</p>
            </div>

            <div className="about-item">
              <h3>Specialization</h3>
              <p>Data Analytics & UI Design</p>
            </div>

            <div className="about-item">
              <h3>Location</h3>
              <p>India</p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          <div className="about-card">

            <h2>Sandeep Yadav</h2>

            <p>
              Passionate about technology,
              creativity, analytics, and building
              meaningful digital experiences.
            </p>

            <div className="about-skills">

              <span>Python</span>
              <span>SQL</span>
              <span>React</span>
              <span>Power BI</span>
              <span>JavaScript</span>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default About;