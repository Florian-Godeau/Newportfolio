import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    let isValid = true;
    const newErrors = {};

    if (!form.current.name.value) {
      newErrors.name = 'Nom requis';
      isValid = false;
    }

    if (!form.current.email.value) {
      newErrors.email = 'Veuillez saisir une adresse e-mail valide';
      isValid = false;
    } 

    if (!form.current.message.value) {
      newErrors.message = 'Message requis';
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      emailjs.sendForm('service_scakqbp', 'template_543m4oa', form.current, 'QFUwpYiiHkPRPqK5x')
        .then((result) => {
          console.log(result.text);
          setIsModalOpen(true); 
          form.current.reset(); 
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  return (
    <div className="animate">
    <section id="contact" className="contact">
      <div className="contact__box">
        <h2 className="contact__box__title">Me contacter</h2>
        <p className="contact__box__text">
          Pour toute demande ou question, n'hésitez pas à remplir le formulaire ci-dessous.<br></br>
          Je suis à votre écoute pour discuter de vos projets et vous proposer des solutions sur mesure 
          qui répondent à vos besoins spécifiques.<br></br> Mon objectif est de vous fournir un service de qualité, 
          adapté à vos attentes et aux exigences de votre secteur.
        </p>
        <div className="contact__box__container">
          <form ref={form} onSubmit={sendEmail} className="contact__box__container__form">
            <div className="contact__box__container__form__row">
              <div className="contact__box__container__form__row__input">
                <input type="text" name="name" placeholder="Nom" className={errors.name ? 'contact__box__container__form__row__input__inputError' : ''} />
                <span className="contact__box__container__form__row__input__errorMessage">{errors.name || ' '}</span>
              </div>
              <div className="contact__box__container__form__row__input">
                <input type="email" name="email" placeholder="Email" className={errors.email ? 'contact__box__container__form__row__input__inputError' : ''} />
                <span className="contact__box__container__form__row__input__errorMessage">{errors.email || ' '}</span>
              </div>
            </div>
            <div className="contact__box__container__form__row__input">
              <textarea name="message" placeholder="Message" className={errors.message ? 'contact__box__container__form__row__input__inputError' : ''} />
              <span className="contact__box__container__form__row__input__errorMessage">{errors.message || ' '}</span>
            </div>
            <button className="contact__box__container__form__submitButton" type="submit">
              <FontAwesomeIcon icon={faPaperPlane} /> Envoyer
            </button>
          </form>
        </div>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          contentLabel="Message Sent Confirmation"
          className="Modal-Contact"
          overlayClassName="Overlay"
        >
          <p className="Modal-Contact__text">Votre message a bien été envoyé. Merci de votre intérêt pour mon travail, je vous contacterais sous peu.</p>
          <button className="Modal-Contact__button" onClick={() => setIsModalOpen(false)}>Fermer</button>
        </Modal>
      </div>
    </section>
    </div>
  );
};
