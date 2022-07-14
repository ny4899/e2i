import { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import logo from "./../Assets/Images/logo-trans-510x165-1.png";

function Navbar() {
  const [humShowHide, setHumShowHide] = useState(false);
  const navHideShow = function () {
    humShowHide ? setHumShowHide(false) : setHumShowHide(true);
  };
  return (
    <>
      <div className="nav__wrapper">
        <div className="container-xxl px-3 px-sm-4">
          <div className="topnav__container">
            <div>
              <i className="bi bi-telephone-fill"></i>
              <a href="tel:+91 9871888359">+91 9871888359</a>
            </div>
            <div className="ms-3">
              <i className="bi bi-envelope-fill"></i>
              <a href="mailto:info@e2i.co.in"> info@e2i.co.in </a>
            </div>
          </div>
          <div className="mainnav__container">
            <div className="logo__container ">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "" : ""
                }
                onClick={navHideShow}
                to="/"
              >
                <img src={logo} alt="" />
              </NavLink>
            </div>
            <div
              className={`links__container  ${
                humShowHide ? "links__container__show" : ""
              }`}
            >
              <ul>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active main__link" : "main__link"
                    }
                    onClick={navHideShow}
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active main__link" : "main__link"
                    }
                    onClick={navHideShow}
                    to="/aboutus"
                  >
                    About Us
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active main__link" : "main__link"
                    }
                    onClick={navHideShow}
                    to="/services"
                  >
                    Services
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active main__link" : "main__link"
                    }
                    onClick={navHideShow}
                    to="/products"
                  >
                    Products
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active main__link" : "main__link"
                    }
                    onClick={navHideShow}
                    to="/industry"
                  >
                    Industry
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      isActive ? "active main__link" : "main__link"
                    }
                    onClick={navHideShow}
                    to="/blogs"
                  >
                    Blogs
                  </NavLink>
                </li>
                <li>
                  <Link
                    className="main__contact__btn"
                    to="/contactus"
                    onClick={navHideShow}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hum__icon__container">
              <i
                id="humIcons"
                onClick={navHideShow}
                className="bi bi-list fs-2 fw-bolder"
              ></i>
            </div>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
