import React from "react";
import Logo from "../assets/images/logo-img.svg";
import userIcon from "../assets/images/user-icon.png";
import "../assets/css/toggle.css";
import Toggle from "./Toggle";


function Nav() {


  return (
    <nav aria-label="main-navigation">
      <div className="container">
        <div className="navbar flex justify-space-between align-items-center mb-1">
          <div className="navbar-right flex align-items-center">
            <img className="logo-light mr-2" src={Logo} alt="Silicon logo" />
            <a href="#" className="navbar-links mr-1 weigt-semi-bold">Features</a>
            <a href="#" className="navbar-links weigt-semi-bold">Contact</a>
          </div>
          <div className="navbar-left flex">
            <Toggle />
              <button className="btn-primary ">
                <img src={userIcon} alt="" />
                <span className="pl-0 weigt-semi-bold">Sign in / up</span>
              </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
