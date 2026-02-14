import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Aboutme from "./sections/Aboutme";
import Skills from "./sections/Skills";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
    </div>
  );
};

export default App;
