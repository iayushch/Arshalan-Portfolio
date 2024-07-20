import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../Item/Projectlist";
import { FaGithub } from 'react-icons/fa';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project w-full h-auto min-h-[calc(100vh-100px)] flex flex-col justify-center items-center mb-10">
      <h1 className="mt-[50px] text-[#3e497a] text-[35px]">{project.name}</h1>
      <img src={project.image} className="w-[700px] rounded-[10px]" alt={project.name} />
      <p className="text-[40px] text-[#3e497a] mt-4">
        <b>Skills:</b> {project.skills}
      </p>
      <div className="flex justify-center items-center mt-4">
        <a href={project.Github} target="_blank" rel="noopener noreferrer" className="flex items-center">
          <FaGithub className="text-black hover:text-gray-400" style={{ fontSize: 40 }} />
        </a>
        <a href={project.Link} target="_blank" rel="noopener noreferrer" className="text-blue-800 hover:text-blue-600 underline decoration-blue-500 ml-4 text-[40px]">
          LINK
        </a>
      </div>
    </div>
  );
}

export default ProjectDisplay;
