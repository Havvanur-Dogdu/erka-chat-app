import React, { useEffect } from "react";
import { useChat } from "../context/ChatContext";
import { init, subscribeToMessages } from "../SocketApi.js";
import ChatList from "./ChatList";
import Form from "./Form";

function Container() {
  const { setChat } = useChat();

  useEffect(() => {
    init();

    subscribeToMessages((message) => {
      console.log("callback function");
      setChat((prev) => [...prev, { text: message }]);
    });
  }, [setChat]);

  return (
    <>
      <ChatList />
      <Form />
    </>
  );
}

export default Container;