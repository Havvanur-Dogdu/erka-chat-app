import React, { useState } from "react";
import { useChat } from "../context/ChatContext";
import { sendMessage } from "../SocketApi.js";

function Form() {
  const { setChat } = useChat();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      return;
    }

    setChat((prev) => [...prev, { text, isFromMe: true }]);
    sendMessage(text);
    setText("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          className="message"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Form;
