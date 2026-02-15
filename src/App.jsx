import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import Aboutme from "./sections/Aboutme";
import Skills from "./sections/Skills";
import MyWork from "./sections/MyWork";
import ContactMe from "./sections/ContactMe";
import Footer from "./components/Footer";

const App = () => {
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
