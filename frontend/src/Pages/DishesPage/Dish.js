import React, { useState } from "react";
import { Link } from 'react-router-dom';
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
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import Paper from "@mui/material/Paper";
import CloseIcon from "@mui/icons-material/Close"; // Import the close icon

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Dish = ({ dish }) => {
  const image = dish.attributes.image.data[0].attributes;

  // Define CSS styles to control the image size
  const imgStyle = {
    maxWidth: "100%",
    maxHeight: "200px",
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
    console.log(`Added ${quantity}x ${dish.attributes.name} to the order`);
  };

  // State to control the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
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

      {/* Ingredients Modal */}
      <Dialog
        open={modalOpen}
        onClose={closeModal}
        TransitionComponent={Transition}
        PaperProps={{
          style: {
            borderRadius: 10,
          },
        }}
      >
        {/* Close button */}
        <IconButton
          edge="end"
          color="inherit"
          onClick={closeModal}
          aria-label="close"
          style={{
            position: "absolute",
            top: "10px",
            right: "20px",
            marginLeft: "-16px", // Add left margin to move it to the left
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogTitle>Informations</DialogTitle>
        <DialogContent>
          <Typography variant="h5">Description:</Typography>
          <Typography>{dish.attributes.description}</Typography>
          <Typography variant="h5">Ingredients:</Typography>
          <Typography>{dish.attributes.ingredients}</Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dish;
