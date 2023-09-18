import React from 'react';
import { useRoutes,  Navigate} from 'react-router-dom';
import Dishes from './Pages/DishesPage/DishesPage';
import AboutUs from './Pages/AboutUsPage/AboutUs';
import Order from './Pages/OrderPage/OrderPage';
import DishInfoPage from './Pages/DishInfoPage/DishInfoPage'; 

export default function AppRoutes() {
  const routes = useRoutes([
    { path: '/', element: <Navigate to="/dishes" /> },
    { path: '/dishes', element: <Dishes /> },
    { path: '/aboutus', element: <AboutUs /> },
    { path: '/order', element: <Order /> },
    { path: '/dish/:id', element: <DishInfoPage /> }, 
  ]);

  return routes;
}
