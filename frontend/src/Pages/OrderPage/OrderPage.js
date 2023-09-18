import React from 'react';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { Container, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './OrderPage.css'; // Import the CSS file


const backButtonStyles = {
  flex: 1,
  marginLeft: '8px',
  marginTop: '20px', 
};

// TODO: In the future the data will be fetched dynamically.
function Order() {
  // Sample data for dishes
  const dishes = [
    { name: 'Dish 1', price: 10.99, quantity: 2 },
    { name: 'Dish 2', price: 12.99, quantity: 1 },
    { name: 'Dish 3', price: 8.99, quantity: 3 },
  ];

  //TODO: Function to handle sending the order 
  const handleSendOrder = () => {

    console.log('Order sent:', dishes);
  };

  return (
    <div>
      <Header />
      <Container maxWidth="sm">
        <div className="order-box-container"> 
          <Typography variant="h5" className="order-box-heading"> 
            Your Order
          </Typography>
          <TableContainer>
            <Table className="order-table"> 
              <TableHead>
                <TableRow>
                  <TableCell>Dish Name</TableCell>
                  <TableCell>Price</TableCell>
                  <TableCell>Quantity</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dishes.map((dish, index) => (
                  <TableRow key={index}>
                    <TableCell>{dish.name}</TableCell>
                    <TableCell>${dish.price.toFixed(2)}</TableCell>
                    <TableCell>{dish.quantity}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="buttons-container"> 
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendOrder}
            className="send-order-button" 
          >
            SEND ORDER
          </Button>
          <Button
            component={Link}
            to="/"
            variant="contained"
            className="back-button"
            style={backButtonStyles}
          >
            BACK
          </Button>
        </div>
      </Container>
      <Footer />
    </div>
  );
}
export default Order;
