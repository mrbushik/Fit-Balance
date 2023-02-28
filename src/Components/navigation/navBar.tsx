import React from "react";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
  return (
    <div>
      <p className="greeting">Welcome to our store</p>
      <div className="separator"></div>
      <nav className="nav-bar">
        <div className="container nav__container">
          <div className="logo">Fit&Balance</div>
          <Link className="nav__link" to="/">
            HOME
          </Link>
          <Link className="nav__link" to="/about">
            ABOUT US
          </Link>
          <Link className="nav__link" to="/contact-us">
            CONTACT US
          </Link>
          <Link className="nav__link" to="/products">
            PRODUCTS
          </Link>
          <Link className="nav__link" to="/FAQ">
            FAQ
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
