import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import Home from "./components/Home";
import NumClasses from "./components/Numclasses";
import Classification from "./components/Classification"

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
