import { useState, useEffect } from "react";
import axios from "axios";

export const useDishes = () => {
  const [dishes, setDishes] = useState([]);

  // Set the base URL for frontend requests
  axios.defaults.baseURL = "http://192.168.2.12:3000/dishes";

  const fetchDishes = async () => {
    try {
      const {
        data: { data },
      } = await axios.get("http://192.168.2.12:1337/api/dishes?populate=*");
      setDishes(data);
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  return { dishes };
};