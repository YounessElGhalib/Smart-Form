import InputConversation from "../components/Conversation.jsx";

export default function MyLayout() {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-20 flex items-center justify-center"></div>
      <div className="flex items-center">
        <div className="w-1/2 flex items-center justify-center"></div>
        <div className="w-1/2 flex items-center justify-center">
          <InputConversation />
        </div>
      </div>
    </div>
  );
}
