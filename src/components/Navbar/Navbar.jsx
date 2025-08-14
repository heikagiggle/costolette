import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>Costolette</h1>
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <Link to="/"> Home</Link>
        </li>
        <li className="p__opensans">
          <Link to="/aboutpage"> About</Link>
        </li>
        <li className="p__opensans">
          <Link to="/menupage"> Menu</Link>
        </li>
        <li className="p__opensans">
          <a href="#reviews"> Reviews</a>
        </li>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      {/* <div className="app__navbar-login">
        <Link to="/registration">Log In / Registration</Link>

        <div />
        <Link to="/order" className="p__opensans">
          Order
        </Link>
      </div> */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#FF6347"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutpage" onClick={() => setToggleMenu(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/menupage" onClick={() => setToggleMenu(false)}>
                  Menu
                </Link>
              </li>
              <li>
                <a href="/#reviews" onClick={() => setToggleMenu(false)}>
                  Reviews
                </a>
              </li>
              <li>
                <a href="/#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>
              {/* <li>
                <Link to="/registration" onClick={() => setToggleMenu(false)}>
                  Log in / Registration
                </Link>
              </li> */}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;