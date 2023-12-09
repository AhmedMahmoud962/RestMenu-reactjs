import React from "react";
import "./ErrorPage.css";
// import Navbar from "../Header/Navbar";
// import App from "../../App";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>The page you are looking for cannot be found</h3>

      <div class="container">
        <NavLink to="/" className="navlink">
          Back To HomePage
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
