import React from 'react';
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer bg-gray-800 p-10">
      <div className="socialMedia flex justify-center space-x-4 mb-4">
        <a href="https://www.instagram.com/arshalan_quasain/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-600 transition duration-300">
          <FaInstagram size={30} />
        </a>
        <a href="https://x.com/arshalan_q/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition duration-300">
          <FaTwitter size={30} />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100006326597552" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-600 transition duration-300">
          <FaFacebook size={30} />
        </a>
        <a href="https://www.linkedin.com/in/arshalan-quasain-b4a2a924b/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-700 transition duration-300">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/ArshalanQuasain" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400 transition duration-300">
          <FaGithub size={30} />
        </a>  
      </div>
      <div className="flex justify-center">
        <p className="text-white"> &copy; Arshalan Quasain</p>
      </div>
    </div>
  );
}

export default Footer;
