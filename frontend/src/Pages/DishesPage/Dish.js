import React, { useState } from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle, Button } from "reactstrap";

const Dish = ({ dish }) => {
  const image = dish.attributes.image.data[0].attributes;

  // Define CSS styles to control the image size
  const imgStyle = {
    maxWidth: "100%", // Set the maximum width to 100% of its container
    maxHeight: "200px", // Set a maximum height (adjust as needed)
  };

  // State to track the quantity of the dish
  const [quantity, setQuantity] = useState(0);

  // State to track whether ingredients should be displayed
  const [ingredientsVisible, setIngredientsVisible] = useState(false);

  // Function to increment the quantity
  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Function to decrement the quantity (with a minimum of 0)
  const decrementQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  // Function to toggle the visibility of ingredients
  const toggleIngredients = () => {
    setIngredientsVisible(!ingredientsVisible);
  };

  // Function to add the dish to the order
  const addToOrder = () => {
    // You can implement the logic to add the dish to the order here
    // For example, you can store it in state or send it to a server.
    console.log(`Added ${quantity}x ${dish.attributes.name} to the order`);
  };

  return (
    <Card className="dish-card">
      <CardImg style={imgStyle} top src={`http://localhost:1337${image.url}`} alt={image.name} />
      <CardBody>
        <CardTitle>{dish.attributes.name}</CardTitle>
        <CardSubtitle>
          <strong>Price: {dish.attributes.price} €</strong>
        </CardSubtitle>
        <Button color="info" onClick={toggleIngredients}>
          Info
        </Button>
        {ingredientsVisible && (
          <div>
            <h5>Ingredients:</h5>
            <p>{dish.attributes.ingredients}</p>
          </div>
        )}
        <div className="quantity-controls">
          <Button color="primary" onClick={decrementQuantity}>-</Button>
          <span>{quantity}</span>
          <Button color="primary" onClick={incrementQuantity}>+</Button>
        </div>
        <Button color="success" onClick={addToOrder}>Add</Button>
        <p>{dish.attributes.description}</p>
      </CardBody>
    </Card>
  );
};

export default Dish;
