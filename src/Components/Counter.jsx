import { useDispatch, useSelector } from "react-redux";
import {
  handleAdd,
  handleAddByNumber,
  handleSub,
} from "../reducers/CounterSlice";
import { useState } from "react";

const Counter = () => {
  const [input, setInput] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  console.log(count);
  const handleInput = () => {
    dispatch(handleAddByNumber(input));
  };
  return (
    <div className="text-2xl ">
      <h1>Counter : {count}</h1>
      <input
        className="border border-black"
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter"
      />
      <button
        className="border border-black mr-10 cursor-pointer"
        onClick={() => dispatch(handleAdd())}
      >
        Increase
      </button>
      <button
        className="border border-black mr-10 cursor-pointer"
        onClick={() => dispatch(handleSub())}
      >
        Decrease
      </button>
      <button
        className="border border-black mr-10 cursor-pointer"
        onClick={handleInput}
      >
        Increase by {input}
      </button>
    </div>
  );
};

export default Counter;
