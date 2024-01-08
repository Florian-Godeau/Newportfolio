import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin,} from '@fortawesome/free-brands-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Me from "../assets/Florian Godeau.webp";

function Header() {
    return (
        <header className="header-card card-shadow">
            <img src={Me} alt="Florian Godeau" className="header-card__img"/>
            <div className="header-card__content">
                <h1 className='header-card__content__title'>Développeur Front-End</h1>
                <p className='header-card__content__name'>Florian Godeau</p>
            </div>
            <div className='header-card__wrapper'>
                <div className="header-card__wrapper__social">
                    <a href="https://github.com/Florian-Godeau" target="_blank" rel="noreferrer" className="header-card__wrapper__social__link">
                        <FontAwesomeIcon className='header-card__wrapper__social__link__icon' icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/florian-godeau-650278267/" target="_blank" rel="noreferrer" className="header-card__wrapper__social__link">
                        <FontAwesomeIcon className='header-card__wrapper__social__link__icon' icon={faLinkedin} />
                    </a>
                </div>
                <div className='header-card__wrapper__loc'>
                    <a href="https://www.google.com/maps/place/Villette-d'Anthon/" target="_blank" rel="noreferrer" className="header-card__wrapper__loc__link">
                        <FontAwesomeIcon className="header-card__wrapper__loc__link__icon" icon={faLocationDot} />
                        <span className="header-card__wrapper__loc__link__text"><strong>Localisation : </strong>Villette d'Anthon, Isère</span>
                    </a>
                </div>
            </div>
        </header>
    );
}

export default Header;