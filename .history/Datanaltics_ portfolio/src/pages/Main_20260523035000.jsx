import Button from "../Components/button";
import "../Css/Main.css";
import photo from "../assets/image.png";
import Photo from "../Components/photo";
function Main_Page() {
  return (
    <div>
      <div className="main-page">
        <div id="Heading_1"> Available for opportunities</div>
        <div id="Name"> Sandeep Yadav</div>
        <div id="Photo" src="image.png">
        <div id="Heading_2"> Data Analyst| Frontend Developer| SQL Trainee</div>
        <p id="Description">
          "I transform raw data into meaningful insights and build intuitive web
          experiences. Passionate about data storytelling, dashboards, and
          turning numbers into decisions. "
        </p>
        <Button
          text="View Portfolio"
          onClick={() => window.open("https://github.com/SandeepYadav18717")}
        />
      </div>
    </div>
  );
}
export default Main_Page;
