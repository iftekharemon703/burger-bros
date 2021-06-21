import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg btn-dark">
        <div className="container">
          <img className="img-fluid logo" src={logo} alt="" />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon btn-brand"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <Link
                className="nav-link text-white ms-5 active"
                aria-current="page"
                to="/"
              >
                HOME
              </Link>
              <Link className="nav-link text-white ms-5" to="/menu">
                MENU
              </Link>
              <Link className="nav-link text-white ms-5" to="/shop">
                SHOP
              </Link>
              <Link className="nav-link text-white ms-5" to="/news">
                NEWS
              </Link>
              <Link className="nav-link text-white ms-5" to="/contact">
                CONTACT
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
