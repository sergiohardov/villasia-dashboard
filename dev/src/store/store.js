import { configureStore } from "@reduxjs/toolkit";
import global from "./global/slice";

export const store = configureStore({
  reducer: {
    global: global,
  },
});
