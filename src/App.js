import React, { useState } from 'react';
import TheNav from './components/Header/TheNav';
import Sections from './components/Sections/Sections';
import Cart from './components/Cart/Cart';
import CartProvider from './components/store/CartProvider';
import TheFooter from './components/Footer/TheFooter';
import Swal from 'sweetalert2';
import Form from '../src/components/Header/Form';
import AuthForm from '../src/components/Auth/AuthForm';
import Modal from '../src/components/Ui/Modal';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <CartProvider>
      {cartIsShown && (
        <Cart onCloseCart={onCloseCartHandler} onOrder={onOrderHandler} />
      )}
      <TheNav
        onShowCart={onShowCartHandler}
        toggleContactForm={toggleContactForm}
        toggleModal={toggleModal} // Passez la fonction pour ouvrir ou fermer la modal
      />
      <Sections />
      <TheFooter />
      {showContactForm && <Form onOrder={onOrderHandler} />}
      {showModal && (
        <Modal>
          <AuthForm onCloseAuth={closeModal} />
        </Modal>
      )}
    </CartProvider>
  );
};

export default App;
