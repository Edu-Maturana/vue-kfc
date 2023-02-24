import axios from "axios";
const API_URL = "http://localhost:3000/products";

export const getProducts = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await axios.get(API_URL);
  return response.data;
};
