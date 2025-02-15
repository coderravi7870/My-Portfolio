import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-2xl font-bold text-blue-500">
          <Link to="/">My Portfolio</Link>
        </div>

        <div className="hidden sm:flex space-x-8">
          <Link
            to="/"
            className={`nav-link ${
              location.pathname === "/" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`nav-link ${
              location.pathname === "/about" ? "text-blue-500 font-bold" : ""
            }`}
          >
            About
          </Link>
          <Link
            to="/projects"
            className={`nav-link ${
              location.pathname === "/projects" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Projects
          </Link>
          <Link
            to="/skills"
            className={`nav-link ${
              location.pathname === "/skills" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className={`nav-link ${
              location.pathname === "/contact" ? "text-blue-500 font-bold" : ""
            }`}
          >
            Contact
          </Link>
          <Link
            to="/education"
            className={`nav-link ${
              location.pathname === "/education"
                ? "text-blue-500 font-bold"
                : ""
            }`}
          >
            Education
          </Link>
        </div>

        <div className="sm:hidden">
          <button
            onClick={toggleMenu}
            className="text-blue-500 focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 p-4">
            <Link
              to="/"
              className={`nav-link ${
                location.pathname === "/" ? "text-blue-500 font-bold" : ""
              }`}
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${
                location.pathname === "/about" ? "text-blue-500 font-bold" : ""
              }`}
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              to="/projects"
              className={`nav-link ${
                location.pathname === "/projects"
                  ? "text-blue-500 font-bold"
                  : ""
              }`}
              onClick={toggleMenu}
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className={`nav-link ${
                location.pathname === "/skills" ? "text-blue-500 font-bold" : ""
              }`}
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link
              to="/education"
              className={`nav-link ${
                location.pathname === "/education"
                  ? "text-blue-500 font-bold"
                  : ""
              }`}
              onClick={toggleMenu}
            >
              Education
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${
                location.pathname === "/contact"
                  ? "text-blue-500 font-bold"
                  : ""
              }`}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
