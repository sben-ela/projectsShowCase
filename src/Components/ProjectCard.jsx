import React, { useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

const ROTATION_RANGE = 60;
const HALF_ROTATION_RANGE = ROTATION_RANGE / 2;

const ProjectCard = ({ title, image, onSeeMoreClick }) => {
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
        transformStyle: "preserve-3d",
        transform,
        backgroundImage: `url(${image})`, // Corrected syntax for backgroundImage
        backgroundSize: "cover", // Ensure the image covers the entire card
        backgroundPosition: "center", // Center the background image
      }}
      className="relative bg-black h-96 w-72 rounded-xl shadow-lg"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute group space-y-10 inset-4 grid place-content-center rounded-xl"
      >
        <div className="absolute h-full w-full inset-0 bg-slate-700 bg-opacity-40 blur-lg rounded-xl"></div>

        <p
          style={{
            transform: "translateZ(50px)",
          }}
          className="absolute right-0 z-10 p-4 -top-10 mr-8 rounded-xl text-4xl font-bold text-gray-100"
        >
          {title}
        </p>

        <div className="absolute bottom-0 w-full flex justify-center items-center opacity-0 translate-y-20 group-hover:opacity-100 group-hover:-translate-y-10 transition-transform duration-500 ease-in-out">
          <a
            onClick={onSeeMoreClick}
            className="border-2 w-40 font-serif text-center cursor-pointer group-hover:bg-gradient-to-tr hover:via-slate-300 from-slate-400 to-stone-800 bg-slate-200 text-xl border-black p-2 rounded-2xl"
          >
            See More
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
