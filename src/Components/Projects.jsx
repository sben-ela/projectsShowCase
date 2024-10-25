import React, { useState } from "react";
import { projectDetails } from "../Details";
import ProjectCard from "./ProjectCard";
import "react-multi-carousel/lib/styles.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const [itemsInView, setItemsInView] = useState(3);
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

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button 
        className={`-mr-12 transform z-20 text-white p-3 rounded-full bg-red-500 shadow-lg ${className}`}
        style={{ ...style, display: "block", width: "60px", backgroundColor : 'gray', height: "60px", border: "2px solid rgba(255, 255, 255, 0.5)" }}
        onClick={onClick}
      >
        &rarr;
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button 
        className={`-ml-12 transform z-20 text-white p-3 rounded-full bg-red-500 shadow-lg ${className}`}
        style={{ ...style, display: "block",color :'red', backgroundColor : 'gray',  width: "60px", height: "60px", border: "2px solid rgba(255, 255, 255, 0.5)" }}
        onClick={onClick}
      >
        &larr;
      </button>
    );
  }
  

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: itemsInView,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="bg-gradient-to-bl flex items-center justify-center w-100 h-full from-gray-800 to-gray-900">
      <div className="relative h-[80vh] w-[80vw] mt-64">
        <Slider  {...settings}>
          {projectDetails.map(
            ({ title, image, description, extraContent, githubLink }) => (
              <div className="p-12" key={title}>
                <ProjectCard
                  title={title}
                  imageSrc={image}
                  description={description}
                  extraContent={extraContent}
                  githubLink={githubLink}
                />
              </div>
            )
          )}
        </Slider>
      </div>
    </div>
  );
}

export default Projects;
