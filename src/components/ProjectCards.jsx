import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import useOnScreen from "../components/hooks/UseOnScreen";

const ProjectCard = ({
  imageSrc,
  name,
  description,
  tech,
  githubLink,
  liveDemoLink,
  reversed,
}) => {
  const containerRef = useRef(null);
  const containerVisible = useOnScreen(containerRef, "0px 0px -200px 0px");

  return (
    <div
      ref={containerRef}
      className={`projects__container${
        reversed ? " projects__container--reversed" : ""
      } ${
        containerVisible ? (reversed ? "fade-in-right" : "fade-in-left") : ""
      }`}
    >
      <div className="projects__container--img">
        <img src={imageSrc} alt={name} className="projects__img" />
      </div>

      <div className="projects__container--info">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="projects__container--tech">
          {tech.map((techItem, index) => (
            <p key={index}>{techItem}</p>
          ))}
        </div>
        <div className="projects__container--links">
          <div className="projects__container--github">
            <a href={githubLink} target="_blank" rel="noopener noreferrer">
              <p>Code</p>
              <FontAwesomeIcon
                icon={faGithub}
                className="projects--githubIcon"
              />
            </a>
          </div>
          <div className="projects__container--live">
            <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
              <p>Live Demo</p>
              <FontAwesomeIcon
                icon={faExternalLinkAlt}
                className="projects--ExternalIcon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
