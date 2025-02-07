import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
  name: "task",
  initialState: {
    task: [],
  },
  reducers: {
    taskAdd: (state, action) => {
      state.task.push(action.payload);
    },
    removeTask: (state, action) => {
      state.task = state.task.filter((item) => item !== action.payload);
    },
  },
});

export const { taskAdd, removeTask } = TaskSlice.actions;
export default TaskSlice.reducer;
