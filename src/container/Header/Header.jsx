import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Life is short, eat the cake" />
        <h1 className="app__header-h1">...Love in every bite</h1>
        <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Take a glimpse at what pancake you would like and the toppings you want to go with it!
       We bring you the yummiest and fluffiest selection of pancakey goodness to satisfy your cravings.{" "}
        </p>
        <button type="button" className="custom__button">
        <Link to="/menupage">Explore Menu</Link>
        </button>
      </div>

      <div className="app__wrapper_img">
        <img src={images.pancakeblue} alt="header_img" />
      </div>
    </div>
  );
};

export default Header;
