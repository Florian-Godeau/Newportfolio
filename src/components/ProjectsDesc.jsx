import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectsDesc({ project }) {
    if (!project) {
        return <div>Sélectionnez un projet</div>;
    }

    return (
        <div className="project-description">
            <img className="project-description__img" src={project.image} alt={project.title} />
            <h3 className="project-description__title">{project.title}</h3>
            <p className="project-description__desc">{project.description}</p>
            <p className="project-description__info">{project.info}</p>
            <div className="project-description__techlist">
                {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                ))}
            </div>
            <div className="project-description__links">
                <a 
                    className="project-description__links__githubLink" 
                    href={project.code} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Voir le code de ce projet"
                >
                    <FontAwesomeIcon icon={faSquareGithub} />
                </a>
                <a 
                    className="project-description__links__siteLink" 
                    href={project.page} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    title="Voir le site"
                >
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                </a>
            </div>
        </div>
    );
}

export default ProjectsDesc;
