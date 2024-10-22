import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 60;
const HALF_ROTATION_RANGE = 60 / 2;



const ProjectCard = ({ title, image, onSeeMoreClick }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const xSpring = useSpring(x);
  const ySpring = useSpring(y);

  const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return [0, 0];

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
        transformStyle: "preserve-3d",
        transform,
        backgroundImage: `url(${image})`, // Add your image URL here
        backgroundSize: "cover", // Make sure the image covers the entire card
        backgroundPosition: "center", // Center the background image
      }}
      className="relative h-96 w-72 rounded-xl shadow-lg overflow-hidden transition-all duration-300">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80 z-0"></div>

      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute group space-y-10 inset-4 grid place-content-center rounded-xl"
      >
        {/* <div className="absolute h-20 inset-0 bg-slate-700 bg-opacity-80 blur-lg rounded-xl"></div> */}

        <p
          style={{ transform: "translateZ(40px)" }}
          className="text-white text-4xl font-bold tracking-wider text-center"
        >
          {title}
        </p>

        <div className="absolute bottom-0 w-full flex justify-center items-center opacity-0 translate-y-20 group-hover:opacity-100 group-hover:-translate-y-10 transition-transform duration-500 ease-in-out">
        <a
      onClick={onSeeMoreClick}
      className="border-2 w-40 font-serif text-center cursor-pointer bg-gray-400 text-xl text-black border-gray-600 p-2 rounded-2xl relative
        transition-all duration-500 ease-in-out hover:bg-gradient-to-tr via-gray-400 from-blue to-black
        shadow-md hover:shadow-xl
        hover:scale-105
      "
        >
          See More
        </a>


        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;
