<<<<<<< HEAD
import { useEffect, useState } from "react";
=======
import React from "react";
>>>>>>> 422b2442096a076fe7470582c3ada4135fe7da95
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Aboutme from "./sections/Aboutme";
import Skills from "./sections/Skills";
import MyWork from "./sections/MyWork";
import ContactMe from "./sections/ContactMe";
import Footer from "./components/Footer";

const App = () => {
<<<<<<< HEAD
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="bg-white text-black dark:bg-gray-900 dark:text-white min-h-screen transition-colors duration-300">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
=======
  return (
    <div>
      <Navbar />
>>>>>>> 422b2442096a076fe7470582c3ada4135fe7da95
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
