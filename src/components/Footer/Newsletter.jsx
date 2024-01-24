import React, { useState} from 'react';
import SubHeading from '../Subheading/Subheading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting the traditional way

    // Here, you can perform an API call to subscribe the user with the entered email address.
    // For this example, we'll simply set 'subscribed' to true.
    setSubscribed(true);
   
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss the latest updates!</p>
      </div>
      {subscribed ? (
        <div className="subscription-success">
          <p>Thank you for subscribing!</p>
          {/* You can add a button or message here */}
        </div>
      ) : (
        <form className="app__newsletter-input flex__center" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" className="custom__button">
            Subscribe
          </button>
        </form>
      )}
        
    </div>
  );
};

export default Newsletter;
