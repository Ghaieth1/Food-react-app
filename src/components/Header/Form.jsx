import React, { useState } from 'react';
import classes from './form.module.css';
import TheButton from '../Ui/TheButton';
import Modal from '../Ui/Modal';
import Swal from 'sweetalert2';

const Form = ({ onCloseContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Vérifiez si le formulaire est valide avant de soumettre
    if (name && email && subject && message) {
      // Réinitialisation des champs du formulaire après soumission
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      // Fermez la modal après l'envoi du formulaire
      onCloseContact();
      // Affichez un message de succès après 1 seconde
      setTimeout(() => {
        Swal.fire({
          title: 'Successful!',
          text: 'Your message has been sent',
          icon: 'success',
        });
      }, 300);
    } else {
      // Affichez un message d'erreur si le formulaire n'est pas valide
      alert('Please fill in all fields');
    }
  };

  return (
    <Modal>
      <div className={classes.about_modal}>
        <div className={classes.about_header}>
          <h2 className={classes.text_modal_header}>Contact</h2>
        </div>

        <div className={classes['form-container']}>
          <form onSubmit={handleSubmit}>
            <div className={classes['form-group']}>
              <input
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={classes['form-group']}>
              <input
                type='email'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={classes['form-group']}>
              <input
                type='text'
                placeholder='Subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className={classes['form-group']}>
              <textarea
                placeholder='Your Message'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <div className={classes.buttons}>
              <TheButton type='submit' className={` ${classes.btn_style} me-2`}>
                Send
              </TheButton>
              <TheButton
                type='button'
                onClick={onCloseContact}
                className={` ${classes.btn_style} me-2`}
              >
                Close
              </TheButton>
            </div>
          </form>
        </div>
      </div>
    </Modal>
  );
};

export default Form;
