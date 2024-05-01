import React, { useState } from 'react';
import Modal from '../Ui/Modal';
import TheButton from '../Ui/TheButton';
import Swal from 'sweetalert2';
import { getDocs, collection, where, query, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
import { MdLogout } from 'react-icons/md';
import classes from './AuthForm.module.css';

const AuthForm = ({ onCloseAuthForm, onShowSignUp, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    const dbref = collection(db, 'users');

    try {
      const emailMatch = query(dbref, where('Email', '==', email));
      const passwordMatch = query(dbref, where('Password', '==', password));
      const emailSnapshot = await getDocs(emailMatch);
      const emailArray = emailSnapshot.docs.map((doc) => doc.data());
      const passwordSnapshot = await getDocs(passwordMatch);
      const passwordArray = passwordSnapshot.docs.map((doc) => doc.data());

      if (isLogin) {
        if (emailArray.length > 0 && passwordArray.length > 0) {
          onLogin();
          Swal.fire({
            title: 'Successful!',
            text: 'You have logged in',
            icon: 'success',
          });
        } else {
          Swal.fire({
            title: 'Error!',
            text: 'Email or password is incorrect',
            icon: 'error',
          });
        }
      } else {
        const snapshot = await getDocs(emailMatch);
        const emailMatchingArray = snapshot.docs.map((doc) => doc.data());

        if (emailMatchingArray.length > 0) {
          Swal.fire({
            title: 'Error!',
            text: 'Email already exists',
            icon: 'error',
          });
        } else {
          await addDoc(dbref, {
            Email: email,
            Password: password,
          });

          onLogin();
          Swal.fire({
            title: 'Successful!',
            text: 'Your account has been created',
            icon: 'success',
          });
        }
      }
    } catch (error) {
      alert(error);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      handleAuth();
      setEmail('');
      setPassword('');
      onCloseAuthForm();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Modal>
      <h1 className={classes.formTitle}>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <div className={classes.formContainer}>
        <form onSubmit={handleSubmit}>
          <div className={classes.formGroup}>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={classes.formGroup}>
            <button
              type='button'
              className={classes.toggleButton}
              onClick={toggleAuthMode}
            >
              {isLogin
                ? "Don't have an account? Sign up"
                : 'Already have an account? Sign in'}
            </button>
          </div>
          <div className={classes.buttonsContainer}>
            {' '}
            {/* Container pour les deux derniers boutons */}
            <div className={classes.formGroup}>
              <TheButton type='submit' className={classes.formButton}>
                {isLogin ? 'Login' : 'Sign Up'}
              </TheButton>
            </div>
            <div className={classes.formGroup}>
              <TheButton
                type='button'
                onClick={onCloseAuthForm}
                className={classes.formButton}
              >
                {isLogin ? 'Close' : 'Cancel'}
              </TheButton>
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AuthForm;
