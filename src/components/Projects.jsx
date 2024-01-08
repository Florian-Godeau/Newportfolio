import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css';
import projectsData from '../datas/projects.json';
import ProjectsDesc from './ProjectsDesc';
import MobileSlider from './MobileSlider';
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

    useEffect(() => {
        // Trouver le bon élément DOM pour attacher l'événement wheel
        const sliderElement = sliderRef.current?.innerSlider?.list;

        const handleWheel = (e) => {
            if (e.deltaY < 0) {
                sliderRef.current.slickPrev();
            } else if (e.deltaY > 0) {
                sliderRef.current.slickNext();
            }
        };

        if (sliderElement) {
            sliderElement.addEventListener('wheel', handleWheel);
        }

        return () => {
            if (sliderElement) {
                sliderElement.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    return (
        <div className="animate">
            <section id='projects'>
                <div className="projects__container">
                    <h2 className='projects__container__title'>Mes projets</h2>
                    <div className='projects__container__desktop'>
                        <Slider className='projects__container__desktop__slider' ref={sliderRef} {...settings}>
                            {projectsData.map((project, index) => (
                                <div key={index}>
                                    <img className="desktop-slider-img" src={project.picture} alt={project.title} />
                                </div>
                            ))}
                        </Slider>
                        <div className="projects__container__desktop__slider-arrows">
                            <button onClick={() => sliderRef.current.slickPrev()} className="projects__container__desktop__slider-arrows__up">
                                <FontAwesomeIcon icon={faChevronUp} />
                            </button>
                            <button onClick={() => sliderRef.current.slickNext()} className="projects__container__desktop__slider-arrows__down">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </button>
                        </div>
                        <div className="project-description-container">
                            <ProjectsDesc project={projectsData[activeProjectIndex]} />
                        </div>
                    </div>
                    <div className='projects__container__mobile'>
                            <MobileSlider></MobileSlider>
                    </div>    
                </div>
            </section>
        </div>
    );
}
