import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';

const ROTATION_RANGE = 200;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const ProjectCard = ({ title, imageSrc, description, extraContent, githubLink }) => {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const xSpring = useSpring(x);
  const ySpring = useSpring(y);
  
  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = (e.clientX - rect.left) * ROTATION_RANGE;
    const mouseY = (e.clientY - rect.top) * ROTATION_RANGE;

    const rX = (mouseY / height - HALF_ROTATION_RANGE) * -1;
    const rY = mouseX / width - HALF_ROTATION_RANGE;

    x.set(rX);
    y.set(rY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        transform,
      }}
      className="bg-opacity-10 bg-white w-[355px] h-[500px] rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl relative group perspective-1000"
    >
      <div className="h-[60%] overflow-hidden">
        <img src={imageSrc} alt={title} className="w-full h-full object-cover rounded-b-xl" />
      </div>

      <div className="text-center mt-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>

      <div className="px-4 py-2 text-left">
        <p className="text-sm text-gray-200">{description}</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-b from-black  p-4 h-[70%] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out rounded-t-lg flex flex-col space-y-2 text-gray-300">
        <p>{extraContent}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-gradient-to-r from-gray-400 to-gray-200 text-black py-2 px-4 rounded-lg shadow-md mt-2 hover:from-white hover:to-gray-400 transform transition-transform duration-300 hover:scale-105"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
