import cddd from "../assets/cddd.png";
import "remixicon/fonts/remixicon.css";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Moody Player",
      image: moody,
      link: "https://moodyplayer-1-7cw1.onrender.com/",
    },
  ];

  return (
    <div className="min-h-2/3 grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:grid-cols-3 md:grid-cols-4 my-10 gap-5">
      {projects.map((project) => (
        <div
          key={project.id}
          className="aspect-square bg-cover bg-center rounded-lg relative shadow-lg border-gray-500 dark:border-white border-4 cursor-pointer group"
          style={{ backgroundImage: `url(${project.image})` }}
        >
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <div className="bg-white w-11/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-1 px-3 flex items-center justify-between duration-500 group-hover:bottom-7 border border-gray-300">
              <h2 className="text-xs sm:text-sm font-medium text-black">
                {project.title}
              </h2>
              <i className="ri-send-ins-fill px-1 text-center border-2 rounded-full text-black"></i>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
