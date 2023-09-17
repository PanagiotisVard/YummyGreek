// Order.js
import React from 'react';
import Header from "../Header/Header";
import Footer from "../Footer/Footer"

function Order() {
  return (
    <div>
    <Header></Header>
      <h1>Order</h1>
      <p>
        To place an order, please call us at: <strong>(123) 456-7890</strong> or use our online ordering system.
      </p>
      {/* You can add an order form or other content here */}
      <Footer></Footer>
    </div>
  );
}

export default Order;
