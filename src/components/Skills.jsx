import React from 'react';
import Flipskill from '../components/Flipskill';
import logosData from '../datas/logoSkills.json';

function LogosList() {
  const softSkills = ["Autonomie", "Rigueur", "Adaptabilité", "Curiosité", "Empathie", "Communication"];

  return (
    <div className="animate">
        <section id='skills' className="skills-container">
            <h2 className="skills-container__title">Compétences</h2>
            <div className="skills-container__content">
                <div className="skills-container__content__logos-list">
                    {logosData.map((logo) => (
                        <Flipskill key={logo.id} imageFront={logo.imageFront} imageBack={logo.imageBack} />
                    ))}
                </div>
                <div className="skills-container__content__divider"></div>
                <div className="skills-container__content__soft-skills">
                    <ul className="skills-container__content__soft-skills__list">
                        {softSkills.map((skill, index) => (
                            <li className="skills-container__content__soft-skills__list__name" key={index}>{skill}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    </div>
  );
}

export default LogosList;
