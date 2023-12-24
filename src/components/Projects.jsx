import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import projectsData from '../datas/projects.json';

export default function Projects() {
    return (
        <section id="projects">
            <h2>Mes projets</h2>
            <div className="carousel-container">
                <Carousel showArrows={true} autoPlay={true} infiniteLoop={true}>
                    {projectsData.map(project => (
                        <div key={project.id}>
                            <img src={project.picture} alt={project.title} />
                            <p className="legend">{project.title}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
}
