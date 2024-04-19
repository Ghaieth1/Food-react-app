import React, { useState } from 'react';
import TheNav from './components/Header/TheNav';
import Sections from './components/Sections/Sections';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvider';
import TheFooter from './components/Footer/TheFooter';
import Swal from 'sweetalert2';
import Form from '../src/components/Header/Form';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

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

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onCloseCart={onCloseCartHandler} onOrder={onOrderHandler} />
      )}
      <TheNav
        onShowCart={onShowCartHandler}
        toggleContactForm={toggleContactForm}
      />
      <Sections />
      <TheFooter />
      {showContactForm && <Form onOrder={onOrderHandler} />}{' '}
      {/* Affichez le formulaire lorsque showContactForm est vrai */}
    </CartProvider>
  );
};

export default App;
