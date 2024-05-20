import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import myImg from "../../Images/me.jpg";
import html from "../../images/html.svg";
import css from "../../images/css.svg";
import sass from "../../images/sass.svg";
import tailwind from "../../images/tailwind.svg";
import Javascript from "../../images/javascript.svg";
import react from "../../images/react.svg";
import node from "../../Images/node-js.svg";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__info">
        <h1>
          Full-stack <br /> Developer{" "}
          <span className="hero__info--wave">👋</span>
        </h1>
        <p>
          Hi, I'm George Flood. A passionate Full-stack Developer based in
          London, England. 📍
        </p>
        <div className="hero__icons">
          <a
            href="https://github.com/GeorgeFlood"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} className="hero__git" />
          </a>
          <a
            href="https://www.linkedin.com/in/george-flood-frontend/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} className="hero__link" />
          </a>
        </div>
        <div className="hero__tech">
          <p>Tech Stack</p>
          <span className="hero__tech--border"></span>
          <div className="hero__tech__mobile">
            <li title="HTML">
              <img src={html} alt="HTML logo" />
            </li>
            <li title="CSS">
              <img src={css} alt="CSS logo" />
            </li>
            <li title="SCSS">
              <img src={sass} alt="SASS logo" />
            </li>
            <li title="Tailwind">
              <img src={tailwind} alt="Tailwind logo" />
            </li>
            <li title="Javascript">
              <img src={Javascript} alt="Javascript logo" />
            </li>
            <li title="React">
              <img src={react} alt="React logo" />
            </li>
            <li title="Node.js">
              <img src={node} alt="Node.js" />
            </li>
          </div>
        </div>
      </div>
      <div className="hero__img">
        <div className="morph-effect">
          <img src={myImg} alt="George Flood" className="image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
