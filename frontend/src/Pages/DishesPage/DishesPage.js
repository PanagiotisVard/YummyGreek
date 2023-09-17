import React, { useState } from "react";
import "./DishList.css";
import { useDishes } from "./useDishes";
import { Button } from "reactstrap";
import Dish from "./Dish";

const DishesPage = () => {
  const { dishes } = useDishes();
  const [filter, setFilter] = useState("All"); // Initial filter state

  // Function to filter dishes based on tags
  const filterDishesByTag = (tag) => {
    return dishes.filter((dish) => dish.attributes.tags.includes(tag));
  };

  // Function to handle filter changes
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // Render dishes based on the current filter
  const renderDishes = () => {
    if (filter === "All") {
      return dishes.map((dish, index) => (
        <div key={dish.id} style={{ marginRight: index < dishes.length - 1 ? "5px" : "0" }}>
          <Dish dish={dish} />
        </div>
      ));
    } else {
      const filteredDishes = filterDishesByTag(filter);
      return filteredDishes.map((dish, index) => (
        <div key={dish.id} style={{ marginRight: index < filteredDishes.length - 1 ? "5px" : "0" }}>
          <Dish dish={dish} />
        </div>
      ));
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <header className="header">
        <div className="logo">
          <img src="Logotype" alt="YummyGreek" />
        </div>
      </header>
      <div className="filter-buttons" style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <Button color="primary" onClick={() => handleFilterChange("All")}>
          All
        </Button>
        <Button color="primary" onClick={() => handleFilterChange("Vegan")}>
          Vegan
        </Button>
        <Button color="primary" onClick={() => handleFilterChange("Lactose-Free")}>
          Lactose-Free
        </Button>
        <Button color="primary" onClick={() => handleFilterChange("Gluten-Free")}>
          Gluten-Free
        </Button>
        <Button color="primary" onClick={() => handleFilterChange("Nut-Free")}>
          Nut-Free
        </Button>
      </div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>Enjoy our dishes!</h2>
      <div className="category" style={{ display: "flex", justifyContent: "flex-start", marginLeft: "20px" }}>
        {renderDishes()}
      </div>
    </div>
  );
};

export default DishesPage;
