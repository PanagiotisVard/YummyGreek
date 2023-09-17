import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Typography, Container, Paper, Button } from "@mui/material";
import { styled } from "@mui/system";
import "./DishInfoPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DishInfoContainer = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(3),
  opacity: 0,
  transition: "opacity 1s ease",
  position: "relative",
  // Adjust position and styling for the "BACK" button
  "& .back-button": {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const DishInfoPage = () => {
  const { id } = useParams();
  const [dish, setDish] = useState(null);

  useEffect(() => {
    const fetchDishById = async () => {
      try {
        const response = await axios.get(
          `http://localhost:1337/api/dishes/${id}?populate=*`
        );
        const fetchedDish = response.data.data;
        setDish(fetchedDish);
      } catch (error) {
        console.error("Error fetching dish details:", error);
      }
    };

    fetchDishById();
  }, [id]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (dish) {
        // Set opacity to 1 when the dish data is available
        document.getElementById("dish-info-container").style.opacity = 1;
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [dish]);

  if (!dish) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <DishInfoContainer id="dish-info-container" elevation={3}>
          <Typography variant="h4" gutterBottom>
            {dish.name}
          </Typography>
          <Typography variant="body1">
            <strong>Description:</strong> {dish.attributes.description}
          </Typography>
          <Typography variant="body1">
            <strong>Ingredients:</strong> {dish.attributes.ingredients}
          </Typography>
          {/* "BACK" button with the same fade-in effect */}
          <Button
            className="back-button"
            component={Link}
            to="/dishes"
            variant="contained"
          >
            BACK
          </Button>
        </DishInfoContainer>
      </Container>
      <Footer />
    </div>
  );
};

export default DishInfoPage;
