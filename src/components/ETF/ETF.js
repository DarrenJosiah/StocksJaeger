import React from "react";
import Particle from "../Home/Particle";

function ETF() {
  return (
    <div>
      <p className="text-3xl font-bold mt-10">Hunting for</p>
      <p className="text-7xl font-bold text-blue-900 mb-3">ETF</p>
      <p className="text-1xl font-bold">♦ ♦</p>
      <p className="text-1xl font-bold mb-8">♦</p>
      <div
        className="p-4 m-8 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
        role="alert"
      >
        <p className="font-bold mb-8">Website is under construction.</p>
        <p className="mb-2">
          Meanwhile, let me show you a photo of a Polite Cat
        </p>
        <img
          className="px-8 mb-8"
          src="https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg"
        ></img>
      </div>
      <Particle />
    </div>
  );
}

export default ETF;
