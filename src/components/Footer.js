/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import "./media_queries.css";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__top">
          <div className="footer__social">
            <a href="#" className="social__logo">
              HypePower
              {/* <img src="images/logo/everve_logo_black.png" alt="logo"/> */}
            </a>
            <p className="social__para">
              Social Media Exchange on steroids by Everve: Get free followers,
              likes, plays, views, upvotes, comments and much more on your
              favorite social media network
            </p>
            <nav className="social__list">
              <li>
                <a href="#">
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-vk"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-telegram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-youtube"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-medium"></i>
                </a>
              </li>
            </nav>
          </div>

          <div className="footer__about">
            <h2>About Us</h2>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">How it Works</a>
              </li>
              <li>
                <a href="#">Extention</a>
              </li>
              <li>
                <a href="#">News</a>
              </li>
            </ul>
          </div>

          <div className="footer__legal">
            <h2>Legal</h2>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Term of Service</a>
              </li>
              <li>
                <a href="#">Refunds Policy</a>
              </li>
              <li>
                <a href="#">GDPR</a>
              </li>
            </ul>
          </div>

          <div className="footer__contacts">
            <h2>Contacts</h2>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-envelope"></i>supporteverve.net
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-map-marker-alt"></i>1715 Business
                  District, g.k. Mladost 4, Sofia, Bulgaria
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bot">
          <p className="footer__copyright">
            Copyright &copy; 2019-2020 <a href="#">Everve</a>. All Right
            Reserved.
          </p>
        </div>
      </footer>
      <button className="top">
        <i className="fas fa-arrow-up"></i>
      </button>
    </>
  );
}

export default Footer;
