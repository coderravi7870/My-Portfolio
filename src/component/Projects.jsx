import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Moviex_World",
    description: "A website site powered by React",
    link: "https://movie-world-project-react-redux.vercel.app",
    github: "https://github.com/coderravi7870/MovieWorld_Project-React-Redux-",
    image: "/Images/movie.png",
  },
  {
    title: "File-Sharing",
    description: "A modern web app using MERN .",
    link: "https://superlative-kangaroo-9543f5.netlify.app",
    github: "https://github.com/coderravi7870/File-Sharing",
    image: "/Images/fileSharing.png",
  },
  {
    title: "Gramify a Social App",
    description: "I have build it by MERN stack.",
    link: "https://sensational-dieffenbachia-d7d4e3.netlify.app",
    github: "https://github.com/coderravi7870/Gramify_Frontend",
    image: "/Images/gramify.png",
  },
  {
    title: "Todo-Project",
    description: "A website site powered by React",
    link: "https://todo-project-orpin.vercel.app",
    github: "https://github.com/coderravi7870/Todo-Project",
    image: "/Images/todo.png",
  },
];

const Modal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="bg-gray-800 rounded-lg p-6 z-10 max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
        <p className="text-gray-300 mb-4">{project.description}</p>
        <div className="flex justify-between">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-600 flex items-center space-x-2"
          >
            <FaGithub className="text-xl" />
            <span>Code</span>
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full flex items-center space-x-2 transition duration-300"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </a>
        </div>
        <button
          className="mt-4 text-red-400 hover:text-red-600"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="relative py-16 px-4" id="projects">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-60"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 hover:shadow-2xl relative overflow-hidden"
              onClick={() => handleProjectClick(project)} // Open modal on click
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 flex items-center space-x-2"
                  >
                    <FaGithub className="text-xl" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full flex items-center space-x-2 transition duration-300"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent opacity-0 hover:opacity-80 transition duration-500"></div>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <Modal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default Projects;