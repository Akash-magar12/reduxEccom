import { createSlice } from "@reduxjs/toolkit";

const ScrollerSlice = createSlice({
  name: "scroller",
  initialState: {
    scroll: false,
  },
  reducers: {
    showScroller: (state) => {
      state.scroll = true;
    },
    hideScroller: (state) => {
      state.scroll = false;
    },
  },
});

export const { showScroller, hideScroller } = ScrollerSlice.actions;
export default ScrollerSlice.reducer;
