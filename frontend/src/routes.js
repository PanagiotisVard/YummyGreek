import React from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import Dishes from './Pages/DishesPage/DishesPage';
import AboutUs from './Pages/AboutUsPage/AboutUs'; // Import the AboutUs component
import Order from './Pages/OrderPage/OrderPage'; // Import the Order component

export default function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Navigate to="/dishes" /> },
    { path: '/dishes', element: <Dishes /> },
    { path: '/aboutus', element: <AboutUs /> }, // Route for the AboutUs page
    { path: '/order', element: <Order /> }, // Route for the Order page
  ]);

  return routes;
}
