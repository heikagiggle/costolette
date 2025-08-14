import { images } from "../../constants";
import "./AboutUs.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_knife flex__center">
          <img src={images.pancakemaple} alt="about_us" />
        </div>

        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">Our Story</h1>
          <img
            src={images.forkandknife}
            alt="about_forkknife"
            className="forkandknife__img"
          />
          <p className="p__opensans">
            Our story began with a simple idea: to create a space where good
            food and good company come together naturally. What started as a
            small dream turned into a welcoming spot filled with laughter,
            familiar faces, and meals made from the heart. We believe in slow
            mornings, shared plates, and the magic that happens around the
            table. This is more than just a place to eat, it’s a place to feel at
            home.
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
