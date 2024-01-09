import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Header() {

    const Me = "https://cdn.jsdelivr.net/gh/Florian-Godeau/Newportfolio@master/src/assets/FlorianGodeauimg/FlorianGodeau-medium.webp";
    
    return (
        <header className="header-card card-shadow">
            <img src={Me} alt="Florian Godeau" className="header-card__img"/>
            <div className='header-card__box'>
                <div className="header-card__box__content">
                    <h1 className='header-card__box__content__title'>Développeur Front-End</h1>
                    <p className='header-card__box__content__name'>Florian Godeau</p>
                </div>
                <div className="header-card__box__divider"></div>
                <div className='header-card__box__wrapper'>
                    <div className="header-card__box__wrapper__social">
                        <a href="https://github.com/Florian-Godeau" target="_blank" rel="noreferrer" className="header-card__box__wrapper__social__link">
                            <FontAwesomeIcon className='header-card__box__wrapper__social__link__icon' icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/florian-godeau-650278267/" target="_blank" rel="noreferrer" className="header-card__box__wrapper__social__link">
                            <FontAwesomeIcon className='header-card__box__wrapper__social__link__icon' icon={faLinkedin} />
                        </a>
                        <a href="https://discordapp.com/users/184657390233321472/" target="_blank" rel="noreferrer" className="header-card__box__wrapper__social__link">
                            <FontAwesomeIcon className='header-card__box__wrapper__social__link__icon' icon={faDiscord} />
                        </a>
                        <NavLink className="header-card__box__wrapper__social__link" to="/contact">
                            <FontAwesomeIcon icon={faEnvelope} className='header-card__box__wrapper__social__link__icon'/>
                        </NavLink>
                    </div>
                    <div className='header-card__box__wrapper__loc'>
                        <a href="https://www.google.com/maps/place/Villette-d'Anthon/" target="_blank" rel="noreferrer" className="header-card__box__wrapper__loc__link">
                            <FontAwesomeIcon className="header-card__box__wrapper__loc__link__icon" icon={faLocationDot} />
                            <div className='header-card__box__wrapper__loc__link__text'>
                                <span className="header-card__box__wrapper__loc__link__text__title"><strong>Localisation : </strong></span>
                                <span className='header-card__box__wrapper__loc__link__text__loc'>Villette d'Anthon, Isère</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;