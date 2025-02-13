import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CustomFab from "./components/customFab";
import './App.css';
import Home from "./components/Home";
import NumClasses from "./components/Numclasses";
import Classification from "./components/Classification"

function App() {
  return (
    <div className="appWrapper">
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/num-classes" element={<NumClasses />} />
            <Route path="/classify" element={<Classification />} />
          </Routes>
        </Router>
      </div>
      <div>
        <CustomFab direction="right" onClick={() => console.log("Clicked!")} />
      </div>
    </div>
  );
}

export default App;