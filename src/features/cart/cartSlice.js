import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    productNumber: 0,
  },
  reducers: {
    addToCarte: (state) => {
      state.productNumber += 1;
    },
    removeFromCart: (state) => {
      state.productNumber = Math.max(0, state.productNumber - 1);
    },
  },
});

export const { addToCarte, removeFromCart, productNumber } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
