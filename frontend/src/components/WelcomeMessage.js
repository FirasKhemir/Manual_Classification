import React from "react";

function WelcomeMessage() {
  return (
    <div className="absolute top-[30%] left-1/2 transform -translate-x-1/2 text-left w-3/4 max-w-lg">
      <p className="text-2xl sm:text-4xl font-light">Welcome to the</p>
      <p className="text-5xl sm:text-6xl font-bold">Manual Classification App</p>
    </div>
  );
}

export default WelcomeMessage;
