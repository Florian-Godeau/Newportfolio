import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
        <nav className="nav-card card-shadow">
            <ul className="nav-card__list">
                <li className='nav-card__list__li'>
                    <NavLink className="nav-card__list__li__link" to="/about">
                        <FontAwesomeIcon icon={faUser} className='nav-card__list__li__link__icon fa-icon'/>
                        <span className='nav-card__list__li__link__text'>À propos</span>
                    </NavLink>
                </li>
                <li className='nav-card__list__li'>
                    <NavLink className="nav-card__list__li__link" to="/skills">
                        <FontAwesomeIcon icon={faBook} className='nav-card__list__li__link__icon fa-icon'/>
                        <span className='nav-card__list__li__link__text'>Compétences</span>
                    </NavLink>
                </li>
                <li className='nav-card__list__li'>
                    <NavLink className="nav-card__list__li__link" to="/projects">
                        <FontAwesomeIcon icon={faBriefcase} className='nav-card__list__li__link__icon fa-icon'/>
                        <span className='nav-card__list__li__link__text'>Mes projets</span>
                    </NavLink>
                </li>
                <li className='nav-card__list__li'>
                    <NavLink className="nav-card__list__li__link" to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} className='nav-card__list__li__link__icon fa-icon'/>
                        <span className='nav-card__list__li__link__text'>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
