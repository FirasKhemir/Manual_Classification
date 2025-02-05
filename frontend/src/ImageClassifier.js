import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Home() {
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFiles(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Image Classification App</h1>
      <div
        {...getRootProps()}
        className="border-dashed border-4 border-white p-8 text-center cursor-pointer w-3/4 max-w-lg bg-blue-700 rounded-lg"
      >
        <input {...getInputProps()} />
        <p className="text-lg">Drag & drop a folder or select files</p>
      </div>
      {files.length > 0 && (
        <button onClick={() => navigate('/num-classes', { state: { files } })} className="mt-4 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Next
        </button>
      )}
    </div>
  );
}

function NumClasses() {
  const navigate = useNavigate();
  const [numClasses, setNumClasses] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4">Enter Number of Classes</h1>
      <input
        type="number"
        placeholder="Number of Classes"
        onChange={(e) => setNumClasses(Number(e.target.value))}
        className="border p-2 text-black rounded-md"
      />
      <button onClick={() => navigate('/classify', { state: { numClasses } })} className="mt-4 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
        Start Classification
      </button>
    </div>
  );
}



function Classification() {
  const location = useLocation();
  const [files, setFiles] = useState(location.state?.files || []);
  const [numClasses, setNumClasses] = useState(location.state?.numClasses || 0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [classes, setClasses] = useState(Array.from({ length: numClasses }, (_, i) => `Class ${i + 1}`));

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white p-4">
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
            {classes.map((className) => (
              <button
                key={className}
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/num-classes" element={<NumClasses />} />
        <Route path="/classify" element={<Classification />} />
      </Routes>
    </Router>
  );
}

export default App;
