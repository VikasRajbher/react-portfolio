import React from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Aboutme from "./sections/Aboutme";
import Skills from "./sections/Skills";
import MyWork from "./sections/MyWork";
import ContactMe from "./sections/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Aboutme />
      <Skills />
      <MyWork />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
