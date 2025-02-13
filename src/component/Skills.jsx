import React from "react";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaGitAlt,
} from "react-icons/fa";
import { SiCplusplus, SiPostman } from "react-icons/si"; // Added icons for C++ and Postman
import Motion from "../motion/Motion";
import StarCanvas from "../canvas/Stars";

const skills = [
  { name: "React", icon: <FaReact />, color: "text-blue-500" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-600" },
  { name: "MongoDB", icon: <FaDatabase />, color: "text-green-500" },
  { name: "Express.js", icon: <FaNodeJs />, color: "text-gray-500" },
  { name: "HTML5", icon: <FaHtml5 />, color: "text-orange-600" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "text-blue-400" },
  { name: "JavaScript", icon: <FaJsSquare />, color: "text-yellow-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-600" },
  { name: "C++", icon: <SiCplusplus />, color: "text-blue-700" }, // Updated icon for C++
  { name: "Postman", icon: <SiPostman />, color: "text-orange-500" }, // Added Postman icon
];

const Skills = () => {
  return (
    <div className="relative bg-gradient-to-r from-gray-800 to-gray-900 py-16 px-4 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-60"></div>
      <StarCanvas />

      <div className="relative max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Motion key={index}>
              <div
                className={`flex flex-col items-center bg-gray-800 rounded-lg shadow-lg p-6 transform hover:scale-105 hover:rotate-1 transition duration-300 ${skill.color}`}
              >
                <div className="text-6xl mb-4 animate-bounce">{skill.icon}</div>
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
