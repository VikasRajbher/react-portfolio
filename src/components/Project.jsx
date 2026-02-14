import postImage from "../assets/images/post.png";
import "remixicon/fonts/remixicon.css";

const Project = () => {
  return (
    <div
      className="aspect-square bg-cover bg-center rounded-lg relative shadow-lg border-white border-4 cursor-pointer bg-amber-600 group"
      style={{ backgroundImage: `url(${postImage})` }}
    >
      <a href="#">
        <div className="bg-white w-11/12 rounded-md  absolute bottom-5 left-1/2 -translate-x-1/2 py-1 px-3 flex items-center justify-between duration-500 group-hover:bottom-7 hover:text-green-500 ">
          <h2 className="text-xs sm:text-sm font-medium">Frontend Project</h2>
          <i className="ri-send-ins-fill px-1 text-center border-2 rounded-full"></i>
        </div>
      </a>
    </div>
  );
};

export default Project;
