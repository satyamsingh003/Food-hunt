import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
    // main reducer for our redux store 
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
