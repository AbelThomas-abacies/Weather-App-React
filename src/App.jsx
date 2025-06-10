import React from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import View from "./components/View";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/view" element={<View/>}/>
      </Routes>
    </>
  );
};

export default App;
