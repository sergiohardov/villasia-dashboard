import { createSlice } from "@reduxjs/toolkit";
import { SLICE } from "./constants";

const initialState = {
  headerTitle: "Dashboard",
  activeListItem: 0,
};

export const slice = createSlice({
  name: SLICE,
  initialState,
  reducers: {
    setHeaderTitle: (state, { payload }) => {
      state.headerTitle = payload;
    },
    setActiveListItem: (state, { payload }) => {
      state.activeListItem = payload;
    },
  },
});

export const { setHeaderTitle, setActiveListItem } = slice.actions;
export default slice.reducer;
