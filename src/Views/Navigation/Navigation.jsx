import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";
function Navigation() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand js-scroll-trigger" to="#page-top">
        <span className="d-block d-lg-none">Miguel Gorriti</span>
        <span className="d-none d-lg-block"></span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarResponsive"
        aria-controls="navbarResponsive"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="navbarResponsive" className="collapse navbar-collapse">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/experience">
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/education">
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/skills">
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/interests">
              Interests
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link js-scroll-trigger" to="/certifications">
              Certifications
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
