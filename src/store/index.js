import { configureStore } from "@reduxjs/toolkit";
import hotels from "./slicers/hotels";

export const store = configureStore({
  reducer: {
    hotels,
  },
});
