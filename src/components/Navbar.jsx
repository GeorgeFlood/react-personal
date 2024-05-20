import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = () => {
    const heroHeight = document.querySelector(".hero").offsetHeight;
    if (window.scrollY > heroHeight) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3, // Adjust the threshold for better responsiveness
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    // Add a fallback to set "home" as active when no other section is in view
    const handleFallback = () => {
      const isAnySectionInView = Array.from(sections).some(
        (section) =>
          section.getBoundingClientRect().top <= window.innerHeight &&
          section.getBoundingClientRect().bottom >= 0
      );
      if (!isAnySectionInView) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleFallback);

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
      window.removeEventListener("scroll", handleFallback);
    };
  }, []);

  return (
    <>
      <nav>
        <ul className="nav">
          <li
            className={`nav__item ${activeSection === "home" ? "active" : ""}`}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`nav__item ${activeSection === "about" ? "active" : ""}`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`nav__item ${activeSection === "project" ? "active" : ""}`}
          >
            <a href="#project">Portfolio</a>
          </li>
          <li
            className={`nav__item ${activeSection === "contact" ? "active" : ""}`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={`nav-sticky ${isSticky ? "visible" : ""}`}>
          <li
            className={`nav-sticky__item ${activeSection === "home" ? "active" : ""}`}
          >
            <a href="#home">Home</a>
          </li>
          <li
            className={`nav-sticky__item ${activeSection === "about" ? "active" : ""}`}
          >
            <a href="#about">About</a>
          </li>
          <li
            className={`nav-sticky__item ${activeSection === "project" ? "active" : ""}`}
          >
            <a href="#project">Portfolio</a>
          </li>
          <li
            className={`nav-sticky__item ${activeSection === "contact" ? "active" : ""}`}
          >
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
