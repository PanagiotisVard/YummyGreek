import React from 'react';
import Header from "../Header/Header";
import Footer from '../Footer/Footer';
import { Container, Typography, Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const centerTextStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '100px',
};

const buttonsContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  marginTop: '16px',
};

const sendOrderButtonStyles = {
  flex: 2, 
  marginRight: '8px', 
};

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
        <div style={centerTextStyles}>
          <Typography variant="h4">
            My Order
          </Typography>
        </div>
        <TableContainer>
          <Table>
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
        <div style={buttonsContainerStyles}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendOrder}
            style={sendOrderButtonStyles}
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
