import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice/cartSlice.js";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default Store;
