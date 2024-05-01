import React, { useState } from 'react';
import Modal from '../Ui/Modal';
import TheButton from '../Ui/TheButton';
import Swal from 'sweetalert2';
import { getDocs, addDoc, collection, where, query } from 'firebase/firestore';
import { db } from '../../Firebase';

const SignUp = ({ onCloseSignUp, onShowLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dbref = collection(db, 'users');

  const signup = async () => {
    const matchEmail = query(dbref, where('Email', '==', email));

    try {
      const snapshot = await getDocs(matchEmail);
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

        // Affichez un message de succès uniquement si l'utilisateur est inscrit avec succès
        Swal.fire({
          title: 'Successful!',
          text: 'Your account has been created',
          icon: 'success',
        });
      }
    } catch (error) {
      alert(error);
    }
  };

  const toggleLogin = () => {
    onCloseSignUp();
    onShowLogin();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      signup();
      setEmail('');
      setPassword('');
      onCloseSignUp();
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <Modal>
      <div>
        <h1>Sign Up</h1>
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
          <button type='button' onClick={toggleLogin}>
            Already have an account? Sign in
          </button>
          <div className='buttons'>
            <TheButton type='submit'>Sign Up</TheButton>
            <TheButton type='button' onClick={onCloseSignUp}>
              Close
            </TheButton>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default SignUp;
