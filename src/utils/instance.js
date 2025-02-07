import axios from "axios";

export const getTask = async () => {
  let response = await axios.get("https://fakestoreapi.com/products/");
  return response.data;
};

export const getCategories = async (category) => {
  let response = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return response.data;
};
