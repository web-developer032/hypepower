/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import "./SideNav.css";

function SideNav() {
    return (
        <>
            <div className="close__btn"><button><i className="fa fa-times"></i></button></div>
            <div className="signin">
                <a href="#" className="nav__signin">
                    <img src="images/g-normal.png" alt="google icon"/>
                    <span>Sign in with Google</span>
                </a>
            </div>
            <ul className="side__nav__list">
                <li className="nav__list--item">
                    <a href="#" className="nav__list--link"><i className="fa fa-home"></i> Home</a>
                </li>
                <li className="nav__list--item">
                    <a href="#" className="nav__list--link"><i className="fa fa-list-ul"></i> Services</a>
                </li>
                <li className="nav__list--item">
                    <a href="#" className="nav__list--link"><i className="fa fa-info-circle"></i> How it Works</a>
                </li>
                <li className="nav__list--item">
                    <a href="#" className="nav__list--link"><i className="fa fa-chrome"></i> Extention</a>
                </li>
            </ul>

            <h5>Follow Us</h5>
            <nav className="social__list">
                <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                <li><a href="#"><i className="fa fa-vk"></i></a></li>
                <li><a href="#"><i className="fa fa-telegram"></i></a></li>
                <li><a href="#"><i className="fa fa-youtube"></i></a></li>
                <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                <li><a href="#"><i className="fa fa-medium"></i></a></li>
            </nav>
        </>
    );
}

export default SideNav
