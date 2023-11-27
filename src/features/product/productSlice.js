// productSlice.js

import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    // allProducts: [],
    searchResults: [],
  },
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
  },
});

export const { searchResults, setSearchResults } = productSlice.actions;
export const productReducer = productSlice.reducer;
