import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import myImg from "../../public/Images/me.jpg";
import html from "../../public/images/html.svg";
import css from "../../public/images/css.svg";
import sass from "../../public/images/sass.svg";
import tailwind from "../../public/images/tailwind.svg";
import Javascript from "../../public/images/javascript.svg";
import react from "../../public/images/react.svg";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <div className="hero__info">
        <h1>
          Front-End React Developer <span className="hero__info--wave">👋</span>
        </h1>
        <p>
          Hi, I'm George Flood. A passionate Front-end Developer based in
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
            <li>
              <img src={html} alt="HTML logo" title="HTML" />
            </li>
            <li>
              <img src={css} alt="CSS logo" title="CSS" />
            </li>
            <li>
              <img src={sass} alt="SASS logo" title="SCSS" />
            </li>
            <li>
              <img src={tailwind} alt="Tailwind logo" title="Tailwind" />
            </li>
            <li>
              <img src={Javascript} alt="Javascript logo" title="Javascript" />
            </li>
            <li>
              <img src={react} alt="React logo" title="React" />
            </li>
          </div>
        </div>
      </div>
      <div className="hero__img">
        <div className="morph-effect">
          <img src={myImg} alt="George Flood" className="image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
