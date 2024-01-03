import React, { useState, useEffect } from 'react';
import Me from "../assets/Florian Godeau.webp";
import SecondImage from "../assets/photokiwismall.webp"; // Assurez-vous que le chemin est correct

function About() {
    const [currentImage, setCurrentImage] = useState(Me);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(currentImage => (currentImage === Me ? SecondImage : Me));
        }, 10000); // Change l'image toutes les 10 secondes

        return () => clearInterval(intervalId); // Nettoyage de l'intervalle lors du démontage du composant
    }, []);

    return (
        <section id="about" className='about'>
            <h2 className='about__title'>À propos de moi :</h2>
            <div className='about__content'>
                <div className="about__content__imageContainer">
                    <img src={currentImage} alt="Florian Godeau" className="about__content__imageContainer__img"/>
                </div>
                <p className='about__content__text'>
                    Bonjour et bienvenue sur mon portfolio ! Je m'appelle Florian Godeau, et ma passion pour l'informatique a façonné mon parcours professionnel et personnel.

                    Mon aventure dans le monde de l'informatique a commencé avec un vif intérêt pour le hardware. J'ai d'abord embrassé le rôle de technicien de maintenance informatique, une expérience qui m'a permis de comprendre en profondeur le fonctionnement des systèmes informatiques et de développer une approche pragmatique et orientée solution.

                    Animé par la volonté d'élargir mes horizons et d'acquérir de nouvelles compétences, je me suis ensuite tourné vers le développement web. J'ai suivi avec succès une formation d'intégrateur web chez Openclassrooms, un voyage fascinant qui m'a permis de combiner ma rigueur technique avec une créativité nouvelle dans la conception de sites web.

                    Aujourd'hui, je suis fier de mettre à votre disposition mon expertise technique et ma passion pour l'informatique afin de créer des solutions web sur mesure, esthétiques et fonctionnelles. Chaque projet est pour moi une nouvelle aventure, une opportunité de relever des défis et de transformer vos idées en réalité numérique.

                    Découvrez mes travaux et n'hésitez pas à me contacter pour discuter de votre projet.
                </p>
            </div>
            <a className='about__cvLink' href="/path-to-your-CV.pdf" target="_blank" rel="noreferrer">Mon CV</a>
        </section>
    );
}

export default About;
