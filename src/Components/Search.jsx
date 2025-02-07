import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { searchProduct } from "../reducers/ProductSlice";

const Search = () => {
  const [input, setInput] = useState("");
  useEffect(() => {
    dispatch(searchProduct(input));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);
  const dispatch = useDispatch();
  return (
    <div className="my-8 flex justify-center">
      <div className="relative max-w-3xl w-full px-2 py-1 bg-white shadow-md rounded-full flex items-center border border-gray-300 focus-within:border-zinc-500 transition-all">
        <IoSearchOutline
          onClick={() => {
            dispatch(searchProduct(input));
            setInput("");
          }}
          className="text-gray-400 text-xl absolute left-4"
        />
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full text-sm pl-12 pr-4 py-2 rounded-full outline-none text-gray-700 placeholder-gray-400"
          type="text"
          placeholder="Search Products..."
        />
        {input.length > 0 && (
          <span
            onClick={() => setInput("")}
            className="absolute right-4 cursor-pointer text-xl text-gray-500 hover:text-gray-800"
          >
            <MdClose />
          </span>
        )}
      </div>
    </div>
  );
};

export default Search;
