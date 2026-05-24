import Button from "../Components/button";
import "../Css/Main.css";
import photo from "../assets/image.png";

function Main_Page() {
  return (
    <div className="main-page">
      {/* LEFT SECTION */}
      <div className="left-section">
        <div id="Heading_1">Available for opportunities</div>

        <div id="Name">Sandeep Yadav</div>

        <div id="Heading_2">
          Data Analyst | Frontend Developer | SQL Trainee
        </div>

        <p id="Description">
          I transform raw data into meaningful insights and build intuitive web
          experiences. Passionate about data storytelling, dashboards, and
          turning numbers into decisions.
        </p>

        <Button
          text="View Projects ↗"
          onClick={() => window.open("https://github.com/SandeepYadav18717")}
        />
        <Button
          id="Github"
          text="⌥ Github Profile"
          onClick={() => window.open("https://github.com/SandeepYadav18717")}
        />
      </div>
      {/* RIGHT SECTION */}
      <div className="profile-wrapper">
        <div className="floating-badge badge-top">🟢 Open to work</div>

        {/* FLOATING BADGE 2 */}
        <div className="floating-badge badge-bottom">📊 9 Repos</div>

        {/* PROFILE CARD */}
        <div className="profile-card">
          {/* PROFILE IMAGE */}
          <img src={photo} alt="Profile" id="Photo" />

          {/* NAME */}
          <h2 className="profile-name">Sandeep Yadav</h2>

          {/* ROLE */}
          <p className="profile-role"></p>

          {/* SKILLS */}
          <div className="skill-tags">
            <span>📊 Analytics</span>

            <span>🐍 Python</span>

            <span>🗄️ SQL</span>

            <span>📈 Power BI</span>

            <span>🌐 JavaScript</span>
            <span>📈 React</span>
            <span>📈 Pandas</span>
            <span>📈 Matplotlib</span>
            <span>📈ML </span>
          </div>

          {/* BUTTONS */}
          <div className="profile-buttons">
            {/* GITHUB */}
            <button
              className="github-btn"
              onClick={() =>
                window.open("https://github.com/SandeepYadav18717")
              }
            >
              ⌥ GitHub
            </button>

            {/* CONTACT */}
            <button
              className="contact-btn"
              onClick={() => window.open("https://www.linkedin.com/in/sandeep-yadav-0b6357210/
                ")}
            >
              ✉ Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main_Page;
