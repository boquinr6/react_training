// src/store/store.js

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";

// configureStore sets up a Redux store with good defaults
// (e.g., Redux DevTools extension integration, Thunk middleware)
export const store = configureStore({
  reducer: {
    // Here, we define the root reducer.
    // The 'counter' key means that `counterReducer` will manage
    // the state at `store.getState().counter`.
    counter: counterReducer,
    // You'd add other slices here as your app grows:
    // users: usersReducer,
    // products: productsReducer,
  },
  // Middleware, devTools, etc., are configured by default by configureStore
});