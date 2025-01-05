export default function Avatar({ isRight = true, isSmall = true }) {
  return (
    <div
      className={`flex items-center justify-center rounded-full overflow-hidden ${
        isSmall ? "w-9 h-9" : "w-10 h-10"
      }`}
    >
      <img
        src={isRight ? "/ai-avatar.png" : "/person-avatar.png"}
        alt="avatar"
      />
    </div>
  );
}
