import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquareGithub } from '@fortawesome/free-brands-svg-icons';

function ProjectsDesc({ project }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        if (!project) return;

        const images = [project.image, project.image2];
        const intervalId = setInterval(() => {
            setFadeIn(false);

            setTimeout(() => {
                setCurrentImageIndex((currentImageIndex + 1) % images.length);
                setFadeIn(true);
            }, 500);
        }, 5000);

        return () => clearInterval(intervalId);
    }, [currentImageIndex, project]);

    if (!project) {
        return <div>Sélectionnez un projet</div>;
    }

    const images = project ? [project.image, project.image2] : ["", ""];

    const renderGithubLink = project.code && (
        <a
            className="project-description__links__githubLink"
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            title="Voir le code de ce projet"
        >
            <FontAwesomeIcon icon={faSquareGithub} />
        </a>
    );

    const renderPageLink = project.id === "4" ? (
        <a
            className="project-description__links__siteLink"
            href={project.presentation}
            target="_blank"
            rel="noopener noreferrer"
            title="Voir la présentation"
        >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
    ) : project.page && (
        <a
            className="project-description__links__siteLink"
            href={project.page}
            target="_blank"
            rel="noopener noreferrer"
            title="Voir le site"
        >
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </a>
    );

    return (
        <div className="project-description">
            <img
                className={`project-description__img ${fadeIn ? 'fade-in' : 'fade-out'}`}
                src={images[currentImageIndex]}
                alt={project.title}
            />
            <h3 className="project-description__title">{project.title}</h3>
            <p className="project-description__desc">{project.description}</p>
            <p className="project-description__info">{project.info}</p>
            <div className="project-description__techlist">
                {project.technologies.map((tech, index) => (
                    <span className="project-description__techlist__tag" key={index}>{tech}</span>
                ))}
            </div>
            <div className="project-description__links">
                {renderGithubLink}
                {renderPageLink}
            </div>
        </div>
    );
}

export default ProjectsDesc;
