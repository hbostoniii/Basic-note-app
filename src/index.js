import React, { useState } from "react";
import ReactDOM from "react-dom";

const DisplayMessages = (props) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  return (
    <div
      style={{
        backgroundColor: "lavender",
        display: "grid",
        placeItems: "center",
      }}
    >
      <p style={{ fontSize: "3rem" }}>
        Type in a new <strong>Message</strong>:
      </p>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button
        onClick={() => {
          setMessages([...messages, input]);
          setInput("");
        }}
      >
        Submit
      </button>
      <ul>
        {messages.map((message, i) => {
          return <li key={i}>{message}</li>;
        })}
      </ul>
    </div>
  );
};

ReactDOM.render(<DisplayMessages />, document.getElementById("root"));
