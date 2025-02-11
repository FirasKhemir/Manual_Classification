import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import WelcomeMessage from "./WelcomeMessage";

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
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#2B38B1] text-white p-4 font-inter">
      <WelcomeMessage />
      <div
        {...getRootProps()}
        className="border-dashed border-4 border-white p-8 text-center cursor-pointer w-3/4 max-w-lg bg-blue-700 rounded-lg"
      >
        <input {...getInputProps()} />
        <p className="text-lg">Drag & drop a folder or select files</p>
      </div>
      {files.length > 0 && <p className="mt-2">Images Imported: {files.length}</p>}
      {files.length > 0 && (
        <button onClick={() => navigate('/num-classes', { state: { files } })} className="mt-4 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
          Next
        </button>
      )}
    </div>
  );
}
export default Home;
