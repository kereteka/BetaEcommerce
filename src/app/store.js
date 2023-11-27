// // store.js
// import { configureStore } from "@reduxjs/toolkit";
// import { sessionSlice } from "../features/auth/sessionSlice";

// const store = configureStore({
//   reducer: {
//     // sessionSlice: sessionSlice.reducer,
//     [sessionSlice.reducerPath]: sessionSlice.reducer,
//     // Add other reducers as needed
//   },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(sessionSlice.middleware),
// });

// export default store;

// store.js
import { configureStore } from "@reduxjs/toolkit";
import { api } from "../features/product/api";
import { productReducer } from "../features/product/productSlice";
import { searchTermReducer } from "../features/product/searchTermSlice";
import { cartReducer } from "../Features/cart/cartSlice";

// import { api } from "./api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    searchResults: productReducer,
    searchTerm: searchTermReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// Export the store
export default store;
