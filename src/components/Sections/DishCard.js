import React from 'react';
import { Card, Button } from 'react-bootstrap';
import classes from './DishCard.module.css'; // Assurez-vous d'avoir un fichier CSS pour les styles de votre carte

const DishCard = ({ name, src, price }) => {
  return (
    <Card className={classes.dish_card}>
      <Card.Img variant='top' src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className={classes.price}>Price: ${price}</Card.Text>
        <Button variant='primary'>Add</Button>
      </Card.Body>
    </Card>
  );
};

export default DishCard;
