import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Button from "@mui/material/Button";


const Dish = ({ dish }) => {
  const image = dish.attributes.image.data[0].attributes;

  // Define CSS styles to control the image size
  const imgStyle = {
    maxWidth: "100%",
    maxHeight: "200px",
  };

  // State to track the quantity of the dish
  const [quantity, setQuantity] = useState(0);

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

  // Function to add the dish to the order
  const addToOrder = () => {
    console.log(`Added ${quantity}x ${dish.attributes.name} to the order`);
  };

  return (
    <div>
      <Card className="dish-card">
        <CardMedia
          component="img"
          src={`http://localhost:1337${image.url}`}
          alt={image.name}
          style={imgStyle}
        />
        <CardContent>
          <CardHeader title={dish.attributes.name} />
          <Typography variant="subtitle1">
            <strong>Price: {dish.attributes.price} €</strong>
          </Typography>
          <IconButton onClick={decrementQuantity} color="error">
            <RemoveCircleOutlineIcon fontSize="large" />
          </IconButton>
          <span>{quantity}</span>
          <IconButton onClick={incrementQuantity} color="primary">
            <AddCircleOutlineIcon fontSize="large" />
          </IconButton>
          <Link
            to={`/dish/${dish.id}`} // Navigate to the dynamic DishInfoPage route with the dish ID
          >
            <IconButton color="primary">
              <InfoOutlinedIcon fontSize="large" />
            </IconButton>
          </Link>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <Button variant="contained" color="success" onClick={addToOrder}>
              Add
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dish;
