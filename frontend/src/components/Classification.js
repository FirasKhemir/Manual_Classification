
import React, { useState } from "react";
import axios from "axios";


function Classification({ location }) {
  const [files, setFiles] = useState(location.state?.files || []);
  const [numClasses, setNumClasses] = useState(location.state?.numClasses || 0);
  const [classNames, setClassNames] = useState(location.state?.classNames || []);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClassify = async (className) => {
    const file = files[currentIndex];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("class", className);

    try {
      await axios.post("http://127.0.0.1:5000/classify", formData);
      console.log(`Image ${file.name} assigned to ${className}`);
    } catch (error) {
      console.error("Error uploading classification", error);
    }

    if (currentIndex < files.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      alert("Classification completed!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2B38B1] text-white p-4 font-inter">
      <h1 className="text-2xl font-bold mb-4">Classify Images</h1>
      {currentIndex < files.length && (
        <>
          <h2 className="text-xl font-semibold">Classify Image {currentIndex + 1} / {files.length}</h2>
          <img
            src={URL.createObjectURL(files[currentIndex])}
            alt="Preview"
            className="max-w-xs mx-auto my-4 border-4 border-white rounded-lg"
          />
          <div className="mt-4 flex flex-wrap justify-center gap-4">
            {classNames.map((className, index) => (
              <button
                key={index}
                onClick={() => handleClassify(className)}
                className="p-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600 transition"
              >
                {className}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}


export default Classification;