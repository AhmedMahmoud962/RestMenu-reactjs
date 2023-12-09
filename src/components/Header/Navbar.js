import React, { useState } from "react";
import "./Navbar.css";
// import Zoom from "react-reveal/Zoom";
// import { a } from "react-router-dom";

const Navbar = ({ filterbySearch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [searchvalue, setsearchvalue] = useState("");
  const onsearch = () => {
    filterbySearch(searchvalue);
    setsearchvalue("");
  };
  return (
    // <Zoom left>
    <nav className={`navbar ${isOpen ? "open" : ""}`}>
      <div className="navbar-logo">
        <h1 className="title">Restaurant Menu</h1>
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
        <li className="navbar-link">
          <a href="#home">Home</a>
        </li>
        <li className="navbar-link">
          <a href="#menu">Menu</a>
        </li>
        <li className="navbar-link">
          <a href="#contact-details">Contact</a>
        </li>
        <li className="navbar-link">
          <input
            className="input-search"
            type="text"
            placeholder="Search for food"
            onChange={(e) => setsearchvalue(e.target.value)}
            value={searchvalue}
          />
          <button className="btn-search" onClick={() => onsearch()}>
            Search
          </button>
        </li>
      </ul>
    </nav>
    // </Zoom>
  );
};

export default Navbar;
