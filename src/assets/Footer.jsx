// Footer.js
import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-black py-6  ">
        <hr className='text-white pb-5'/>
      <div className="container mx-auto flex flex-col items-center justify-center text-center">
        <p className="text-lg mb-2 text-white text-l">Thanks for visiting</p>
        <p className="text-lg mb-6 text-white text-sm font-['Creattion'] font-light custom-header" >Jai Singh Bhati</p>
        <div className="flex items-center justify-center space-x-5">
          <a href="https://www.instagram.com/bhati_jaisingh15/" className="text-white hover:text-white">
            <FaInstagram className="text-xl" />
          </a>
          <a href="https://github.com/Jaisinghbhati" className="text-white hover:text-white">
          
            <FaGithub className="text-xl" />
          </a>
          <a href="https://www.linkedin.com/in/jai-singh-bhati/" className="text-white hover:text-white">
            <FaLinkedin className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
