import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    handleAdd: (state) => {
      state.value += 1;
    },
    handleSub: (state) => {
      state.value -= 1;
    },
    handleAddByNumber: (state, action) => {
      console.log(state, action);

      state.value += Number(action.payload);
    },
  },
});

export const { handleAdd, handleAddByNumber, handleSub } = CounterSlice.actions;
export default CounterSlice.reducer;
