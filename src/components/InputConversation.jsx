import { PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default function InputConversation({ sendMessage }) {
  const [value, setValue] = useState("");

  function sendMsg() {
    sendMessage(value);
    setValue("");
  }

  function enterKey(e) {
    if (e.key === "Enter") sendMsg();
  }

  return (
    <div className="w-full rounded-b-xl flex items-center justify-between border-t-2 border-gray-100">
      <input
        type="text"
        className="bg-transparent h-10 w-10/12 outline-none pl-6 text-gray-600 text-lg"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={enterKey}
      />
      <div
        onClick={sendMsg}
        className="w-2/12 h-10 flex items-center justify-center bg-green-50 hover:bg-green-100 cursor-pointer rounded-br-lg"
      >
        <PaperAirplaneIcon className="size-7 text-green-700" />
      </div>
    </div>
  );
}
