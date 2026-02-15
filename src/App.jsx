import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Aboutme from "./sections/Aboutme";
import Skills from "./sections/Skills";
import MyWork from "./sections/MyWork";
import ContactMe from "./sections/ContactMe";
import Footer from "./components/Footer";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark class to html tag
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="transition-colors duration-300 bg-white dark:bg-gray-900 text-black dark:text-white">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
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
