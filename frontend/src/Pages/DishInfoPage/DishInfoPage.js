import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { Typography, Container, Paper, Button, Box } from "@mui/material";
import "./DishInfoPage.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

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

  if (!dish) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <Paper className="dish-info-container">
          <Typography variant="h4" gutterBottom>
            {dish.name}
          </Typography>
          <Typography variant="body1">
            <strong>Description:</strong> {dish.attributes.description}
          </Typography>
          <Typography variant="body1">
            <strong>Ingredients:</strong> {dish.attributes.ingredients}
          </Typography>
        </Paper>
        {/* Centered "BACK" button */}
        <Box display="flex" justifyContent="center" marginTop="10px">
          <Button
            component={Link}
            to="/dishes"
            variant="contained"
            color="error"
          >
            BACK
          </Button>
        </Box>
      </Container>
      <Footer />
    </div>
  );
};

export default DishInfoPage;
