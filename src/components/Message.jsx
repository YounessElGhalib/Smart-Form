import Avatar from "./ui/Avatar.jsx";
import TextMessage from "./ui/TextMessage.jsx";

export default function Message({ isRight = true, message }) {
  return (
    <div className={`flex gap-4 py-2 items-end justify-start ${isRight ? "" : "flex-row-reverse"}`}>
      <Avatar isRight={isRight} />
      <TextMessage isRight={isRight} message={message} />
    </div>
  );
}
