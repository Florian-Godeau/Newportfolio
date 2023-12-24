import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
        <nav className="nav-card card-shadow">
            <ul className="nav-list">
                <li>
                    <NavLink to="/about">
                        <FontAwesomeIcon icon={faUser} className='fa-icon'/>
                        <span>À propos</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skills">
                        <FontAwesomeIcon icon={faBook} className='fa-icon'/>
                        <span>Compétences</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects">
                        <FontAwesomeIcon icon={faBriefcase} className='fa-icon'/>
                        <span>Mes projets</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} className='fa-icon'/>
                        <span>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
