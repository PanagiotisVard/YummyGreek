import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import "./DishList.css";
import { useDishes } from "./useDishes";
import Dish from "./Dish";
import Header from "../Header/Header";
import Footer from "../Footer/Footer"; 

const DishesPage = () => {
  const navigate = useNavigate();
  const { dishes } = useDishes();
  const [filter, setFilter] = useState("All");

  const filterDishesByTag = (tag) => {
    return dishes.filter((dish) => dish.attributes.tags.includes(tag));
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const handleSubmitOrder = () => {
    navigate("/order");
  };

  const renderDishes = () => {
    if (filter === "All") {
      return dishes.map((dish, index) => (
        <Grid item key={dish.id} xs={12} sm={6} md={4} lg={3}>
          <Dish dish={dish} />
        </Grid>
      ));
    } else {
      const filteredDishes = filterDishesByTag(filter);
      return filteredDishes.map((dish, index) => (
        <Grid item key={dish.id} xs={12} sm={6} md={4} lg={3}>
          <Dish dish={dish} />
        </Grid>
      ));
    }
  };

  return (
    <div>
    <Header/>
      <Container>
        <Grid
          container
          spacing={0}
          justifyContent="center"
          className="filter-buttons"
        >
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleFilterChange("All")}
              style={{ backgroundColor: "orange" }}
            >
              All
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleFilterChange("Vegan")}
              style={{ backgroundColor: "orange" }}
            >
              Vegan
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleFilterChange("Lactose-Free")}
              style={{ backgroundColor: "orange" }}
            >
              Lactose-Free
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleFilterChange("Gluten-Free")}
              style={{ backgroundColor: "orange" }}
            >
              Gluten-Free
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleFilterChange("Nut-Free")}
              style={{ backgroundColor: "orange" }}
            >
              Nut-Free
            </Button>
          </Grid>
        </Grid>
        <Grid container spacing={3} className="category">
          {renderDishes()}
        </Grid>
        <Grid container justifyContent="center" className="submit-order-button">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitOrder}
              style={{ backgroundColor: "blue" }}
            >
              Submit Order
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default DishesPage;
