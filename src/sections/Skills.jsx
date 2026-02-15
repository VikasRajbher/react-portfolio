import React from "react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full px-[10%] py-2 min-h-2/3 scroll-mt-24 md:px-[18%]"
    >
      <h2 className="text-center font-medium text-5xl mb-10">Skills</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-2xl items-center ">
        <li
          className="border-2 border-gray-400 rounded-3xl p-6 cursor-pointer 
               hover:translate-y-1 duration-500 
               hover:shadow-[4px_4px_0_#000] 
               dark:border-white dark:hover:shadow-[2px_2px_0_#ffffff]"
        >
          <i className="ri-anchor-line text-2xl font-bold dark:text-white"></i>
          <h3 className="my-2 text-xl font-semibold text-gray-700 dark:text-white">
            SKILLS & Tools
          </h3>

          <p className="text-gray-600 text-lg mb-2 hover:translate-y-1 duration-100 hover:text-red-500 dark:text-white">
            -{" "}
            <i className="ri-html5-line text-red-600 border rounded-full p-1"></i>{" "}
            - HTML
          </p>

          <p className="text-gray-600 text-lg mb-2 hover:translate-y-1 duration-100 hover:text-blue-400 dark:text-white">
            -{" "}
            <i className="ri-tailwind-css-fill text-blue-400 border rounded-full p-1"></i>{" "}
            - CSS (TailWind CSS)
          </p>

          <p className="text-gray-600 text-lg mb-2 hover:translate-y-1 duration-100 hover:text-yellow-500 dark:text-white">
            -{" "}
            <i className="ri-javascript-fill text-yellow-500 border rounded-full p-1"></i>{" "}
            - JavaScript
          </p>

          <p className="text-gray-600 text-lg mb-2 hover:translate-y-1 duration-100 hover:text-blue-600 dark:text-white">
            -{" "}
            <i className="ri-reactjs-line text-blue-600 border rounded-full p-1"></i>{" "}
            - React
          </p>

          <p className="text-gray-600 text-lg hover:translate-y-1 duration-100 dark:text-white">
            -{" "}
            <i className="ri-nextjs-line text-black border rounded-full p-1 dark:text-white"></i>{" "}
            - Next.js
          </p>
        </li>

        <li
          className="border-2 border-gray-400 rounded-3xl p-6 cursor-pointer 
               hover:translate-y-1 duration-500 
               hover:shadow-[4px_4px_0_#000] 
               dark:border-white dark:hover:shadow-[2px_2px_0_#ffffff]"
        >
          <i className="ri-tools-fill text-2xl font-bold dark:text-white"></i>
          <h3 className="my-2 font-semibold text-gray-700 text-xl dark:text-white">
            Tools I Use
          </h3>

          <p
            className="text-gray-600 text-lg mb-2 hover:translate-y-1 duration-100 
                hover:text-blue-400 dark:text-white"
          >
            -{" "}
            <i className="ri-file-code-line border rounded-full p-1 text-blue-400"></i>{" "}
            - Visual Studio Code
          </p>

          <p
            className="text-gray-600 text-lg mb-2 hover:translate-y-1 duration-100 
                hover:text-red-500 dark:text-white"
          >
            - <i className="ri-github-line border rounded-full p-1 "></i> - Git
            & Github
          </p>

          <p
            className="text-gray-600 text-lg mb-2 hover:translate-y-1 duration-100 
                hover:text-red-500 dark:text-white"
          >
            -{" "}
            <i className="ri-npmjs-line text-red-500 border rounded-full p-1 "></i>{" "}
            - npm
          </p>

          <p
            className="text-gray-600 text-lg mb-2 hover:translate-y-1 duration-100 
                hover:text-green-500 dark:text-white"
          >
            -{" "}
            <i className="ri-leaf-line text-green-500 border rounded-full p-1 "></i>{" "}
            - MongoDb Compass
          </p>

          <p className="text-gray-600 text-lg hover:translate-y-1 duration-100 dark:text-white">
            -{" "}
            <i className="ri-exchange-line border rounded-full p-1 dark:text-white"></i>{" "}
            - Postman
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
