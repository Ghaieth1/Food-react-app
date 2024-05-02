import React, { useState } from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import TheButton from '../Ui/TheButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HeroFourSection.module.css';

import Modal from '../Ui/Modal';
import discount from '../../assets/image/discount card.jpg';

const HeroFourSection = () => {
  const [showModal, setShowModal] = useState(false);

  const aboutModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  //Rendering the About section and the About Modal
  return (
    <>
      {showModal && (
        <Modal>
          <div className={classes.about_modal}>
            <div className={classes.about_header}>
              <h2 className={classes.text_modal_header}>Discount</h2>
            </div>
            <div className={classes.about_body}>
              <p className={classes.text_content}>
                You redeemed a discount promo code. Use it on your next order !.
              </p>
            </div>
            <div className={classes.about_footer}>
              <div className={classes.button_modal_div}>
                <TheButton onClick={closeModal}>Cancel</TheButton>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <section id='about'>
        <Container>
          <Row className={`${classes.row} mx-auto`}>
            <Col
              lg={6}
              data-aos='fade-right'
              data-aos-easing='ease-out'
              data-aos-duration='700'
            >
              <img
                src={discount}
                alt='discount card'
                onClick={aboutModal}
                width='1100px'
                height='auto'
                className={classes.hero_image}
              ></img>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
  //END
};

export default HeroFourSection;
