import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import useOnScreen from "./hooks/UseOnScreen.jsx";

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

  const containerClasses = [
    "projects__container",
    reversed && "projects__container--reversed",
    containerVisible ? (reversed ? "fade-in-right" : "fade-in-left") : "hidden",
  ]
    .filter(Boolean)
    .join(" ");

  const techItems = tech.map((techItem, index) => (
    <p key={`tech-item-${index}`}>{techItem}</p>
  ));

  return (
    <section ref={containerRef} className={containerClasses} id="project">
      <div className="projects__container--img">
        <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
          <div
            className="projects__img"
            style={{
              backgroundImage: `url(${imageSrc})`,
            }}
          />
        </a>
      </div>

      <div className="projects__container--info">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="projects__container--tech">{techItems}</div>
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
    </section>
  );
};

export default ProjectCard;
