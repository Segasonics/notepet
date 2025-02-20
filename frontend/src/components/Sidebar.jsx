import React from 'react';
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Sidebar = ({ isOpen, toggleSideBar }) => {
  return (
    <>
      {/* Overlay when the sidebar is open on small screens */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40" 
          onClick={toggleSideBar} 
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed z-50 w-64 sm:block bg-gray-700 text-gray-100 flex-shrink-0 inset-y-0 left-0 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition duration-200 ease-in-out  md:translate-x-0 md:flex-shrink-0`}>
        <div className="p-4 flex">
          <h2 className="text-2xl font-semibold">Notepad</h2>
        </div>
        <nav className="mt-5">
          <Link to="/" className="block py-2.5 px-4 rounded hover:bg-gray-700 hover:text-white text-gray-100 text-2xl">
            Home
          </Link>         
        </nav>
        <nav className="mt-0">
          <Link to="/notes" className="block py-2.5 px-4 rounded hover:bg-gray-700 hover:text-white text-gray-100 text-2xl">
            Notes
          </Link>         
        </nav>
        <nav className="w-full">
          <Link to="/login" className="w-full py-2.5 flex px-4 rounded hover:bg-gray-700 hover:text-white text-gray-100 text-2xl items-center">
            Logs<FaLongArrowAltRight />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
