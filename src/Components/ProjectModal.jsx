import React from "react";
import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-gray-600 rounded-xl shadow-2xl max-w-lg w-full p-8 space-y-6"
      >
        <h2 className="text-4xl font-bold text-center text-gray-200">
          {project.title}
        </h2>

        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg shadow-lg"
        />

        <p className=" text-white text-lg  leading-relaxed">
          {project.description}
        </p>

        <div className="flex justify-between items-center mt-4">
          <a
            href={project.previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            Preview
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold hover:underline"
          >
            GitHub
          </a>
        </div>

        <button
          onClick={onClose}
          className="w-full duration-500 bg-gray-400 text-white text-lg font-semibold py-2 rounded-full hover:bg-gray-200 hover:text-black transition-all"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
