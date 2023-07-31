import React, { useState } from "react";
import "../../css/root.css";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";


function Navbar() {
  const [navBg, setNavBg] = useState("tranparent");

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY < 300) {
      setNavBg("transparent");
    } else if (window.scrollY >= 300 && window.scrollY < 810) {
      setNavBg("#10112e");
    } else if (window.scrollY >= 810 && window.scrollY < 1770) {
      setNavBg("#10112e");
    } else if (window.scrollY >= 1770 && window.scrollY < 2720) {
      setNavBg("#383656");
    } else if (window.scrollY >= 2720) {
      setNavBg("#25252d");
    }


  };

  const navBgStyle = {
    backgroundColor: navBg,
    transition: 'all 0.3s ease'
  }

  return (
    <header>
      <nav
        className={`navbar navbar-expand-md navigation-wrap`} style={navBgStyle}
      >
        <div className="container custom-container">
          <Link to="" className="navbar-brand h1 mb-0">
            <img
              // src={emlLogo}
              alt="brand logo"
              className="img-fluid"
            />
            {/* <!-- <span id="brand-name">EML</span> --> */}
          </Link>

          <button
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            className="navbar-toggler"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className=" fa fa-stream toggler-icon"></span>
            {/* <!-- fa and fa-stream is for font awesome icon --> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className=" navbar-nav ms-auto ">
              <li className="nav-item nav-active">
                <NavLink

                  to="/"
                  className={({ isActive }) => {
                    return 'nav-link ' + (isActive && 'active');
                  }}
                >
                  Home
                </NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => {
                  return 'nav-link  ' + (isActive && 'active');
                }}>
                  About Us
                </NavLink>
              </li> */}
              <li className="nav-item">
                <NavLink to="/speakers" className={({ isActive }) => {
                  return 'nav-link ' + (isActive && 'active');
                }}>
                  Speakers
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/gallery" className={({ isActive }) => {
                  return 'nav-link ' + (isActive && 'active');
                }}>
                  Gallery
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contactus" className={({ isActive }) => {
                  return 'nav-link ' + (isActive && 'active');
                }}>
                  Contact us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/team" className={({ isActive }) => {
                  return 'nav-link ' + (isActive && 'active');
                }}>
                  EML Team
                </NavLink>
              </li>

              {/* <li className="nav-item">
                <NavLink to="/about" className={({ isActive }) => {
                  return 'nav-link  ' + (isActive && 'active');
                }}>
                  Download Brochure
                </NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
