import React, { useState } from 'react';
import classes from './form.module.css'; // Importez les classes du fichier form.module.css

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
    <div className={classes['form-container']}>
      {' '}
      {/* Utilisez les classes importées */}
      <h2>Contact Us</h2>
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
        <button type='submit'>Send</button>
        <button type='button' onClick={onCloseContact}>
          Close
        </button>
      </form>
    </div>
  );
};

export default Form;
