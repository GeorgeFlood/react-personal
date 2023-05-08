import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="footer__copy">
        <h3>Copyright © {currentYear}. All rights are reserved</h3>
      </div>
      <div className="hero__icons">
        <a
          href="https://github.com/GeorgeFlood"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} className="hero__git footer__link" />
        </a>
        <a
          href="https://www.linkedin.com/in/george-flood-frontend/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="hero__link footer__link"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
