'use client';

import Image from "next/image";
import { useState } from "react";


export default function Home() {

  const [player1, setPlayer1] = useState("Player 1"); 
  const [player2, setPlayer2] = useState("Player 2"); 

   return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-3xl font-bold">Choose 2 players</h1>
        <div className="flex flex-col items-center gap-4">
          <div className="grid grid-cols-2 gap-24">
            <div className="bg-gray-900 p-5 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
              <Image className="rounded-xl shadow-md mb-4" src="/blank_profile.jpg" alt="Player 1" width={250} height={150} />
              <p className="text-center">{player1}</p>
            </div>
            <div className="bg-gray-900 p-5 rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105">
              <Image className="rounded-xl shadow-md mb-4" src="/blank_profile.jpg" alt="Player 1" width={250} height={150} />
              <p className="text-center">{player2}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
              Calculate
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
