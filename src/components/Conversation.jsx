import HeadConversation from "./HeadConversation.jsx";
import ContentConversation from "./ContentConversation.jsx";
import InputConversation from "./InputConversation.jsx";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { initFakeForm } from "../stores/createAccountSlice";

export default function Conversation() {
  const dispatch = useDispatch();
  const [inputMsg, setInputMsg] = useState("");

  useEffect(() => {
    dispatch(initFakeForm());
  }, []);

  function handleMessage(value) {
    setInputMsg(value);
  }

  return (
    <div className="w-96 bg-white border-2 border-gray-200 rounded-xl shadow-xl">
      <HeadConversation />
      <ContentConversation sendInputMsg={inputMsg} />
      <InputConversation sendMessage={handleMessage} />
    </div>
  );
}
