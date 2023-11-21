import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");
  const getQuote = () => {
    axios
      .get("")
      .then((res) => {
        console.log(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <button onClick={getQuote}>Get Quote</button>
      quote ? <p>{quote}</p>
    </div>
  );
}

export default App;
