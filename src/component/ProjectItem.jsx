import React from "react";
import { useNavigate } from "react-router-dom";

function ProjectItem({ image, name, id }) {
  const navigate = useNavigate();
  return (
    <div
      className="rounded-[15px] w-[300px] h-[300px] m-[40px] shadow-2xl border border-gray-800 transition-all duration-300 ease-in-out cursor-pointer text-center hover:shadow-2xl hover:transform hover:-translate-y-2"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="bgImage bg-contain bg-center bg-no-repeat w-full h-[200px] rounded-t-[15px]"
      />
      <h1 className="text-[25px] mt-4"> {name} </h1>
    </div>
  );
}

export default ProjectItem;
