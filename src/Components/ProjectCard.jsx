import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, image, concepts, isActive }) => {

  return (
    <motion.div
    className={`${isActive ? 'border-2' : 'hover:shadow-custom-orange'} pb-8 lg:pb-0 h-72 md:h-96 bg-black bg-opacity-80 w-full rounded-3xl  overflow-hidden transform transition duration-300 hover:scale-105 relative group perspective-1000 `}
    >
      <div className={`h-[60%] overflow-hidden`}>
        <img src={image} alt={title} className="w-full h-full object-cover rounded-b-xl" />
      </div>

      <div className="text-center mt-4 ">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>

      <div className="px-4 pt-2 lg:pt-6 text-left">
        <p className="text-xs text-gray-200">{concepts}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
