import React from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";

const Dish = ({ dish }) => {
  const image = dish.attributes.image.data[0].attributes;

  // Define CSS styles to control the image size
  const imgStyle = {
    maxWidth: "100%", // Set the maximum width to 100% of its container
    maxHeight: "200px", // Set a maximum height (adjust as needed)
  };

  return (
    <Card className="dish-card">
      <CardImg style={imgStyle} top src={`http://localhost:1337${image.url}`} alt={image.name} />
      <CardBody>
        <CardTitle>{dish.attributes.name}</CardTitle>
        <CardSubtitle>
          <strong>Price: {dish.attributes.price}</strong>
        </CardSubtitle>
      </CardBody>
    </Card>
  );
};

export default Dish;
