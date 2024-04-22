import { createSlice } from "@reduxjs/toolkit";
import { SLICE } from "./constants";

const initialState = {
  headerTitle: "Dashboard",
};

export const slice = createSlice({
  name: SLICE,
  initialState,
  reducers: {
    setHeaderTitle: (state, { payload }) => {
      state.headerTitle = payload;
    },
  },
});

export const { setHeaderTitle } = slice.actions;
export default slice.reducer;
