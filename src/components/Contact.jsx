import React, { useRef, useState } from "react";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

export default function Contact() {
  const form = useRef();
  const [errors, setErrors] = useState({});

  const sendEmail = (e) => {
    e.preventDefault();
    if (!form.current.name.value) {
      setErrors(prev => ({ ...prev, name: 'Nom requis' }));
    } else {
      setErrors(prev => ({ ...prev, name: '' }));
    }

    if (!form.current.email.value) {
      setErrors(prev => ({ ...prev, email: 'Email requis' }));
    } else {
      setErrors(prev => ({ ...prev, email: '' }));
    }

    if (!form.current.message.value) {
      setErrors(prev => ({ ...prev, message: 'Message requis' }));
    } else {
      setErrors(prev => ({ ...prev, message: '' }));
    }

    if (form.current.name.value && form.current.email.value && form.current.message.value) {
      emailjs.sendForm("service_scakqbp", "template_543m4oa", form.current, "QFUwpYiiHkPRPqK5x").then(
        (result) => {
          console.log(result.text);
          // Gérer le succès ici, par exemple réinitialiser le formulaire
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <section id="contact">
      <h2>Me contacter</h2>
      <div className="container">
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="form-row">
            <div className="input-group">
              <input 
                type="text" 
                name="name" 
                placeholder="Nom" 
                className={errors.name ? 'input-error' : ''} 
              />
              <span className={`error-message ${!errors.name ? 'invisible' : ''}`}>
                {errors.name || ' '}
              </span>
            </div>

            <div className="input-group">
              <input 
                type="email" 
                name="email" 
                placeholder="Email" 
                className={errors.email ? 'input-error' : ''} 
              />
              <span className={`error-message ${!errors.email ? 'invisible' : ''}`}>
                {errors.email || ' '}
              </span>
            </div>
          </div>

          <div className="input-group">
            <textarea 
              name="message" 
              placeholder="Message" 
              className={errors.message ? 'input-error' : ''} 
            />
            <span className={`error-message ${!errors.message ? 'invisible' : ''}`}>
                {errors.message || ' '}
            </span>
          </div>

          <button className="submit-button" type="submit">
            <FontAwesomeIcon icon={faPaperPlane} />
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
};