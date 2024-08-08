import { useRef } from "react";
import myImg from "../../Images/aboutme.jpg";
import download from "../../Images/download.svg";
import useOnScreen from "./hooks/UseOnScreen.jsx";
const cvUrl = "../../images/GeorgeFlood_CV.docx";

const About = () => {
  const aboutRef = useRef(null);

  const aboutVisible = useOnScreen(aboutRef, "0px 0px -300px 0px");

  return (
    <section className="about" id="about" ref={aboutRef}>
      <div className={`about__img ${aboutVisible ? "fade-in-left" : ""}`}>
        <img src={myImg} alt="Picture of me in Amsterdam" className="img" />
      </div>
      <div className={`about__info ${aboutVisible ? "fade-in-right" : ""}`}>
        <h4>ABOUT ME</h4>
        <h3>
          A Digital Craftsman, an Information Marksman based in London, England
          📍
        </h3>

        <p>
          {" "}
          I'm a full-stack developer with a passion for front-end and creating
          exceptional user experiences. I love making things look good! As a
          self-taught developer, I take pride in my work and am always excited
          to learn what's next. Let's build something amazing together! <br />{" "}
          <br />
          Lastly, all the projects you see here, including this site, are
          hand-crafted from scratch – no templates, no tutorials.
        </p>
        <a href={cvUrl} download className="btn-link">
          <button className="about__btn">
            Download CV
            <img src={download} alt="Download" className="downloadSVG" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;
