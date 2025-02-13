import React from "react";
import { FaGraduationCap, FaCertificate } from "react-icons/fa";
import Motion from "../motion/Motion";
import StarCanvas from "../canvas/Stars";

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Technology in Computer Science",
      institution: "CSVTU University",
      year: "2021 - 2025",
      description:
        "Focused on full-stack web development, algorithms, and data structures.",
    },
    {
      degree: "Intermediate",
      institution: "R.J.R.R.S.D College, Madhubani, Bihar",
      description: "Math,physics,chemistry.",
    },
  ];

  const certificationData = [
    {
      title: "Full Stack Web Development Certification",
      institution: "PW-Skills",
      year: "2024",
      description:
        "Completed a comprehensive course on full-stack development.",
    },
    {
      title: "C++ and Data Structures",
      institution: "Cooding spoon",
      year: "2022",
      description:
        "Achieved a certificate for mastering algorithms and data structures in JavaScript.",
    },
    {
      title: "Backend - The Complete Guide",
      institution: "cooding sppon",
      year: "2023",
      description: "Learned React from the ground up with hands-on projects.",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-blue-500 to-purple-700 py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900 opacity-60"></div>
      <StarCanvas />

      <div className="relative max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 animate-fade-in-up">
          Education
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <Motion key={index}>
              <div className="bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-2xl hover:scale-105 p-6 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 p-2 rounded-full">
                    <FaGraduationCap className="text-white text-3xl animate-bounce" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {edu.degree}
                </h3>
                <p className="text-gray-700">{edu.institution}</p>
                <p className="text-gray-500">{edu.year}</p>
                <p className="mt-2 text-gray-600">{edu.description}</p>
              </div>
            </Motion>
          ))}
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 mt-16 animate-fade-in-up">
          Certifications
        </h2>
        <div className="space-y-8">
          {certificationData.map((cert, index) => (
            <Motion key={index}>
              <div className="bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:shadow-2xl hover:scale-105 p-6 relative">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                  <div className="bg-green-600 p-2 rounded-full">
                    <FaCertificate className="text-white text-3xl animate-bounce" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {cert.title}
                </h3>
                <p className="text-gray-700">{cert.institution}</p>
                <p className="text-gray-500">{cert.year}</p>
                <p className="mt-2 text-gray-600">{cert.description}</p>
              </div>
            </Motion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
