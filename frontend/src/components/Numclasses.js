import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NumClasses() {
  const navigate = useNavigate();
  const [numClasses, setNumClasses] = useState(0);
  const [classNames, setClassNames] = useState([]);

  const handleGenerateClasses = () => {
    setClassNames(Array.from({ length: numClasses }, (_, i) => `Class ${i + 1}`));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2B38B1] text-white p-4 font-inter">
      <h1 className="text-2xl font-bold mb-4">Enter Number of Classes</h1>
      <input
        type="number"
        placeholder="Number of Classes"
        onChange={(e) => setNumClasses(Number(e.target.value))}
        className="border p-2 text-black rounded-md"
      />
      <button onClick={handleGenerateClasses} className="mt-2 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Generate Classes
      </button>
      {classNames.length > 0 && (
        <div className="mt-4">
          {classNames.map((name, index) => (
            <input
              key={index}
              type="text"
              defaultValue={name}
              onChange={(e) => {
                const newNames = [...classNames];
                newNames[index] = e.target.value;
                setClassNames(newNames);
              }}
              className="block p-2 text-black rounded-md mt-2"
            />
          ))}
          <button onClick={() => navigate('/classify', { state: { numClasses, classNames } })} className="mt-4 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
            Start Classification
          </button>
        </div>
      )}
    </div>
  );
}

export default NumClasses;