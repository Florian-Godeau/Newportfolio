import React, { useState, useEffect } from 'react';
import Me from "../assets/FlorianGodeauimg/FlorianGodeau-xlarge.webp";
import SecondImage from "../assets/FlorianGodeauimg/FlorianGodeauKiwi-xlarge.webp"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';

function About() {
    const images = [Me, SecondImage];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeIn, setFadeIn] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setFadeIn(false); 

            setTimeout(() => {
                setCurrentImageIndex((currentImageIndex + 1) % images.length); 
                setFadeIn(true); 
            }, 500); 
        }, 5000);

        return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentImageIndex]);

    return (
        <div className="animate">
        <section id="about" className='about'>
            <h2 className='about__title'>À propos de moi :</h2>
            <div className='about__content'>
                <div className="about__content__imageContainer">
                    <img 
                        src={images[currentImageIndex]} 
                        alt="Florian Godeau" 
                        className={`about__content__imageContainer__img ${fadeIn ? 'fade-in' : 'fade-out'}`}
                    />
                </div>
                <p className='about__content__text'>
                    Bonjour et bienvenue sur mon portfolio ! Je m'appelle Florian Godeau, et ma passion pour l'informatique a façonné mon parcours professionnel et personnel.
                    <br /><br />
                    Mon aventure dans le monde de l'informatique a commencé avec un vif intérêt pour le hardware. J'ai d'abord embrassé le rôle de technicien de maintenance informatique, une expérience qui m'a permis de comprendre en profondeur le fonctionnement des systèmes informatiques et de développer une approche pragmatique et orientée solution.
                    <br /><br />
                    Animé par la volonté d'élargir mes horizons et d'acquérir de nouvelles compétences, je me suis ensuite tourné vers le développement web. J'ai suivi avec succès une formation d'intégrateur web chez Openclassrooms, un voyage fascinant qui m'a permis de combiner ma rigueur technique avec une créativité nouvelle dans la conception de sites web.
                    <br /><br />
                    Aujourd'hui, je suis fier de mettre à votre disposition mon expertise technique et ma passion pour l'informatique afin de créer des solutions web sur mesure, esthétiques et fonctionnelles. Chaque projet est pour moi une nouvelle aventure, une opportunité de relever des défis et de transformer vos idées en réalité numérique.
                    <br /><br />
                    Découvrez mes travaux et n'hésitez pas à me contacter pour discuter de votre projet.
                </p>
            </div>
            <a className='about__cvLink' href="/path-to-your-CV.pdf" target="_blank" rel="noreferrer">
                Mon CV <FontAwesomeIcon icon={faFile} />
            </a>
        </section>
        </div>
    );
}

export default About;
