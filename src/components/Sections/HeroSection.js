import React from 'react';
import TheButton from '../Ui/TheButton';
import classes from './HeroSection.module.css';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import FoodImage from '../../assets/image/FoodImage.png';
import FastDelivery from '../../assets/image/fast.png';
import Circle from '../../assets/image/circle.png';
import Free from '../../assets/image/free.png';
import order from '../../assets/Icon/order.png';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSection = () => {
  return (
    <section id='hero' className={classes.heroSection}>
      <Container>
        <div
          style={{ width: '90%', backgroundColor: 'var(--primarybackground)' }}
        >
          <Row className={`${classes.row} mx-auto`}>
            <Col
              lg={6}
              className='p-0'
              data-aos='fade-right'
              data-aos-easing='ease-out'
              data-aos-duration='1500'
            >
              <div className={classes.text__div}>
                <h1>Taste Your Favorite Food at Foodle</h1>
                <p>
                  We are just a click away from you when you crave for delicious
                  food
                </p>

                <Link
                  className={classes.order_button}
                  to='dishes'
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                >
                  {/* Image avant le texte */}
                  <TheButton>
                    <img
                      src={order}
                      alt='order'
                      className={classes.order_icon}
                    />
                    Order Now
                  </TheButton>
                </Link>
              </div>
            </Col>
            <Col lg={6} className='p-0'>
              <div className={`ms-auto`}>
                <img
                  className={classes.food__image}
                  src={FoodImage}
                  fluid='true'
                  alt='Food pic'
                  data-aos='fade-left'
                  data-aos-easing='ease-out'
                  data-aos-duration='1500'
                ></img>
              </div>
            </Col>
          </Row>
        </div>
        <Row
          data-aos='fade-up'
          data-aos-easing='ease-out'
          data-aos-duration='700'
        >
          <div className={classes.number__properties}>
            <div>
              <img src={FastDelivery} alt='delivery' className={classes.img} />
              <p className={classes.number__properties__digit}>Fast Delivery</p>
              <p className={classes.number__properties__text}>
                Delivery to your home within 1 Hour of your ordering
              </p>
            </div>
            <div className='mx-4'>
              <img src={Circle} alt='fresh' className={classes.img} />
              <p className={classes.number__properties__digit}>Fresh Food</p>
              <p className={classes.number__properties__text}>
                Your food will be prepared with fresh ingredients
              </p>
            </div>
            <div>
              <img src={Free} alt='free' className={classes.img} />
              <p className={classes.number__properties__digit}>Free Delivery</p>
              <p className={classes.number__properties__text}>
                Food Delivery is absolutely free.
                <br />
                Just order and enjoy
              </p>
            </div>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
