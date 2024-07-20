import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { BiFile } from "react-icons/bi";
import photo from "../Image/New.jpg";

function Home() {
  return (
    <div className="home w-full bg-white flex items-center font-sans text-black mb-10">
      <div className="container flex flex-col md:flex-row items-center w-4/5 bg-white border border-gray-300 rounded-lg shadow-lg p-2 mt-10 md:p-12 mx-auto"
        style={{
          width: '95%',
        }}
      >
        {/* Photo Section */}
        <div className="photo-section w-full md:w-1/2 flex justify-center mb-6 md:mb-0">
          <img src={photo} alt="Profile" className="w-full h-auto object-cover rounded-md md:max-w-sm" />
        </div>

        {/* About Section */}
        <div className="about flex flex-col justify-center text-center md:text-left items-center md:items-start w-full md:w-1/2 p-6 lg:rounded-lg lg:border-l lg:border-gray-500">
          <h2 className="font-sans text-[30px] md:text-[40px] lg:text-[45px] text-black mb-4">Hi, I'm Arshalan Quasain</h2>
          <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-relaxed mb-6">
            I am a full-stack MERN developer with expertise in JavaScript, React.js, Node.js, and MongoDB. I build intuitive UIs and scalable back-end systems, focusing on performance, new features, and problem-solving. Check out my portfolio and connect for collaboration. Let's create something exceptional!
          </p>
          <div className="prompt flex space-x-4">
            <a href="https://www.linkedin.com/in/arshalan-quasain-b4a2a924b/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-black hover:text-gray-400" style={{ fontSize: 40 }} />
            </a>
            <a href="mailto:arshalanquasain.01@gmail.com" target="_blank" rel="noopener noreferrer">
              <MdEmail className="text-black hover:text-gray-400" style={{ fontSize: 40 }} />
            </a>
            <a href="https://github.com/ArshalanQuasain" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-black hover:text-gray-400" style={{ fontSize: 40 }} />
            </a>
            <a href="https://drive.google.com/file/d/1YvihC_dbgRso0wGokFfBrRVyc2sJhJC6/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <BiFile className="text-black hover:text-gray-400" style={{ fontSize: 40 }} />
            </a>
            <a href="tel:+91 8290718156" target="_blank" rel="noopener noreferrer">
              <MdPhone className="text-black hover:text-gray-400" style={{ fontSize: 40 }} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
