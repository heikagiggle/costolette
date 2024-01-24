import React from "react";
import { Link } from 'react-router-dom';
import { SubHeading } from "../../components";
import { images } from "../../constants";

const FindUs = () => (
  
 
  <div className="app__wrapper section__padding" id="contact">
  <div className="app__wrapper_info">
    <SubHeading title="Contact" />
    <h1 className="headtext__cormorant" style={{ marginBottom: "3rem" }}>
      Find Us
    </h1>
    <div className="app__wrapper-content">
      <p className="p__opensans">
        1a Kola Adeyina Close, off Jerry Iriabe street, Lekki Phase one
      </p>
      <p
        className="p__cormorant"
        style={{ color: "#ff6347", margin: "2rem 0" }}
      >
        Opening Hours
      </p>
      <p className="p__opensans">Mon - Fri: 10:00 am - 02:00 am</p>
      <p className="p__opensans">Sat - Sun: 10:00 am - 03:00 am</p>
    </div>
    <button
      type="button"
      className="custom__button"
      style={{ marginTop: "2rem" }}
    >
      <Link to="https://www.google.com/maps/">Visit Us</Link>
    </button>
  </div>

  <div className="app__wrapper_img">
    <img src={images.aboutimage} alt="findus_img" />
  </div>
</div>
 
);

export default FindUs;
