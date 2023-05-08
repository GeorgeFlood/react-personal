import React from "react";

const MobileNav = () => {
  const handleClick = (e) => {
    e.currentTarget.classList.toggle("clicked");
    document.querySelector(".FullScreenMenu").classList.toggle("active");
  };

  const handleLinkClick = (e) => {
    document.querySelector(".Mobile").classList.remove("clicked");
    document.querySelector(".FullScreenMenu").classList.remove("active");
  };

  return (
    <>
      <div className="Mobile" onClick={handleClick}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="FullScreenMenu" onClick={handleLinkClick}>
        <nav className="Mobile__nav">
          <li>
            <a href="#home" onClick={handleLinkClick}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleLinkClick}>
              About
            </a>
          </li>
          <li>
            <a href="#project" onClick={handleLinkClick}>
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleLinkClick}>
              Contact
            </a>
          </li>
        </nav>
      </div>
    </>
  );
};

export default MobileNav;
