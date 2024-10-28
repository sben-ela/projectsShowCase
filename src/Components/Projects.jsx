import React, { useState, useEffect } from "react";
import { projectDetails } from "../Details";
import ProjectCard from "./ProjectCard";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
  const [itemsInView, setItemsInView] = useState(3);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 3000) {
        setItemsInView(5);
      } else if (window.innerWidth >= 1024) {
        setItemsInView(3);
      } else if (window.innerWidth >= 800) {
        setItemsInView(2);
      } else {
        setItemsInView(1);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: itemsInView,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    touchThreshold: 40,
    beforeChange: (oldIndex, newIndex) => setActiveSlide(newIndex),
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <div className="bg-black bg-opacity-60 absolute top-0 left-0 h-full w-full"></div>

      <AnimatePresence>
        <motion.div
          key={activeSlide} 
          style={{
            backgroundImage: `url(${projectDetails[activeSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="w-full h-[70vh] md:h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute top-0 md:space-y-0 space-y-10 md:mt-0 left-5 md:left-20 h-full w-full md:w-1/3 flex flex-col md:justify-center p-5 md:p-10 font-primary">
            <motion.p
              key={projectDetails[activeSlide].title} 
              className="text-white font-bold text-3xl md:text-6xl w-full top-1/3 lg:absolute "
              initial={{ opacity: 0, x: -200, scale: 0.8 }} 
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {projectDetails[activeSlide].title}
            </motion.p>

            <motion.p
              key={projectDetails[activeSlide].description}
              className="text-white rounded-lg text-sm md:text-xl w-full font-Rubik top-1/2 lg:absolute "
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {projectDetails[activeSlide].description}
            </motion.p>

            <motion.a
              key={projectDetails[activeSlide].githubLink}
              href={projectDetails[activeSlide].githubLink}
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.5 },
              }}
              className="bottom-20 lg:absolute cursor-pointer text-white font-bold text-lg md:text-xl w-40 text-center border-2 rounded-2xl p-4 bg-gradient-to-tr from-purple-800 to-black"
            >
              GitHub
            </motion.a>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-0 left-1/2 md:right-0 transform -translate-x-1/2 md:-translate-x-0 h-[28vh] md:h-[70vh] mb-96 md:mb-0 w-[70vw] md:w-[60vw]">
      <Slider className="h-full" {...settings}>
          {projectDetails.map(
            ({ title, image, concepts, description, githubLink }, index) => (
              <div
                key={title}
                className={`my-20 mx-2   md:mx-10 h-full p-12 transition-transform duration-300 ${
                  index === activeSlide ? 'scale-125' : ''
                } ${
                  index - 1 === activeSlide ? 'scale-110 ' : ''
                } ${
                  index - 2 === activeSlide ? 'scale-90 ' : ''
                }`}
              >
                <ProjectCard
                  title={title}
                  image={image}
                  concepts={concepts}
                  description={description}
                  githubLink={githubLink}
                  isActive={index === activeSlide}
                />
              </div>
            )
          )}
        </Slider>
      </div>

      <div className="flex transition-all duration-1000 flex-row gap-2 w-full items-center justify-center absolute bottom-0 p-4">
        {projectDetails.map((element, index) => 
          <div key={index} className={`w-3 h-3 rounded-full bg-red-800 ${
            index === activeSlide ? 'animate-bounce bg-[#ee5236]' : ''
          }`}></div>
        )}
      </div>
    </div>
  );
}

export default Projects;
