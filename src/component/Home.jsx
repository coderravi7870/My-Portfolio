import React from "react";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import StarCanvas from "../canvas/Stars";

const Home = () => {
  const photoURL = "/Images/ravi2.0.png";
  return (
    <div className="relative h-screen bg-gradient-to-br from-blue-500 to-purple-700 flex items-center justify-center text-white">


      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-60"></div>
      <StarCanvas/>

      <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          Welcome, I'm{" "}
          <span className="text-yellow-400 animate-pulse">Ravi Shankar</span>
        </h1>
        <p className="text-lg md:text-2xl mb-8 animate-fade-in-up delay-200">
          A passionate MERN stack developer focused on creating elegant web
          solutions.
        </p>

        <div className="flex items-center justify-center mb-6 relative">
          <motion.div
            whileHover={{
              scale: 1.05,
              rotateY: 30,
              rotateX: 30,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div
              className="absolute w-44 h-44 rounded-full border-[6px] border-transparent animate-spin"
              style={{
                background:
                  "conic-gradient(from 0deg, #ff0000, #ff7300, #ffeb00, #47ff00, #00ffd5, #003bff, #7a00ff, #ff00eb, #ff0000)",
                maskImage:
                  "radial-gradient(circle, rgba(0,0,0,0) 65%, rgba(0,0,0,1) 66%)",
              }}
            ></div>

            <div className="w-44 h-44 rounded-full flex justify-center items-center relative cursor-pointer">
              <img
                src={photoURL}
                alt="Ravi"
                className="rounded-full w-40 h-40 object-fill shadow-lg"
              />
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 animate-fade-in-up delay-400 gap-4">
          <motion.div
            whileHover={{
              scale: 1.05,
              rotateY: 15,
              rotateX: 15,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/projects"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            >
              View My Projects
            </Link>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              rotateY: 15,
              rotateX: 15,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </div>

       
      </div>
    </div>
  );
};

export default Home;
