import axios from "axios";
const API_URL = "http://localhost:3000/products";

export const getProducts = () => {
  setTimeout(() => {
    return axios.get(API_URL);
  }, 1000);
};
