import React from 'react'
import dummyJson from "../dummy.json";

export default function CryptoItem() {

  // TODO:
  // https://animate.style/
  // Neon color

  return (
    <div>
        <p className="text-3xl font-bold mt-10">Hunting for</p>
        <p className="text-7xl font-bold text-blue-900 mb-3">{dummyJson[0].name}</p>
        <p className="text-1xl font-bold">Day {dummyJson[0].delta.hour}</p>
        <p className="text-1xl font-bold mb-8">♦</p>
      
    </div>
  )
}