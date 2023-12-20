import React from 'react';
import Flipskill from '../components/Flipskill';
import logosData from '../datas/logoSkills.json';

function LogosList() {
  return (
    <section id='skills'>
        <h2>Compétences</h2>
        <div className="logos-list">
        {logosData.map((logo) => (
            <Flipskill key={logo.id} imageFront={logo.imageFront} imageBack={logo.imageBack} />
        ))}
        </div>
    </section>
  );
}

export default LogosList;