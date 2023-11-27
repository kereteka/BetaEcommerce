// productSlice.js

import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
  name: "searchterm",
  initialState: {
    searchTerm: "",
  },
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { searchTerm, setSearchTerm } = searchTermSlice.actions;
export const searchTermReducer = searchTermSlice.reducer;
