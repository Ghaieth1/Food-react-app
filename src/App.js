import React, { useState } from 'react';
import TheNav from './components/Header/TheNav';
import Sections from './components/Sections/Sections';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvider';
import TheFooter from './components/Footer/TheFooter';
import Swal from 'sweetalert2';
import Form from '../src/components/Header/Form';
import SignUp from '../src/components/Auth/SignUp';
import Login from '../src/components/Auth/Login'; // Importez le composant Login

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false); // Ajoutez un état pour gérer l'affichage de la modal de connexion

  const onShowCartHandler = () => {
    setCartIsShown(true);
  };

  const onCloseCartHandler = () => {
    setCartIsShown(false);
  };

  const onOrderHandler = () => {
    setCartIsShown(false);

    Swal.fire({
      title: 'Successful!',
      text: 'Your order is on the way',
      icon: 'success',
    });
  };

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  const toggleSignUpForm = () => {
    setShowSignUpForm(!showSignUpForm);
  };

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onCloseCart={onCloseCartHandler} onOrder={onOrderHandler} />
      )}
      <TheNav
        onShowCart={onShowCartHandler}
        toggleContactForm={toggleContactForm}
        toggleSignUpForm={toggleSignUpForm}
        toggleLoginForm={toggleLoginForm} // Passez la fonction pour ouvrir ou fermer la modal de connexion
      />
      <Sections />
      <TheFooter />
      {showContactForm && <Form onOrder={onOrderHandler} />}
      {showSignUpForm && <SignUp onCloseSignUp={toggleSignUpForm} />}
      {showLoginForm && (
        <Login onCloseLogin={toggleLoginForm} onShowSignUp={toggleSignUpForm} />
      )}{' '}
      {/* Affichez la modal de connexion lorsque showLoginForm est vrai */}
    </CartProvider>
  );
};

export default App;
