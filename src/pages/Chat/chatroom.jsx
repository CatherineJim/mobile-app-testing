import React, { useState } from "react";
import { Navbar } from "../../navbar/navbar";
import { Sidebar } from "../dashboard/Sidebar/sidebar";

function ChatRoom() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, { text: newMessage, sender: "user" }]);
      setNewMessage("");
    }
  };

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="chat-room">
        <div className="message-list">
          {messages.map((message, index) => (
            <div key={index} className={`message ${message.sender}`}>
              {message.text}
            </div>
          ))}
        </div>
        <div className="message-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <div className="message-btn">
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatRoom;
