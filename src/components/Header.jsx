import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Me from "../assets/Florian Godeau.webp";

function Header() {
    return (
        <div className="header-card">
            <img src={Me} alt="Florian Godeau" className="header-image"/>
            <div className="header-content">
                <h1>Développeur Front-End</h1>
                <p>Florian Godeau</p>
            </div>
            <div className="social-links">
                <a href="https://github.com/Florian-Godeau" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/florian-godeau-650278267/" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} className="icon" />
                </a>
            </div>
        </div>
    );
}

export default Header;
