import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300">
      <div className="text-center py-10">
        <img src={logo} alt="Logo" className="w-36 mx-auto rounded-2xl" />
        <p className="mt-4 flex items-center justify-center gap-2">
          <i className="ri-mail-line"></i>
          vikasrajbher@gmail.com
        </p>
      </div>

      <div
        className="text-center sm:flex items-center justify-between 
        border-t border-gray-300 dark:border-gray-700 
        mx-[10%] py-6 transition-colors duration-300"
      >
        <p>© 2026 Vikas Rajbher. All rights reserved.</p>

        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li className="hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition">
            Instagram
          </li>
          <li className="hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition">
            Github
          </li>
          <li className="hover:text-gray-600 dark:hover:text-gray-300 cursor-pointer transition">
            LinkedIn
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
