import React from "react";
import "./Footer.css";
// import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="heading">
        <h2>Restaurant Menu</h2>
      </div>
      <div className="content">
        <div className="services">
          <h4>Services</h4>
          <p>Frontend Developer</p>
          <p>App development</p>
          <p>Web development</p>
          <p>ReactJs Developer</p>
          <p>Web designing</p>
        </div>
        <div className="social-media">
          <h4>Social</h4>
          <p>
            <a
              href="https://www.linkedin.com/in/ahmed-mahmoud-0461a6213/"
              target="blank"
            >
              <i className="fab fa-linkedin"></i> Linkedin
            </a>
          </p>

          <p>
            <a href="https://github.com/AhmedMahmoud962" target="blank">
              <i className="fab fa-github"></i> Github
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/mahmoud.ashour.96343405/"
              target="blank"
            >
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </p>
          <p>
            <a
              href="https://portfolio-ahmedmahmoud.netlify.app/"
              target="blank"
            >
              <i className="fab fa-twitter"></i> Portfolio
            </a>
          </p>
          <p>
            <a href="https://twitter.com/AhmedMa44395518" target="blank">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </p>
          {/* <p>
              <a href="https://www.instagram.com/codewithfaraz" target="blank">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </p> */}
        </div>
        <div className="links">
          <h4>Quick links</h4>
          <p>
            {/* <NavLink to="/home">Home</NavLink> */}
            <a href="#home">Home</a>
          </p>
          <p>
            {/* <NavLink to="/shop">Shop</NavLink> */}
            <a href="#menu">Menu</a>
          </p>
          <p>
            {/* <NavLink to="/about">About</NavLink> */}
            <a href="#contact-details">contact</a>
          </p>
        </div>
        <div className="details">
          <h4 className="address">Address</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur <br />
            adipisicing elit. Cupiditate, qui!
          </p>
          <h4 className="mobile">Mobile</h4>
          <p>
            <a href="https://wa.me/+2001033993202" target="blank">
              +20 01033993202
            </a>
          </p>
          <h4 className="mail">Email</h4>
          <p>
            <a
              href="https://portfolio-ahmedmahmoud.netlify.app/"
              target="blank"
            >
              ahmedmahmoud921@gmail.com
            </a>
          </p>
        </div>
      </div>
      <footer>
        <div style={{ padding: "10px 5px" }}>
          © 2023 Designed by{" "}
          <a
            style={{ textDecoration: "none", color: "#fff" }}
            href="https://github.com/AhmedMahmoud962"
            target="blank"
          >
            Ahmed Mahmoud
          </a>{" "}
          .
        </div>
      </footer>
    </div>
  );
};

export default Footer;
