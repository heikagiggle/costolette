import React from "react";
// import { WhatsAppWidget } from "react-whatsapp-widget";
import { Navbar } from "../../components";
import ChatForm from "./ChatForm";
import "./ChatBox.css";

const ChatBox = () => {
  return (
    <>
      <Navbar />
      <div className="chat-box">
        <div className="chatbox-header">
          <p>
            To place an order, kindly indicate the name of the products you want
            to get.
          </p>
          <p>Thank You!</p>
        </div>
        <div className="chat-container">
          <div className="chat-form">
            <ChatForm />
          </div>
          {/* <div className="whatsapp-widget">
            <h3>Send message via WhatsApp</h3>
            <WhatsAppWidget phoneNumber="+2349020307231" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ChatBox;
