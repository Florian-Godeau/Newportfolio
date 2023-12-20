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
    <section id="contact">
      <h2>Me contacter</h2>
      <div className="container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="form-row">
            <div className="input-group">
              <input type="text" name="name" placeholder="Nom" className={errors.name ? 'input-error' : ''} />
              <span className="error-message">{errors.name || ' '}</span>
            </div>
            <div className="input-group">
              <input type="email" name="email" placeholder="Email" className={errors.email ? 'input-error' : ''} />
              <span className="error-message">{errors.email || ' '}</span>
            </div>
          </div>
          <div className="input-group">
            <textarea name="message" placeholder="Message" className={errors.message ? 'input-error' : ''} />
            <span className="error-message">{errors.message || ' '}</span>
          </div>
          <button className="submit-button" type="submit">
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
        <p>Votre message a bien été envoyé. Merci de votre intérêt pour mon travail, je vous contacterais sous peu.</p>
        <button onClick={() => setIsModalOpen(false)}>Fermer</button>
      </Modal>
    </section>
  );
};
