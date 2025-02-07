import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../reducers/CounterSlice";
import TaskSlice from "../reducers/TaskSlice";
import ProductSlice from "../reducers/ProductSlice";
import ModalSlice from "../reducers/ModalSlice";
import ScrollerSlice from "../reducers/ScrollerSlice";
import CartSlice from "../reducers/CartSlice";
export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    task: TaskSlice,
    product: ProductSlice,
    modal: ModalSlice,
    scroll: ScrollerSlice,
    cart: CartSlice,
  },
});
