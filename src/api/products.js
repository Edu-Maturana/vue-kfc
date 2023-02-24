import axios from "axios";
const API_URL = "http://localhost:3000/products";

export const getProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
