import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./assets/logo.jpg";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";
import "./styles/headerElement.css";

const HeadeElement = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="image-wrapper">
          <NavLink to="/">
            {<img className="logo-img" src={Logo} alt="Little Lemon Logo" />}
          </NavLink>
        </div>
        <Navigation />
        <MobileNav />
      </div>
    </div>
  );
};

export default HeadeElement;
