import React from "react";
import { images } from "../../constants";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about" >

      <div className="app__aboutus-content flex__center">

        <div className="app__aboutus-content_knife flex__center">
          <img src={images.pancakemaple} alt="about_us" />
        </div>

        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">Our Story</h1>
          <img src={images.forkandknife} alt="about_forkknife" className="forkandknife__img" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.Aenean sit amet nulla eget mauris cursus tempor. Nunc metus sem, iaculis quis tortor in, aliquet cursus libero. Phasellus id sem tristique magna laoreet faucibus. Mauris vitae massa suscipit, vulputate lacus suscipit, porta tortor. Cras iaculis sodales magna, in porta tortor tristique a. Morbi eget velit vel urna volutpat fermentum. 
          </p>
          <button type="button" className="custom__button">
          <Link to="/aboutpage">Know more</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
