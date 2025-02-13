import { useNavigate } from "react-router-dom";
import { useDropzone } from "react-dropzone";
import React, { useState } from "react";
import uploadIcon from "../assets/folder.png";
import FileCount from "./FileCount";
import "./FilesButton.css";

function FilesButton() {
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
        <div className="flex flex-col items-center">
        <div {...getRootProps()} className="mybutton">
            <input {...getInputProps()} />
            <p className="buttonText text-lg">Drag and drop or add folder</p>
            <img src={uploadIcon} alt="Folder Icon" className="folder" />
        
        </div> 
            <FileCount count={files.length} className="pointer-events-none" />
        </div>
        )
  }
  
  export default FilesButton;