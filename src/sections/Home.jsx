import dp from "../assets/images/dp.jpeg";

const Home = () => {
  return (
    <div
      id="home"
      className="w-full pt-24 text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 "
    >
      <img
        src={dp}
        alt="dp"
        className="rounded-full w-36 h-36 object-cover border-4 border-black p-1"
      />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl ">
        Hi! I'm Vikas Rajbher <i className="ri-hand -rotate-24 text-2xl"></i>
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[60px]">
        Frontend Web Developer
      </h1>
      <p className="max-w-2xl  p-8 sm:p-2 text-center mx-auto">
        Frontend Developer proficient in HTML, CSS, JavaScript, and React,
        skilled in building responsive and interactive user interfaces using
        Context API, basic Redux, and RESTful APIs with CRUD operations.
        Possesses foundational backend knowledge in Express.js, MongoDB,
        Mongoose, and implementing core API endpoints.
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-4 ">
        <a
          href="#contact"
          className="px-10 py-3 bg-gradient-to-r from-[#4acbbc] via-[#5373e4] to-[#7940e4] text-white rounded-full flex items-center gap-2"
        >
          Contact me <i className="ri-arrow-right-line text-xl "></i>
        </a>
        <a
          href="#contact"
          download
          className="px-10 py-3 border border-gray-500 rounded-full flex items-center gap-2"
        >
          My Resume <i className="ri-download-cloud-2-fill text-xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Home;
