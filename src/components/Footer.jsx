import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__copy">
        <h3>Copyright © {currentYear}. All rights reserved.</h3>
      </div>
      <div className="footer__icons">
        <a
          href="https://github.com/GeorgeFlood"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/george-flood-frontend/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer__link"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
