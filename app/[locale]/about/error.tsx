"use client"; // <--- Ҳатман ҳамин сатрро дар аввал илова кунед

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <h2 className="text-2xl font-bold text-red-600">Чизе хато рафт!</h2>
      <p className="text-gray-500">{error.message}</p>
      <button  onClick={() => reset()}
        className="px-6 py-2 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all"  >
        Пайвасти дубора
      </button>
    </div>
  );
}