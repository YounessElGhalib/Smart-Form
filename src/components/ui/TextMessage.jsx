export default function TextMessage({ isRight = true, message = "" }) {
  return (
    <div
      className={`px-2 py-1 rounded-lg max-w-60  ${
        isRight
          ? "rounded-bl-none  bg-green-900 text-white"
          : "rounded-br-none bg-gray-200 text-gray-600"
      }`}
    >
      {message}
    </div>
  );
}
