import React from "react";
import LogoLight from "../../assets/images/logo-img.svg";
import LogoDark from "../../assets/images/siliconlogo-dark.svg"
import userIcon from "../../assets/images/user-icon.png";
import "../../assets/css/toggle.css";
import Toggle from "./Toggle";


function Nav() {

  return (
    <nav aria-label="main-navigation">
      <div className="container">
        <div className="navbar flex justify-space-between align-items-center mb-1">
          <div className="navbar-right flex align-items-center">
            <img className="show-light logo-light mr-2" src={LogoLight} alt="Silicon logo" />
            <img className="show-dark logo-light mr-2" src={LogoDark} alt="Silicon logo" />
            <ul className="main-menu flex justify-center">
              <li>
                <a href="#" className="navbar-links mr-1 weigt-semi-bold">Features</a>
              </li>
              <li>
                <a href="#" className="navbar-links weigt-semi-bold">Contact</a>
              </li>
            </ul>
          </div>
          <div className="navbar-left flex">
            <Toggle />
              <button className="signIn btn-primary ">
                <img src={userIcon} alt="" />
                <span className="pl-0 weigt-semi-bold">Sign in / up</span>
              </button>
              <button className="btn-mobile ml-3"><i class="fa-regular fa-bars"></i></button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
