import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HeroThreeSection.module.css';
import cheeseBurger from '../../assets/image/cheese burger.jpg';
import chickenBurger from '../../assets/image/chicken burger.jpg';
import margherita from '../../assets/image/margherita.webp';
import tonno from '../../assets/image/tonno.jpg';
import burrata from '../../assets/image/burrata.webp';
import frenchFries from '../../assets/image/french fries.jpg';
import redBull from '../../assets/image/redbull.webp';
import cocaCola from '../../assets/image/coca cola.jpg';
import fanta from '../../assets/image/fanta.jfif';
import HeroThreeContent from '../SectionComponents/HeroThreeContent';

//Data objects to be used in the HeroThree section for rendering dishes information
const burgers = [
  {
    id: 'd1',
    src: cheeseBurger,
    name: 'Cheese Burger',
    price: 15,
  },

  {
    id: 'd2',
    src: chickenBurger,
    name: 'Chicken Burger',
    price: 15,
  },
];

const pizzas = [
  {
    id: 'd3',
    src: margherita,
    name: 'Margherita',
    price: 10,
  },

  {
    id: 'd4',
    src: tonno,
    name: 'Tonno',
    price: 12,
  },

  {
    id: 'd5',
    src: burrata,
    name: 'Burrata',
    price: 15,
  },
];

const fries = [
  {
    id: 'd6',
    src: frenchFries,
    name: 'French Fries',
    price: 5,
  },
];
const drinks = [
  {
    id: 'd7',
    src: redBull,
    name: 'Red Bull',
    price: 3,
  },

  {
    id: 'd8',
    src: cocaCola,
    name: 'Coca Cola',
    price: 2,
  },

  {
    id: 'd9',
    src: fanta,
    name: 'Fanta Orange',
    price: 2,
  },
];
//END

const HeroThreeSection = () => {
  //Mapping the data from the object above and storing them in a variable
  const burgersList = burgers.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos='fade-up'
        data-aos-easing='ease-out'
        data-aos-duration='700'
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));

  const pizzasList = pizzas.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos='fade-up'
        data-aos-easing='ease-out'
        data-aos-duration='700'
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));
  const friesList = fries.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos='fade-up'
        data-aos-easing='ease-out'
        data-aos-duration='700'
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));
  const drinksList = drinks.map((dish) => (
    <Col lg={4} className={classes.dish_col}>
      <div
        data-aos='fade-up'
        data-aos-easing='ease-out'
        data-aos-duration='700'
      >
        <HeroThreeContent
          key={dish.id}
          id={dish.id}
          name={dish.name}
          src={dish.src}
          price={dish.price}
        />
      </div>
    </Col>
  ));
  //END

  //Rendering the Hero Three section
  return (
    <section id='dishes'>
      <Container>
        <Row
          className={`${classes.row} mx-auto`}
          data-aos='fade-up'
          data-aos-easing='ease-out'
          data-aos-duration='700'
        >
          <Col xs={12}>
            <div className={classes.header_div}>
              <h2>Our daily dishes</h2>
              <p>Check out recommended dishes of your choice</p>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_dish}>{burgersList}</Row>

        <Row>{pizzasList}</Row>
        <Row>{friesList}</Row>
        <Row>{drinksList}</Row>
      </Container>
    </section>
  );
  //END
};

export default HeroThreeSection;
