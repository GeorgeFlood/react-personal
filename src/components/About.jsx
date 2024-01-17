import { useRef } from "react";
import myImg from "../../Images/aboutme.jpg";
import download from "../../Images/download.svg";
import useOnScreen from "./hooks/UseOnScreen.jsx";
const cvUrl = "/George_Flood_CV.docx";

const About = () => {
  const aboutRef = useRef(null);

  const aboutVisible = useOnScreen(aboutRef, "0px 0px -300px 0px");

  return (
    <div className="about" id="about" ref={aboutRef}>
      <div className={`about__img ${aboutVisible ? "fade-in-left" : ""}`}>
        <img src={myImg} alt="Picture of me in Amsterdam" className="img" />
      </div>
      <div className={`about__info ${aboutVisible ? "fade-in-right" : ""}`}>
        <h4>ABOUT ME</h4>
        <h3>A Digital Craftsman, an Information Marksman based in London, England 📍</h3>
        <p>
       Greetings straight outta the murky depths of London (it's mostly rain). I'm the junior front-end developer you're reading about. My journey into the world of web development started in the most groundbreaking way imaginable: HTML, CSS, and JavaScript. It was an exhilarating ride, akin to watching paint dry, but in RGB.
       <br></br> <br/>

       I've since expanded my arsenal with tools like React, Tailwind, and SCSS. These are the tools that help me turn the mundane into the slightly-less mundane, crafting websites that respond with the enthusiasm of a British royal guard. My aim? To create user experiences that are as seamless as my tea-making routine.
  <br></br> <br/>

         But don't be fooled, I'm more than a semi-colon enthusiast. My real talent lies in blending into teams like a chameleon, only less colourful and more focused on producing exceptional web applications. It's the kind of collaboration that's as exciting as discussing the weather in an elevator.
       <br></br> <br/>
       So, if you're interested in creating digital experiences with someone who considers coding a wild Friday night, let's connect. We can push the boundaries of web development, or at least nudge them gently.
  <br></br> <br/>
Lastly, all the projects you see here, including this site, are hand-crafted from scratch – no templates, no tutorials.
        </p>
        <a href={cvUrl} download className="btn-link">
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
