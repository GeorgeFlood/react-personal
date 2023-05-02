import React, { useRef } from "react";
import myImg from "../../public/Images/aboutme.jpeg";
import download from "../../public/Images/download.svg";
import useOnScreen from "../components/hooks/UseOnScreen";
import CV from "../../public/Images/George+Flood_+Resume.pdf";

const About = () => {
  const aboutRef = useRef(null);

  const aboutVisible = useOnScreen(aboutRef, "0px 0px -300px 0px");

  return (
    <div className="about" id="about" ref={aboutRef}>
      <div className={`about__img ${aboutVisible ? "fade-in-left" : ""}`}>
        <img src={myImg} className="img" />
      </div>
      <div className={`about__info ${aboutVisible ? "fade-in-right" : ""}`}>
        <h4>ABOUT ME</h4>
        <h3>A dedicated Digital Crafts-man based in London, England 📍</h3>
        <p>
          As a Junior Front-End Developer, I possess an impressive arsenal of
          skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in
          designing and maintaining responsive websites that offer a smooth user
          experience. My expertise lies in crafting dynamic, engaging interfaces
          through writing clean and optimized code and utilizing cutting-edge
          development tools and techniques. I am also a team player who thrives
          in collaborating with cross-functional teams to produce outstanding
          web applications.
        </p>
        <a href={CV} download className="btn-link">
          <button className="about__btn">
            Download CV
            <img src={download} alt="Download" className="downloadSVG" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default About;
