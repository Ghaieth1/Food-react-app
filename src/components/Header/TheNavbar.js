import React, { useState } from 'react';
import NavCartButton from './NavCartButton';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/Logo/Logo.png';
import classes from './TheNavbar.module.css';
import Modal from '../Ui/Modal.js';
import Form from './Form.jsx';
import AuthForm from '../Auth/AuthForm';
import { MdLogin, MdLogout } from 'react-icons/md';
import Swal from 'sweetalert2';

const TheNavbar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showAuthForm, setShowAuthForm] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const contactModal = () => {
    setShowModal(true);
  };

  const authModal = () => {
    setShowAuthForm(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeAuthForm = () => {
    setShowAuthForm(false);
  };

  const login = () => {
    setIsLoggedIn(true); // Mettre à jour l'état de connexion
  };

  const logout = () => {
    setIsLoggedIn(false); // Mettre à jour l'état de connexion
    // Afficher le message de déconnexion
    Swal.fire({
      title: 'Logged out',
      text: 'You have been logged out successfully!',
      icon: 'success',
      confirmButtonText: 'OK',
    });
  };

  return (
    <>
      <Navbar
        expand='xl'
        className={`${classes.navbar} fixed-top`}
        data-aos='fade-down'
        data-aos-easing='ease-out'
        data-aos-duration='2000'
      >
        <Navbar.Brand className={classes.navbar_brand}>
          <Link to='hero' spy={true} smooth={true} offset={-50} duration={500}>
            <img src={Logo} alt='My logo' />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls='basic-navbar-nav'
          className={classes.toggle}
        />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className={`${classes.nav__linkgroup} ms-auto`}>
            <Nav.Link
              className={`${classes.nav__link} ${classes.firstnav__link} me-4`}
            >
              <Link
                activeClass={classes.active}
                to='hero'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Home
              </Link>
            </Nav.Link>

            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link
                activeClass={classes.active}
                to='dishes'
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
              >
                Menu
              </Link>
            </Nav.Link>
            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link onClick={contactModal}>Contact</Link>
            </Nav.Link>

            <Nav.Link href='#buttons' className={`${classes.nav__link}`}>
              <NavCartButton onClick={props.onShowCart} />
            </Nav.Link>
          </Nav>
          <Nav.Link>
            {isLoggedIn ? ( // Condition pour afficher Login ou Logout
              <Link onClick={logout} className={classes.loginLink}>
                <MdLogout className={classes.loginIcon} />
                <span className={classes.loginText}>Logout</span>
              </Link>
            ) : (
              <Link onClick={authModal} className={classes.loginLink}>
                <MdLogin className={classes.loginIcon} />
                <span className={classes.loginText}>Login</span>
              </Link>
            )}
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
      {showModal && (
        <Modal>
          <Form onCloseContact={closeModal} />
        </Modal>
      )}

      {showAuthForm && (
        <Modal>
          <AuthForm onCloseAuthForm={closeAuthForm} onLogin={login} />
        </Modal>
      )}
    </>
  );
};

export default TheNavbar;
