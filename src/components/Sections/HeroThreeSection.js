import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './HeroThreeSection.module.css';
import HeroThreeContent from '../SectionComponents/HeroThreeContent';

// Importez les images de vos plats
import cheeseBurger from '../../assets/image/cheese burger.jpg';
import chickenBurger from '../../assets/image/chicken burger.jpg';
import margherita from '../../assets/image/margherita.webp';
import tonno from '../../assets/image/tonno.jpg';
import burrata from '../../assets/image/burrata.webp';
import frenchFries from '../../assets/image/french fries.jpg';
import redBull from '../../assets/image/redbull.webp';
import cocaCola from '../../assets/image/coca cola.jpg';
import fanta from '../../assets/image/fanta orange.png';

const HeroThreeSection = () => {
  const [filter, setFilter] = useState('all');

  // Fonction pour changer le filtre
  const handleFilterChange = (category) => {
    setFilter(category);
  };

  //Data objects to be used in the HeroThree section for rendering dishes information
  const burgers = [
    {
      id: 'd1',
      src: cheeseBurger,
      name: 'Cheese Burger',
      price: 15,
      category: 'burgers',
    },
    {
      id: 'd2',
      src: chickenBurger,
      name: 'Chicken Burger',
      price: 15,
      category: 'burgers',
    },
  ];

  const pizzas = [
    {
      id: 'd3',
      src: margherita,
      name: 'Margherita',
      price: 10,
      category: 'pizzas',
    },
    {
      id: 'd4',
      src: tonno,
      name: 'Tonno',
      price: 12,
      category: 'pizzas',
    },
    {
      id: 'd5',
      src: burrata,
      name: 'Burrata',
      price: 15,
      category: 'pizzas',
    },
  ];

  const fries = [
    {
      id: 'd6',
      src: frenchFries,
      name: 'French Fries',
      price: 5,
      category: 'fries',
    },
  ];

  const drinks = [
    {
      id: 'd7',
      src: redBull,
      name: 'Red Bull',
      price: 3,
      category: 'drinks',
    },
    {
      id: 'd8',
      src: cocaCola,
      name: 'Coca Cola',
      price: 2,
      category: 'drinks',
    },
    {
      id: 'd9',
      src: fanta,
      name: 'Fanta Orange',
      price: 2,
      category: 'drinks',
    },
  ];
  //END

  // Fonction pour générer les plats à partir des données
  const renderDishes = (dishes) => {
    return dishes.map((dish) => (
      <Col lg={4} className={classes.dish_col}>
        <div
          data-aos='fade-up'
          data-aos-easing='ease-out'
          data-aos-duration='700'
          className={classes.dish_card}
        >
          <HeroThreeContent
            key={dish.id}
            name={dish.name}
            src={dish.src}
            price={dish.price}
          />
        </div>
      </Col>
    ));
  };

  // Rendu de la section Hero Three
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
            {/* Ajoutez les boutons de filtre */}
            <div className={classes.filter_section}>
              <Button
                className={`${classes.filter_button} ${classes.filter_button_motion}`}
                onClick={() => handleFilterChange('all')}
              >
                All
              </Button>
              <Button
                className={`${classes.filter_button} ${classes.filter_button_motion}`}
                onClick={() => handleFilterChange('burgers')}
              >
                Burgers
              </Button>
              <Button
                className={`${classes.filter_button} ${classes.filter_button_motion}`}
                onClick={() => handleFilterChange('pizzas')}
              >
                Pizzas
              </Button>
              <Button
                className={`${classes.filter_button} ${classes.filter_button_motion}`}
                onClick={() => handleFilterChange('fries')}
              >
                Fries
              </Button>
              <Button
                className={`${classes.filter_button} ${classes.filter_button_motion}`}
                onClick={() => handleFilterChange('drinks')}
              >
                Drinks
              </Button>
            </div>
          </Col>
        </Row>

        <Row className={classes.row_dish}>
          {/* Filtrer les plats en fonction de la catégorie sélectionnée */}
          {filter === 'all' && (
            <>
              {renderDishes(burgers)}
              {renderDishes(pizzas)}
              {renderDishes(fries)}
              {renderDishes(drinks)}
            </>
          )}
          {filter === 'burgers' && renderDishes(burgers)}
          {filter === 'pizzas' && renderDishes(pizzas)}
          {filter === 'fries' && renderDishes(fries)}
          {filter === 'drinks' && renderDishes(drinks)}
        </Row>
      </Container>
    </section>
  );
};

export default HeroThreeSection;
