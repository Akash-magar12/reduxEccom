import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cartProduct: [],
  },
  reducers: {
    addCart: (state, action) => {
      const existingItem = state.cartProduct.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartProduct = [
          ...state.cartProduct,
          { ...action.payload, quantity: 1 },
        ];
      }
    },
    removeCart: (state, action) => {
      state.cartProduct = state.cartProduct.filter(
        (item) => item.id !== action.payload
      );
    },
    emptyCart: (state) => {
      state.cartProduct = [];
    },
    increaseQuantity: (state, action) => {
      state.cartProduct = state.cartProduct.map((item) =>
        item.id === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    },
    // decreaseQuantity: (state, action) => {
    //   state.cartProduct = state.cartProduct.map((item) =>
    //     item.id === action.payload
    //       ? {
    //           ...item,
    //           quantity: item.quantity > 0 ? item.quantity - 1 : item.quantity,
    //         }
    //       : item
    //   );
    // },
    decreaseQuantity: (state, action) => {
      state.cartProduct = state.cartProduct
        .map((item) => {
          if (item.id === action.payload) {
            // Decrease quantity if greater than 1
            return { ...item, quantity: item.quantity - 1 };
            
          }
          return item;
        })
        .filter((item) => item.quantity > 0); // Remove items with quantity <= 0
    },
  },
});

export const {
  addCart,
  removeCart,
  emptyCart,
  increaseQuantity,
  decreaseQuantity,
} = CartSlice.actions;
export default CartSlice.reducer;
