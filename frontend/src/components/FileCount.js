import React from "react";
import "./FileCount.css";

function FileCount({ count }) {
  return (
    <div className="myCount font-inter pointer-events-none">
      <p>{count > 0 ? `${count} Files Selected` : "No files selected"}</p>
    </div>
  );
}

export default FileCount;
