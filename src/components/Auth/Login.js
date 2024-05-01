import React, { useState } from 'react';
import Modal from '../Ui/Modal';
import TheButton from '../Ui/TheButton';
import Swal from 'sweetalert2';
import { getDocs, collection, where, query } from 'firebase/firestore';
import { db } from '../../Firebase';

const Login = ({ onCloseLogin, onShowSignUp }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    const dbref = collection(db, 'users');

    try {
      const emailMatch = query(dbref, where('Email', '==', email));
      const passwordMatch = query(dbref, where('Password', '==', password));
      const emailSnapshot = await getDocs(emailMatch);
      const emailArray = emailSnapshot.docs.map((doc) => doc.data());
      const passwordSnapshot = await getDocs(passwordMatch);
      const passwordArray = passwordSnapshot.docs.map((doc) => doc.data());
      if (emailArray.length > 0 && passwordArray.length > 0) {
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
    } catch (error) {
      alert(error);
    }
  };

  const toggleSignUp = () => {
    onCloseLogin();
    onShowSignUp();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login(); // Appel de la fonction de connexion
      setEmail('');
      setPassword('');
      onCloseLogin();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Modal>
      <div>
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor='email'>Email</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type='button' onClick={toggleSignUp}>
            Don't have an account? Sign up
          </button>
          <div className='buttons'>
            <TheButton type='submit'>Login</TheButton>
            <TheButton type='button' onClick={onCloseLogin}>
              Close
            </TheButton>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default Login;
