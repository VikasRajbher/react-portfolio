import dp from "../assets/images/dp.jpeg";

const Aboutme = () => {
  return (
    <div id="about" className="w-full px-[10%] py-10 scroll-mt-12">
      <h4 className="text-center mb-2 text-lg">Introduction</h4>
      <h2 className="text-center text-5xl">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-16 my-10">
        <div className="max-w-max mx-auto relative">
          <img
            src={dp}
            alt="photo"
            className="w-64  sm:w-96 rounded-3xl max-w-none"
          />
        </div>
        <div>
          <div className="flex-1">
            <p className="mb-10 max-w-2xl">
              Hello, I’m Vikas Rajbher, a Frontend Developer skilled in HTML,
              CSS, JavaScript, and React. I build responsive and user-focused
              interfaces using modern tools and state management techniques. I
              also have foundational backend knowledge in Express.js, MongoDB,
              and RESTful API development.
            </p>

            <ul>
              <li
                className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer 
                 hover:bg-[fcf4ff] shadow-sm hover:translate-y-1 duration-500 
                 hover:shadow-[4px_4px_0_#000] 
                 dark:border-gray-600 dark:hover:bg-gray-800 dark:border-white dark:hover:shadow-[2px_2px_0_#ffffff]"
              >
                <i className="ri-attachment-line dark:text-white"></i>
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  Education
                </h3>
                <p className="text-gray-600 text-sm mb-2 dark:text-white">
                  - Class 10 (Secondary Education), ICSE Board (2018)
                </p>
                <p className="text-gray-600 text-sm mb-2 dark:text-white">
                  - Class 12 (Senior Secondary Education), ISC Board (2020)
                </p>
                <p className="text-gray-600 text-sm dark:text-white">
                  - Bachelor of Technology (Information Technology), (2021-2025)
                </p>
              </li>
            </ul>

            <h4 className="my- text-gray-700 mt-3 mb-3 dark:text-white">
              Important Links
            </h4>

            <ul className="grid grid-cols-1 sm:grid-cols-3 text-xl gap-6 max-w-2xl items-center">
              <li className="hover:translate-y-1 duration-100 hover:text-red-500">
                <i className="ri-mail-fill"></i>
                <a href="mailto: vikasrajbher@gmail.com"> E-mail </a>
              </li>
              <li className="hover:translate-y-1 duration-100">
                <i className="ri-github-fill"></i>
                <a href="https://github.com/VikasRajbher"> GitHub </a>
              </li>
              <li className="hover:translate-y-1 duration-100 hover:text-blue-600">
                <i className="ri-linkedin-box-fill"></i>
                <a href="https://www.linkedin.com/in/vikas-rajbher-92a352272?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B04%2BHSVPhRwWZbODTxBeCzA%3D%3D">
                  {" "}
                  Linkedin{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
