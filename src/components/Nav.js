/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <>
      <div className="nav__logo">
        {/* <img src={process.env.PUBLIC_URL + "./images/logo/everve_logo_white.png"} alt="logo" className="logo__img"/> */}
        <h1>HypePower</h1>
      </div>

      <ul className="nav__list">
        <li className="nav__list--item">
          <a href="#" className="nav__list--link">
            <i className="fa fa-home"></i> Home
          </a>
        </li>
        <li className="nav__list--item">
          <a href="#" className="nav__list--link">
            Services
          </a>
        </li>
        <li className="nav__list--item">
          <a href="#" className="nav__list--link">
            How it Works
          </a>
        </li>
        <li className="nav__list--item">
          <a href="#" className="nav__list--link">
            Extention
          </a>
        </li>
        <li className="nav__list--item">
          <a href="#" className="nav__list--link">
            News
          </a>
        </li>
      </ul>

      <a href="#" className="nav__signin">
        <img
          src={process.env.PUBLIC_URL + "./images/g-normal.png"}
          alt="google icon"
        />
        <span>Sign in with Google</span>
      </a>

      <div className="side__nav--icon">
        <i className="fa fa-align-right"></i>
      </div>
    </>
  );
}

export default Nav;
