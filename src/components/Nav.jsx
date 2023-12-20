import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Nav() {
    return (
        <nav className="nav-card">
            <ul className="nav-list">
                <li>
                    <NavLink to="/about">
                        <FontAwesomeIcon icon={faUser} />
                        <span>À propos</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/skills">
                        <FontAwesomeIcon icon={faBook} />
                        <span>Compétences</span>
                    </NavLink>
                </li>
                <li>
                    
                        <FontAwesomeIcon icon={faBriefcase} />
                        <span>Mes projets</span>
                    
                </li>
                <li>
                    <NavLink to="/contact">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>Contact</span>
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
