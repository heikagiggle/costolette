import React from "react";
import { images } from "../../constants";
import { Navbar } from "../../components";
import { SubHeading } from "../../components";
import { ABoutOne } from "../../components";
import "./AboutPage.css";

const blogCard = [
  {
    title: "A Breakfast Tale of Delight",
    subtitle:
      "Picture a lazy Sunday morning or a leisurely weekend brunch with friends and family. The warm, fluffy pancakes arrive at your table, and your senses are immediately awakened by the irresistible aroma of fresh batter sizzling on a griddle. This was the perfect form of bonding for us",
  },
  {
    title: "Coffee and Pancakes: A Classic Romance",
    subtitle:
      " The rich, earthy notes of coffee, whether black or adorned with cream and sugar, harmonize beautifully with the sweetness of maple syrup or a dusting of powdered sugar on your pancakes. That first sip of warm coffee followed by a bite of pancake is a symphony of contrasting flavors that blend to perfection. We want to share with you this deliciousness",
  },
  {
    title: "Tea for Tranquility",
    subtitle:
      "If you prefer a more tranquil breakfast experience, a cup of tea can be the ideal partner for your pancakes. The delicate, nuanced flavors of tea, whether it can gently accentuate the subtle sweetness of your pancakes without overwhelming your palate. The result? A serene and balanced breakfast affair. Do you not hunger for a satisfying breakfast or dinner?",
  },
];

const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="app__aboutus app__bg section__padding" id="about">
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
              Once upon a snack, we had a wild idea: what if food was fun again?
              Not fussy, not fancy—just downright delicious and a little bit
              magical. So we rolled up our sleeves, got messy in the kitchen,
              and created a place where flavor rules, forks dance, and every
              bite tells a tale. We’re not here to impress just to serve up good
              vibes and great eats. Come curious, leave full (and maybe a little
              obsessed). It all started with a love for bold flavors, happy
              bellies, and the kind of meals that make you do a little dance in
              your chair. One recipe led to another, friends told friends, and
              before we knew it, this place turned into something special. Come
              hungry, leave smiling.
            </p>
          </div>
        </div>

        <div className="app__aboutPage">
          <div className="app__specialMenu-title">
            <SubHeading title="Our Beautiful Beginning" />
            <h1 className="headtext__cormorant">A Tiny Story</h1>
          </div>
          <div className="flex__center">
            <div className="app__aboutPage-menu_img">
              <img src={images.womanpancake} alt="woman" />
            </div>
            <div className="app__aboutPage-menu_img">
              <img src={images.friendspancakes} alt="friends" />
            </div>
          </div>

          <div className="app__aboutPage-content section__padding">
            {blogCard.map((item, index) => (
              <ABoutOne
                title={item.title}
                subtitle={item.subtitle}
                key={item.title + index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
