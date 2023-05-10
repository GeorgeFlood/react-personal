import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

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

  return (
    <>
      <nav>
        <ul className="nav">
          <li className="nav__item">
            <a href="#home">Home</a>
          </li>
          <li className="nav__item">
            <a href="#about">About</a>
          </li>
          <li className="nav__item">
            <a href="#project"> Portfolio</a>
          </li>
          <li className="nav__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className={`nav-sticky${isSticky ? " visible" : ""}`}>
          <li className="nav-sticky__item">
            <a href="#home">Home</a>
          </li>
          <li className="nav-sticky__item">
            <a href="#about">About</a>
          </li>
          <li className="nav-sticky__item">
            <a href="#project">Portfolio</a>
          </li>
          <li className="nav-sticky__item">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
