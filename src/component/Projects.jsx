import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Motion from "../motion/Motion";
import StarCanvas from "../canvas/Stars";

// const projects = [
//   {
//     title: "Dr Appointment System",
//     description: "A website site powered by React",
//     link: "https://dr-appointment-user.vercel.app",
//     github: "https://github.com/coderravi7870/all_Code_Dr_Appoinment",
//     image: "/Images/drapp.png",
//   },
//   {
//     title: "Chat Application",
//     description: "A website site powered by React",
//     link: "https://chat-app-frontend-taupe.vercel.app",
//     github: "https://github.com/coderravi7870/ChatApp-Frontend",
//     image: "/Images/chatapp.png",
//   },
//   {
//     title: "Gramify a Social App",
//     description: "I have build it by MERN stack.",
//     link: "https://sensational-dieffenbachia-d7d4e3.netlify.app",
//     github: "https://github.com/coderravi7870/Gramify_Frontend",
//     image: "/Images/gramify.png",
//   },
//   {
//     title: "Moviex_World",
//     description: "A website site powered by React",
//     link: "https://movie-world-project-react-redux.vercel.app",
//     github: "https://github.com/coderravi7870/MovieWorld_Project-React-Redux-",
//     image: "/Images/movie.png",
//   },
//   {
//     title: "Todo-Project",
//     description: "A website site powered by React",
//     link: "https://todo-project-orpin.vercel.app",
//     github: "https://github.com/coderravi7870/Todo-Project",
//     image: "/Images/todo.png",
//   },
//   {
//     title: "File-Sharing",
//     description: "A modern web app using MERN .",
//     link: "https://superlative-kangaroo-9543f5.netlify.app",
//     github: "https://github.com/coderravi7870/File-Sharing",
//     image: "/Images/fileSharing.png",
//   },
//   {
//     title: "Wether-application",
//     description: "A modern web app using MERN .",
//     link: "https://wether-project-react.vercel.app",
//     github: "https://github.com/coderravi7870/Wether-Project-React-",
//     image: "/Images/wether.png",
//   },
  
  
// ];

const projects = [
  {
    title: "Dr Appointment System",
    description: `Dr Appointment System is a full web application developed using the MERN (MongoDB, Express.js, React.js, Node.js) stack, providing a seamless experience for booking doctor appointments online. The platform enables users to search for doctors based on their specialization, availability, and location. Patients can easily view available slots and book appointments, while doctors can manage their schedules efficiently.
    The system features a powerful Admin Panel that allows administrators to oversee users, doctors, and appointments.
    The frontend is built with React.js for a smooth and dynamic user experience, while the backend, powered by Node.js and Express.js, ensures fast API responses. MongoDB is used for secure data storage. This system revolutionizes online doctor appointments, making healthcare more accessible and efficient.`,
    link: "https://dr-appointment-user.vercel.app",
    github: "https://github.com/coderravi7870/all_Code_Dr_Appoinment",
    image: "/Images/drapp.png",
  },
  {
    title: "Chat Application",
    description: `This real-time chat application is built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, providing a seamless and interactive messaging experience. It utilizes Socket.io for real-time communication, ensuring instant message delivery. Users can engage in private chats, group conversations, and media sharing.
  
    The app features authentication using JWT, allowing users to sign up, log in, and maintain secure sessions. It includes online/offline status indicators, message timestamps, and read receipts for a smooth chat experience. The frontend is designed with MUI (Material-UI) for a modern and responsive UI.
  
    The backend, powered by Node.js and Express.js, efficiently handles user connections, message storage, and notifications. MongoDB ensures data persistence, storing user information and chat history securely.`,
    link: "https://chat-app-frontend-taupe.vercel.app",
    github: "https://github.com/coderravi7870/ChatApp-Frontend",
    image: "/Images/chatapp.png",
  }
  ,
  {
    title: "Gramify - A Social App",
    description: `Gramify is a modern social media application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack, offering users a seamless platform for connecting and sharing moments. Users can create posts, upload images (stored securely using Cloudinary), like and comment on posts, and follow other users to stay updated.
  
    The app features authentication with JWT, ensuring secure user sessions. Real-time notifications keep users engaged by updating them about likes, comments, and follows. Each user has a customizable profile where they can update their bio, profile picture, and personal details.
  
    Cloudinary integration allows optimized image storage and retrieval, ensuring fast loading times and a smooth browsing experience.`,
    link: "https://sensational-dieffenbachia-d7d4e3.netlify.app",
    github: "https://github.com/coderravi7870/Gramify_Frontend",
    image: "/Images/gramify.png",
  }
  ,
  {
    title: "Moviex_World",
    description: `Moviex_World is a dynamic movie discovery platform built using React.js with Redux for state management and SCSS for a modern, visually appealing UI. The application provides users with real-time access to trending movies, detailed film descriptions, trailers, ratings, and cast information.
  
    The platform integrates an external movie database API to fetch up-to-date information, ensuring users always have the latest insights about their favorite films. Users can explore movies by genre, search for specific titles, and apply filters for a personalized browsing experience.
  
    Redux is used to manage application state efficiently, ensuring smooth navigation and data handling across components. The UI, styled with SCSS, offers a sleek and responsive design with smooth animations for an engaging user experience.`,
    link: "https://movie-world-project-react-redux.vercel.app",
    github: "https://github.com/coderravi7870/MovieWorld_Project-React-Redux-",
    image: "/Images/movie.png",
  }
  ,
  {
    title: "Todo-Project",
    description: `Todo-Project is a simple yet powerful task management application built using React.js with Context API for state management and LocalStorage for data persistence. It provides users with an efficient way to organize tasks, set priorities, and boost productivity.
  
    Users can add, edit, delete, and mark tasks as completed, ensuring a seamless workflow. The app features a clean and intuitive UI, making task management effortless. Categories and deadlines can be assigned to tasks, helping users stay organized.
  
    The integration of Context API enables smooth global state management, allowing changes to reflect instantly without prop drilling. Additionally, LocalStorage ensures that tasks remain saved even after refreshing the page, eliminating data loss.`,
    link: "https://todo-project-orpin.vercel.app",
    github: "https://github.com/coderravi7870/Todo-Project",
    image: "/Images/todo.png",
  }
  ,
  {
    title: "File-Sharing",
    description: `File-Sharing is a secure and efficient web application built using the MERN stack, designed for seamless file transfers. Users can upload files of various formats, generate shareable links, and download them securely. The platform ensures data protection with authentication and file expiration policies.
  
    To enhance user experience, the application integrates Nodemailer, allowing users to send file links directly via email. This makes sharing files quick and hassle-free without needing external platforms.
  
    The backend, powered by Node.js and Express.js, ensures fast and reliable performance, while MongoDB securely stores file metadata. The React.js frontend provides an intuitive UI, making file management effortless.`,
    link: "https://superlative-kangaroo-9543f5.netlify.app",
    github: "https://github.com/coderravi7870/File-Sharing",
    image: "/Images/fileSharing.png",
  }
  ,
  {
    title: "Weather Application",
    description: `The Weather Application is a real-time weather forecasting web app built using React.js. It fetches accurate weather data from a Weather API, allowing users to search for cities and get detailed weather insights, including temperature, humidity, wind speed, and forecasts.
  
    The app features a modern and responsive UI with dynamic background changes based on weather conditions, enhancing the user experience. It also includes location-based weather tracking, automatically detecting the user's location for instant updates.
  
    With an intuitive search bar, users can quickly check the weather for different cities worldwide. The app optimizes performance with efficient API calls, ensuring fast and reliable updates.`,
    link: "https://wether-project-react.vercel.app",
    github: "https://github.com/coderravi7870/Wether-Project-React-",
    image: "/Images/wether.png",
  }
  ,
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
            <FaGithub className="text-xl animate-bounce" />
            <span>Code</span>
          </a>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full flex items-center space-x-2 transition duration-300 cursor-pointer"
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
    <div className="relative bg-gradient-to-br from-blue-500 to-purple-700 py-16 px-4">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-60"></div>
      <StarCanvas />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Motion key={index}>
              <div
                className="bg-gray-700 rounded-lg shadow-lg transform hover:scale-105 transition duration-500 hover:shadow-2xl relative overflow-hidden cursor-pointer"
                onClick={() => handleProjectClick(project)}
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
                  <p className="text-gray-300">{project.description.slice(0,50)}...</p>
                  <div className="flex justify-between items-center mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 hover:text-blue-600 flex items-center space-x-2"
                    >
                      <FaGithub className="text-xl animate-bounce" />
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
            </Motion>
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
