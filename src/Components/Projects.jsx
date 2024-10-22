import React, { useState } from "react";
import { projectDetails } from "../Details";
import ProjectCard from "./ProjectCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectModal from "./ProjectModal";

function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [itemsInView, setItemsInView] = useState(3); 
  const [selectedProject, setSelectedProject] = useState(null); 
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1200, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };

  const handleResponsiveChange = (newResponsive) => {
    setItemsInView(newResponsive.desktop.items || 1);
  };

  const handleSlideChange = (previousSlide, { currentSlide }) => {
    setCurrentSlide(currentSlide);
  };

  const getMiddleCardIndex = () => {
    return Math.floor(itemsInView / 2);
  };

  const handleSeeMoreClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="bg-gradient-to-bl flex items-center h-[100vh] from-gray-600 to-gray-900 py-10">
      <div className="container mx-auto px-4">
        <Carousel
          responsive={responsive}
          showDots={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          afterChange={handleSlideChange}
          onResized={handleResponsiveChange}
        >
          {projectDetails.map(
            (
              { title, image, description, techstack, previewLink, githubLink },
              index
            ) => {
              const isMiddleCard = index === currentSlide + getMiddleCardIndex();

              return (
                <div
                  key={index}
                  className={`transition-transform duration-300 ${
                    isMiddleCard ? "scale-110 z-10" : "scale-100"
                  }`}
                >
                  <ProjectCard
                    title={title}
                    image={image}
                    description={description}
                    techstack={techstack}
                    previewLink={previewLink}
                    githubLink={githubLink}
                    onSeeMoreClick={() => handleSeeMoreClick({ title, image, description, techstack, previewLink, githubLink })} 
                  />
                </div>
              );
            }
          )}
        </Carousel>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
}

export default Projects;
