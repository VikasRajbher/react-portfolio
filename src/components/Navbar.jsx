import "remixicon/fonts/remixicon.css";
import logo from "../assets/images/logo.png";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <div
      className="w-full fixed top-0 left-0 px-5 lg:px-8 xl:px-[8%] py-4 
      flex items-center justify-between shadow-md z-50 
      bg-white/80 dark:bg-gray-900/80 
      backdrop-blur-md transition-colors duration-300"
    >
      <img src={logo} alt="Logo" className="w-32 shadow-lg mr-14 rounded-2xl" />

      <ul className="hidden md:flex items-center gap-6 text-xl font-semibold lg:gap-8 rounded-full px-12 py-3">
        {["home", "about", "skills", "work", "contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-300"
            >
              {item === "about"
                ? "About Me"
                : item === "work"
                  ? "My Work"
                  : item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4 font-bold text-xl">
        {/* 🌗 Theme Toggle Button */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
        >
          <i
            className={`text-2xl transition-transform duration-300 ${
              darkMode ? "ri-sun-line rotate-180" : "ri-moon-line"
            }`}
          ></i>
        </button>

        <a
          href="#contact"
          className="hidden lg:flex items-center gap-2 px-5 py-2 
          border border-gray-500 dark:border-gray-300 
          rounded-full ml-4 
          hover:bg-gray-100 dark:hover:bg-gray-800 
          transition duration-300"
        >
          Contact <i className="ri-arrow-right-up-line text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
