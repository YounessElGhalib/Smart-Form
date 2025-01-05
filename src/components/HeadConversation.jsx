import Avatar from "./ui/Avatar.jsx";

export default function HeadConversation() {
  return (
    <div className="w-full h-16 flex items-center gap-4 px-4 rounded-t-xl border-b-2 border-gray-100">
      <Avatar isSmall={false} />
      <p>Smart Form</p>
    </div>
  );
}
