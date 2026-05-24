import Button from "../Components/button";
import "../Css/Main.css";
import photo from "../assets/image.png";

function Main_Page() {

  return (

    <div className="main-page">

      {/* LEFT SECTION */}
      <div className="left-section">

        <div id="Heading_1">
          Available for opportunities
        </div>

        <div id="Name">
          Sandeep Yadav
        </div>

        <div id="Heading_2">
          Data Analyst | Frontend Developer | SQL Trainee
        </div>

        <p id="Description">
          I transform raw data into meaningful insights and build intuitive web
          experiences. Passionate about data storytelling, dashboards, and
          turning numbers into decisions.
        </p>

        <Button
          text="View Projects"
          onClick={() =>
            window.open("https://github.com/SandeepYadav18717")
          }
        />
         <Button
            text="Github Profile"
            onClick={() =>
              window.open("https://github.com/SandeepYadav18717")
            }
          />

      </div>

    
      <div className="photo">

        <img
          src={photo}
          alt="Profile"
          id="Photo"
        />

      </div>

    </div>

  );
}

export default Main_Page;