import React from "react";
import {  Routes, Route, BrowserRouter as  Router } from "react-router-dom";
import Home from "./Home"
import "./App.css";


const App = () => {
  return (
    <>
    
    <Router>

    <Routes>
      
      <Route path="/" element={< Home />} />
      
    </Routes>
    
    </Router>

    
    </>
  );
};

export default App;