/* eslint-disable react/prop-types */
import { AiOutlinePlus } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addSinge, opened } from "../reducers/ModalSlice";
import { useEffect } from "react";
import { showScroller } from "../reducers/ScrollerSlice";
import { addCart } from "../reducers/CartSlice";
import toast from "react-hot-toast";

const Cards = ({ item }) => {
  const show = useSelector((store) => store.scroll.scroll);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(opened());
    dispatch(showScroller());
    dispatch(addSinge(item.id));
  };

  useEffect(() => {
    const disableScroll = () => {
      document.querySelector("body").style.overflow = "hidden";
    };

    const enableScroll = () => {
      document.querySelector("body").style.overflow = "auto";
    };

    // Attach event listener when show is true
    if (show) {
      window.addEventListener("click", disableScroll);
    } else {
      enableScroll(); // Restore scroll when show is false
    }

    // Cleanup function: remove event listener and restore scroll
    return () => {
      window.removeEventListener("click", disableScroll);
      enableScroll();
    };
  }, [show]); // Only run when `show` changes
  const AddItem = (id) => {
    dispatch(addCart(id));
    toast.success("Product Added Successfully");
  };
  return (
    <div className="bg-white cursor-pointer h-[20rem] py-6 rounded-lg shadow-lg overflow-hidden w-[18rem]">
      <div className="relative">
        <img
          src={item.image}
          alt="Classic Red Pullover Hoodie"
          className="w-full h-52 object-contain"
        />
        <button className="absolute top-2 right-2 p-1 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors">
          <AiOutlinePlus className="w-6 h-6 text-gray-700" />
        </button>
        <div className="absolute bottom-2 left-2 bg-zinc-200 px-3 py-1 rounded-full">
          <span className="text-sm font-medium">{item.category}</span>
        </div>
        <div
          onClick={handleAdd}
          className="absolute bottom-2 cursor-pointer right-2 bg-zinc-200 px-3 py-1 rounded-full"
        >
          <span className="text-sm text-black font-medium">Details</span>
        </div>
      </div>

      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-800">
          {item.title.slice(0, 20)}...
        </h3>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-sm font-bold text-gray-900">
            ${item.price.toFixed()}
          </span>
          <button
            onClick={() => AddItem(item)}
            className="bg-gray-900 cursor-pointer text-white text-sm px-3 py-1 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <BsCart3 className="w-5 h-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
