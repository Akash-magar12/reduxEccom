import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask, taskAdd } from "../reducers/TaskSlice";

const Todo = () => {
  const [inp, setInp] = useState("");
  const task = useSelector((state) => state.task.task);
  const dispatch = useDispatch();
  console.log(task);
  const handle = () => {
    dispatch(taskAdd(inp));
    setInp("");
  };
  const edit = () => {};
  const remove = (item) => {
    console.log(item);

    dispatch(removeTask(item));
  };
  return (
    <div className="mt-20">
      <input
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        className="border border-black"
        type="text"
        placeholder="Enter Task"
      />
      <button
        onClick={handle}
        className="bg-green-500 cursor-pointer px-6  rounded text-white"
      >
        Add
      </button>
      <div>
        {task.map((item, id) => {
          return (
            <div className="flex justify-between  w-1/2" key={id}>
              <p>{item}</p>
              <button
                onClick={() => edit(id)}
                className="bg-blue-500 cursor-pointer px-6  rounded text-white"
              >
                Edit
              </button>
              <button
                onClick={() => remove(item)}
                className="bg-red-500 cursor-pointer px-6  rounded text-white"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
