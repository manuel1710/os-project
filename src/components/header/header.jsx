import React from "react";
import { Link } from "react-router-dom";
// import logo1 from "../../images/studios-logo.png";
import logo from "../../logo.svg"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" height="70" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="navbar-nav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item act">
                
                <Link
                  className="nav-link text-white text-uppercase ms-1"
                  aria-current="page"
                  to="/"
                >
                  <i class="fas fa-home"></i>&nbsp;Home
                </Link>
              </li>

              <li className="nav-item active">
                <Link
                  className="nav-link text-white text-uppercase ms-1"
                  aria-current="sjf"
                  to="/about"
                >
                  Shortest Job First
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
