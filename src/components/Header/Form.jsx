import React, { useState } from 'react';
import classes from './form.module.css';
import TheButton from '../Ui/TheButton';
import Modal from '../Ui/Modal';
const Form = ({ onCloseContact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implémentez ici la logique pour soumettre le formulaire
  };

  return (
    <Modal>
      <div className={classes.about_modal}>
        <div className={classes.about_header}>
          <h2 className={classes.text_modal_header}>Contact</h2>
        </div>

        <div className={classes['form-container']}>
          {' '}
          {/* Utilisez les classes importées */}
          <form onSubmit={handleSubmit}>
            <div className={classes['form-group']}>
              {' '}
              {/* Utilisez les classes importées */}
              <input
                type='text'
                placeholder='Your Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className={classes['form-group']}>
              {' '}
              {/* Utilisez les classes importées */}
              <input
                type='email'
                placeholder='Your Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className={classes['form-group']}>
              {' '}
              {/* Utilisez les classes importées */}
              <input
                type='text'
                placeholder='Subject'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>
            <div className={classes['form-group']}>
              {' '}
              {/* Utilisez les classes importées */}
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
