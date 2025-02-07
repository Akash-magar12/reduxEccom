import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  emptyCart,
  increaseQuantity,
  removeCart,
} from "../reducers/CartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((store) => store.cart.cartProduct);
  const dispatch = useDispatch();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  return (
    <div className="cart  min-h-[80vh] mt-10">
      {cart.length > 0 && (
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      )}
      {cart.map((item, index) => (
        <div
          key={index}
          className="cart-item flex flex-col md:flex-row items-center justify-between mb-4 p-4 border border-gray-200 rounded-md"
        >
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-cover md:w-28 md:h-28"
          />
          <div className="flex-1 md:ml-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-lg font-medium">${item.price.toFixed()}</p>
          </div>
          <div className="flex items-center justify-center mt-4 md:mt-0">
            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="bg-gray-200 px-2 py-1 rounded-md cursor-pointer"
            >
              -
            </button>
            <span className="mx-2">{item.quantity}</span>
            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="bg-gray-200 px-2 py-1 rounded-md cursor-pointer"
            >
              +
            </button>
          </div>
          <button
            onClick={() => {
              dispatch(removeCart(item.id));
              toast.error("Product removed Successfully");
            }}
            className="bg-red-500 ml-4 cursor-pointer px-2 py-1 rounded-md text-white"
          >
            Remove
          </button>
        </div>
      ))}
      {cart.length > 0 ? (
        <div className="flex justify-end mt-4">
          <button
            onClick={() => {
              dispatch(emptyCart());
              toast.error("All Products removed Successfully");
            }}
            className="mr-10 bg-red-500  cursor-pointer px-2 py-1 rounded-md text-white "
          >
            Clear All
          </button>
          <p className="text-lg font-medium">Total: ${total.toFixed()}</p>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-6">
          <p className="text-3xl text-center font-semibold">No items in Cart</p>
          <Link to="/">
            <button className="bg-black text-sm cursor-pointer text-white px-4 py-2 rounded">
              Go Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
