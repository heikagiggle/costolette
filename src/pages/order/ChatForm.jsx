import React, { useState } from 'react';
import './ChatForm.css'

const ChatForm = () => {
  const [message, setMessage] = useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault();

    window.location.href = `mailto:okaforemmanuellaoluchi@gmail.com?subject=Chat&body=${message}`;
  };

  return (
    <div>
      <h3>Send a message </h3>
      <form onSubmit={handleSubmit}>
      <p>Hello there 😊, <br /> How may I help you?</p>
        <textarea
          rows="8"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button className='custom__button' type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatForm;