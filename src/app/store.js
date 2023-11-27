import { configureStore } from "@reduxjs/toolkit";
import { api } from "../features/product/api";
import { searchTermReducer } from "../features/product/searchTermSlice";
import { cartReducer } from "../features/cart/cartSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    searchTerm: searchTermReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export default store;
