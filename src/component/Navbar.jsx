import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../Image/logo.png";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="w-full h-20 bg-white shadow-md rounded-b-lg border-b border-gray-200">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex-shrink-0">
          <img src={logo} alt="Profile" className="h-12 object-cover" />
        </div>
        <div className="hidden lg:flex items-center space-x-6">
          <Link to="/" className="text-gray-800 py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-300">Home</Link>
          <Link to="/Skill" className="text-gray-800 py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-300">Skill</Link>
          <Link to="/Project" className="text-gray-800 py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-300">Project</Link>
          <Link to="/Experience" className="text-gray-800 py-2 px-4 hover:bg-gray-100 rounded-lg transition duration-300">Experience</Link>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={() => setExpandNavbar(prev => !prev)} className="p-2 rounded-lg bg-gray-200 text-gray-800 hover:bg-gray-300 transition duration-300 focus:outline-none">
            <FaBars className="text-3xl" />
          </button>
        </div>
      </div>
      {expandNavbar && (
        <div className="lg:hidden fixed top-20 right-0 w-full bg-white shadow-md border-t border-gray-200 flex flex-col items-center space-y-4 py-6 z-50">
          <Link to="/" onClick={() => setExpandNavbar(false)} className="text-gray-800 text-lg py-3 px-6 hover:bg-gray-100 w-full text-center rounded-lg transition duration-300">Home</Link>
          <Link to="/Skill" onClick={() => setExpandNavbar(false)} className="text-gray-800 text-lg py-3 px-6 hover:bg-gray-100 w-full text-center rounded-lg transition duration-300">Skill</Link>
          <Link to="/Project" onClick={() => setExpandNavbar(false)} className="text-gray-800 text-lg py-3 px-6 hover:bg-gray-100 w-full text-center rounded-lg transition duration-300">Project</Link>
          <Link to="/Experience" onClick={() => setExpandNavbar(false)} className="text-gray-800 text-lg py-3 px-6 hover:bg-gray-100 w-full text-center rounded-lg transition duration-300">Experience</Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
