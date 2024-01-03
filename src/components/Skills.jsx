import React from 'react';
import Flipskill from '../components/Flipskill';
import logosData from '../datas/logoSkills.json';

function LogosList() {
  const softSkills = ["Autonomie", "Rigueur", "Adaptabilité", "Curiosité", "Empathie", "Communication"];

  return (
    <section id='skills' className="skills-container">
        <h2>Compétences</h2>
        <div className="skills-content">
            <div className="logos-list">
                {logosData.map((logo) => (
                    <Flipskill key={logo.id} imageFront={logo.imageFront} imageBack={logo.imageBack} />
                ))}
            </div>
            <div className="divider"></div>
            <div className="soft-skills">
                <ul>
                    {softSkills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  );
}

export default LogosList;
