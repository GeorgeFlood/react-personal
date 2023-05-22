import { useRef } from "react";
import myImg from "../../Images/aboutme.jpeg";
import download from "../../Images/download.svg";
import useOnScreen from "./hooks/UseOnScreen.jsx";
import CV from "../../Images/GEORGE-FLOOD-ATS-Resume.pdf";

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
          A passionate junior front-end developer based in the heart of London,
          England. My journey in web development started with the basics: HTML,
          CSS, and JavaScript. I quickly fell in love with the endless
          possibilities of the web and expanded my skills to include modern
          tools like React, Tailwind, and SCSS. With a knack for designing and
          maintaining responsive websites, I strive to create smooth user
          experiences and dynamic, engaging interfaces. My focus is always on
          writing clean, optimized code, leveraging cutting-edge development
          tools and techniques. But I'm not just a coder – I believe in the
          power of teamwork. Collaborating with diverse teams to produce
          outstanding web applications is where I really thrive. Looking to
          create something amazing? Let's connect!
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
