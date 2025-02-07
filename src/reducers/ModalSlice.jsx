import { createSlice } from "@reduxjs/toolkit";

const ModalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
    item: null,
  },
  reducers: {
    opened: (state) => {
      state.show = true;
    },
    closed: (state) => {
      state.show = false;
    },
    addSinge: (state, action) => {
      state.item = action.payload;
    },
  },
});

export const { opened, closed,addSinge } = ModalSlice.actions;
export default ModalSlice.reducer;
