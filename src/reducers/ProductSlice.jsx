import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
  name: "product",
  initialState: {
    filteredProduct: [], // This will hold the filtered products
    allProducts: [], // This will hold the full list of products
    isLoading: false,
  },

  reducers: {
    setProduct: (state, action) => {
      state.filteredProduct = action.payload; // Save the product list
      state.allProducts = action.payload; // Save the full list of products
      state.isLoading = false;
    },
    searchProduct: (state, action) => {
      // Filter products based on the search query, using allProducts
      state.filteredProduct = state.allProducts.filter((item) =>
        item.title.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setLoading: (state) => {
      state.isLoading = true;
    },
  },
});

export const { setProduct, searchProduct, setLoading } = ProductSlice.actions;
export default ProductSlice.reducer;
