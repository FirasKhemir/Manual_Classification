import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function CircleArrowButton({ direction = "right", onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-lg hover:bg-gray-200 transition"
    >
      {direction === "right" ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
    </button>
  );
}

export default CircleArrowButton;
