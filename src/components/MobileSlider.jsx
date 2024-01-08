import React, { useState } from 'react';
import Modal from 'react-modal';
import projectsData from '../datas/projects.json';
import ProjectsDesc from './ProjectsDesc';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faXmark } from '@fortawesome/free-solid-svg-icons';

const Slidertest = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const goToNext = () => {
        setCurrentIndex(currentIndex === projectsData.length - 1 ? 0 : currentIndex + 1);
    };

    const goToPrev = () => {
        setCurrentIndex(currentIndex === 0 ? projectsData.length - 1 : currentIndex - 1);
    };

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="mobile__slider">
            <div className="mobile__slider__container">
                <div className='mobile__slider__container__slider'>
                    <button onClick={goToPrev} className="mobile__slider__container__slider__arrow">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                    <img className="mobile__slider__container__slider__slide-img" src={projectsData[currentIndex].picture} alt={projectsData[currentIndex].title} />
                    <button onClick={goToNext} className="mobile__slider__container__slider__arrow">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </button>
                </div>
                <div className="mobile__slider__container__project-info">
                    <h3>{projectsData[currentIndex].title}</h3>
                    <p>{projectsData[currentIndex].description}</p>
                    <button className="mobile__slider__container__project-info__button" onClick={openModal}>En savoir plus</button>
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Project Details"
                className="project-modal"
                overlayClassName="project-overlay"
            >
                <button onClick={closeModal} className="project-modal__close-button">
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <ProjectsDesc project={projectsData[currentIndex]} />
            </Modal>
        </div>
    );
};

export default Slidertest;
