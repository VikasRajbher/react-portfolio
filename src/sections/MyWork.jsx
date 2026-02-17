import React from "react";
import Project from "../components/Project";

const MyWork = () => {
  return (
    <div id="work" className="w-full px-[10%] py-10 min-h-1/2 scroll-mt-20">
      <h2 className="text-center text-4xl font-semibold">My Work</h2>
      <Project />
      <div className="text-center  p-2">
        <a href="" className="">
          CLick here to see more my projects
        </a>
      </div>
    </div>
  );
};

export default MyWork;
