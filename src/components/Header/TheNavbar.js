import React, { useState } from 'react';
import NavCartButton from './NavCartButton';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
import Logo from '../../assets/Logo/Logo.png';
import classes from './TheNavbar.module.css';
import Modal from '../Ui/Modal.js'; // Importez votre composant de modal
import Form from './Form.jsx';
import SignUp from '../Auth/SignUp.js';
import Login from '../Auth/Login.js'; // Importez le composant de connexion

const TheNavbar = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const contactModal = () => {
    setShowModal(true);
  };

  const signUpModal = () => {
    setShowSignUpModal(true);
  };

  const loginModal = () => {
    setShowLoginModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const closeSignUpModal = () => {
    setShowSignUpModal(false);
  };

  const closeLoginModal = () => {
    setShowLoginModal(false);
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

            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link onClick={signUpModal}>Sign Up</Link>
            </Nav.Link>

            <Nav.Link className={`${classes.nav__link} me-4`}>
              <Link onClick={loginModal}>Login</Link>
            </Nav.Link>

            <Nav.Link href='#buttons' className={`${classes.nav__link}`}>
              <NavCartButton onClick={props.onShowCart} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {showModal && (
        <Modal>
          <Form onCloseContact={closeModal} />
        </Modal>
      )}

      {showSignUpModal && (
        <Modal>
          <SignUp onCloseSignUp={closeSignUpModal} />
        </Modal>
      )}

      {showLoginModal && (
        <Modal>
          <Login onCloseLogin={closeLoginModal} />
        </Modal>
      )}
    </>
  );
};

export default TheNavbar;
