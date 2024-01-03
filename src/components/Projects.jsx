import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import projectsData from '../datas/projects.json';
import ProjectsDesc from './ProjectsDesc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const sliderRef = useRef();

    const settings = {
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: (current, next) => setActiveProjectIndex(next),
        arrows: false, 
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
    };

    return (
        <div className="projects-container">
            <Slider ref={sliderRef} {...settings}>
                {projectsData.map((project, index) => (
                    <div key={index}>
                        <img src={project.picture} alt={project.title} />
                    </div>
                ))}
            </Slider>
            <div className="slider-arrows">
                <button onClick={() => sliderRef.current.slickPrev()} className="slider-arrows__up">
                    <FontAwesomeIcon icon={faChevronUp} />
                </button>
                <button onClick={() => sliderRef.current.slickNext()} className="slider-arrows__down">
                    <FontAwesomeIcon icon={faChevronDown} />
                </button>
            </div>
            <div className="project-description-container">
                <ProjectsDesc project={projectsData[activeProjectIndex]} />
            </div>
        </div>
    );
}
