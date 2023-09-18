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
  // const [priceRange, setPriceRange] = useState("All"); // Initialize with "All"
  
  const [anchorEl, setAnchorEl] = useState(null); // Anchor element for the Menu


  const filterDishesByTag = (tag) => {
    return dishes.filter((dish) =>
      dish.attributes.tags?.[0]?.tags.some((dishTag) => dishTag === tag)
    );
  };

  // const handlePriceRangeFilter = (newPriceRange) => {
  //   setPriceRange(newPriceRange);
  //   setAnchorEl(null); // Close the Menu when a filter is selected
  // };

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
    let filteredDishes = dishes;
  
    if (filter !== "All") {
      filteredDishes = filterDishesByTag(filter);
    }
  
    // // Price Range Filtering
    // switch (priceRange) {
    //   case "Under €10":
    //     filteredDishes = filteredDishes.filter((dish) => dish.attributes.price < 10);
    //     break;
    //   case "€10 - €20":
    //     filteredDishes = filteredDishes.filter((dish) => dish.attributes.price >= 10 && dish.attributes.price <= 20);
    //     break;
    //   case "€20 - €30":
    //     filteredDishes = filteredDishes.filter((dish) => dish.attributes.price >= 20 && dish.attributes.price <= 30);
    //     break;
    //   case "€30 - €40":
    //     filteredDishes = filteredDishes.filter((dish) => dish.attributes.price >= 30 && dish.attributes.price <= 40);
    //     break;
    //   case "Over €40":
    //     filteredDishes = filteredDishes.filter((dish) => dish.attributes.price > 40);
    //     break;
    //   default:
    //     // No price range filter applied
    //     break;
    // }
  
    return filteredDishes.map((dish) => (
      <Grid item key={dish.id} xs={12} sm={6} md={4} lg={3}>
        <Dish dish={dish} />
      </Grid>
    ));
  };
  

  return (
    <div>
      <Header />
      <Container>
        <Grid
          container
          spacing={0}
          justifyContent="flex-start"
          className="filter-buttons"
        >
          <Grid item>
            <IconButton
              aria-label="Filter Price"
              onClick={handleMenuOpen}
              style={{ backgroundColor: "orange", marginLeft: "16px" }}
            >
              <TuneIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => handleFilterChange("All")}>All</MenuItem>
              <MenuItem onClick={() => handleFilterChange("Vegan")}>
                Vegan
              </MenuItem>
              <MenuItem onClick={() => handleFilterChange("Lactose-Free")}>
                Lactose-Free
              </MenuItem>
              <MenuItem onClick={() => handleFilterChange("Gluten-Free")}>
                Gluten-Free
              </MenuItem>
              {/* Price Range Filter
              <MenuItem onClick={() => handlePriceRangeFilter("Under €10")}>
                Under €10
              </MenuItem>
              <MenuItem onClick={() => handlePriceRangeFilter("€10 - €20")}>
                €10 - €20
              </MenuItem>
              <MenuItem onClick={() => handlePriceRangeFilter("€20 - €30")}>
                €20 - €30
              </MenuItem>
              <MenuItem onClick={() => handlePriceRangeFilter("€30 - €40")}>
                €30 - €40
              </MenuItem>
              <MenuItem onClick={() => handlePriceRangeFilter("Over €40")}>
                Over €40
              </MenuItem> */}
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
            Show Order
          </Button>
        </Grid>
      </Grid>
      <Footer></Footer>
    </div>
  );
};

export default DishesPage;
