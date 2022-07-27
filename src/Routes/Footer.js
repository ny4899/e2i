import React from "react";
import { Outlet, Link, NavLink } from "react-router-dom";

import logo from "../Assets/Images/logo-trans-510x165-1.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-xxl px-3 px-sm-4 pt-5">
          <div className="row">
            <div className="col-12 col-sm-5 mb-5 mb-sm-0">
              <div>
                <Link to="/">
                  <img src={logo} width="180px" alt="" />
                </Link>
                <p className="footer__txt__color mt-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veritatis aliquam officiis id labore architecto ducimus ullam
                  error dicta laboriosam, blanditiis cumque earum molestiae qui
                  nam dolorum laudantium eos illo nobis!
                </p>

                <div className="d-flex mt-4">
                  <a className="footer__social__link" href="#">
                    <i className="bi bi-facebook footer__txt__color"></i>
                  </a>
                  <a className="footer__social__link" href="#">
                    <i className="bi bi-linkedin footer__txt__color"></i>
                  </a>
                  <a className="footer__social__link" href="#">
                    <i className="bi bi-twitter footer__txt__color"></i>
                  </a>
                  <a className="footer__social__link" href="#">
                    <i className="bi bi-instagram footer__txt__color"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-6 col-sm-3 offset-sm-1">
              <div className="d-flex flex-column">
                <div className="d-flex align-itmes-center">
                  <h1 className="footer__links__heading  leftAlign__bottomHeading__bar fs-4">
                    Our Products
                  </h1>
                </div>
                <a href="#" className="footer__links">
                  Water Analyzer
                </a>
                <a href="#" className="footer__links">
                  Gas Analyzer
                </a>
                <a href="#" className="footer__links">
                  Water Flowmeter
                </a>
                <a href="#" className="footer__links">
                  Dust Analyzer
                </a>
                <a href="#" className="footer__links">
                  BTU Meter
                </a>
                <a href="#" className="footer__links">
                  Conductivity Controller
                </a>
              </div>
            </div>
            <div className="col-6 col-sm-3">
              <div className="d-flex flex-column">
                <div className="d-flex align-itmes-center">
                  <h1 className="footer__links__heading  leftAlign__bottomHeading__bar fs-4">
                    Quick Links
                  </h1>
                </div>
                <NavLink
                  to="/aboutus"
                  className={({ isActive }) =>
                    isActive
                      ? "footer__links footerlink__active"
                      : "footer__links"
                  }
                >
                  About Us
                </NavLink>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    isActive
                      ? "footer__links footerlink__active"
                      : "footer__links"
                  }
                >
                  Services
                </NavLink>
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    isActive
                      ? "footer__links footerlink__active"
                      : "footer__links"
                  }
                >
                  Products
                </NavLink>
                <NavLink
                  to="/industry"
                  className={({ isActive }) =>
                    isActive
                      ? "footer__links footerlink__active"
                      : "footer__links"
                  }
                >
                  Industry
                </NavLink>
                <NavLink
                  to="/blogs"
                  className={({ isActive }) =>
                    isActive
                      ? "footer__links footerlink__active"
                      : "footer__links"
                  }
                >
                  Blogs
                </NavLink>
                <NavLink
                  to="/contactus"
                  className={({ isActive }) =>
                    isActive
                      ? "footer__links footerlink__active"
                      : "footer__links"
                  }
                >
                  Contact us
                </NavLink>
              </div>
            </div>
            <div className="col-12 footer__bottom__line__border mt-4">
              <p className="footer__txt__color text-center py-4">
                {
                  "Copyright © 2021 Envirozone Equipments & Instruments All Rights Reserved."
                }
              </p>
            </div>
          </div>
        </div>
      </footer>
      <Outlet />
    </>
  );
};

export default Footer;
