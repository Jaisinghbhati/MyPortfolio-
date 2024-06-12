import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
    <nav className="bg-black  ">
      <div className="max-w-7xl mx-auto px-5 p-4 ">
        <div className="flex justify-between ">
          <div className="flex items-center">
            <Link to="/" className="text-white text-lg font-bold">
            MY PORTFOLIO.
            </Link>
          </div>
          <div className="hidden md:flex">
            <Link
              to="/"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              HOME
            </Link>
            <Link
              to="/About"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              ABOUT ME
            </Link>
            
          

            <Link
              to="/Projects"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              PROJECTS
            </Link>
            <Link
              to="/Contact"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              CONTACT ME
            </Link>


          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
             
              className="text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Responsive Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              HOME
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              ABOUT
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              SERVICES
            </Link>
            <Link
              to="#"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              CONTACT
            </Link>
          </div>
        </div>
      )}
    </nav>
    </div>
  )
}

export default Header
