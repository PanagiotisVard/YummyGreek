import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import TuneIcon from "@mui/icons-material/Tune"; // Import the TuneIcon
import "./DishList.css";
import { useDishes } from "./useDishes";
import Dish from "./Dish";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DishesPage = () => {
  const navigate = useNavigate();
  const { dishes } = useDishes();
  const [filter, setFilter] = useState("All");
  const [anchorEl, setAnchorEl] = useState(null); // Anchor element for the Menu

  const filterDishesByTag = (tag) => {
    return dishes.filter((dish) =>
      dish.attributes.tags?.[0]?.tags.some((dishTag) => dishTag === tag)
    );
  };

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setAnchorEl(null); // Close the Menu when a filter is selected
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget); // Open the Menu
  };

  const handleSubmitOrder = () => {
    navigate("/order");
  };

  const renderDishes = () => {
    if (filter === "All") {
      return dishes.map((dish) => (
        <Grid item key={dish.id} xs={12} sm={6} md={4} lg={3}>
          {/* Remove the Link component */}
          <Dish dish={dish} />
        </Grid>
      ));
    } else {
      const filteredDishes = filterDishesByTag(filter);
      return filteredDishes.map((dish) => (
        <Grid item key={dish.id} xs={12} sm={6} md={4} lg={3}>
          {/* Remove the Link component */}
          <Dish dish={dish} />
        </Grid>
      ));
    }
  };

  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={0} justifyContent="flex-start" className="filter-buttons">
          <Grid item>
            <IconButton
              aria-label="Filter Menu"
              onClick={handleMenuOpen}
              style={{ backgroundColor: "orange", marginLeft: "16px" }}
            >
              <TuneIcon /> {/* Use TuneIcon */}
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleFilterChange("All")}>All</MenuItem>
              <MenuItem onClick={() => handleFilterChange("Vegan")}>Vegan</MenuItem>
              <MenuItem onClick={() => handleFilterChange("Lactose-Free")}>Lactose-Free</MenuItem>
              <MenuItem onClick={() => handleFilterChange("Gluten-Free")}>Gluten-Free</MenuItem>
            </Menu>
          </Grid>
        </Grid>
        <Grid container spacing={3} className="category">
          {renderDishes()}
        </Grid>
      </Container>
      <Grid container justifyContent="center" className="submit-order-button">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmitOrder}
            style={{ backgroundColor: "lite-0green", marginBottom: "100px" }}
          >
            Submit Order
          </Button>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
};

export default DishesPage;
