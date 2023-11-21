import React, { useState } from "react";
import "./textbox.css";

function Textbox() {
  const [text, setText] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setText(inputValue);
    // Check if the input is empty and set the isEmpty state accordingly
    setIsEmpty(inputValue === "");
  };

  const handleClearText = () => {
    setText("");
    setIsEmpty(true);
  };

  return (
    <div className="textbox-container">
      <h2>Text Input</h2>
      <label htmlFor="textInput">Enter Text:</label>
      <input
        type="text"
        id="textInput"
        value={text}
        onChange={handleInputChange}
        className={isEmpty ? "empty" : ""}
      />
      <p className="message">
        {isEmpty ? "Please enter text" : `You entered: ${text}`}
      </p>
      <button onClick={handleClearText} className="clear-button">
        Clear Text
      </button>
    </div>
  );
}

export default Textbox;
