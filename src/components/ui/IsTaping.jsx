import { debounce } from "lodash";
import { useState, useEffect } from "react";

export default function IsTaping({ taping = false, message = "" }) {
  const [points, setPoints] = useState("");

  useEffect(() => {
    taping &&
      debounce(() => {
        setPoints(points.length < 3 ? points + "." : ".");
      }, 500)();
  }, [points]);

  return (
    <div className="flex gap-4 items-end justify-start">
      <div className="animate-pulse text-2xl my-3 px-4 w-14 text-gl text-gray-600 bg-green-100 flex items-center rounded-lg rounded-bl-none">
        {message}
        {points}
      </div>
    </div>
  );
}
