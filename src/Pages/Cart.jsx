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
    <div className="cart min-h-[80vh] mt-10 px-4 md:px-8">
      {cart.length > 0 && (
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">
          Your Cart
        </h2>
      )}

      {cart.map((item, index) => (
        <div
          key={index}
          className="cart-item flex flex-col md:flex-row items-center justify-between mb-4 p-4 border border-gray-200 rounded-md bg-white shadow-sm"
        >
          {/* Product Image */}
          <img
            src={item.image}
            alt={item.title}
            className="w-24 h-24 object-cover md:w-28 md:h-28 rounded-md"
          />

          {/* Product Details */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1 md:ml-4">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-lg font-medium">${item.price.toFixed()}</p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-center gap-3 mt-4 md:mt-0">
            <button
              onClick={() => dispatch(decreaseQuantity(item.id))}
              className="bg-gray-200 px-3 py-1 rounded-md cursor-pointer"
            >
              -
            </button>
            <span className="font-medium">{item.quantity}</span>
            <button
              onClick={() => dispatch(increaseQuantity(item.id))}
              className="bg-gray-200 px-3 py-1 rounded-md cursor-pointer"
            >
              +
            </button>
          </div>

          {/* Remove Button */}
          <button
            onClick={() => {
              dispatch(removeCart(item.id));
              toast.error("Product removed Successfully");
            }}
            className="bg-red-500 mt-4 ml-4 md:mt-0 text-white px-3 py-1 rounded-md"
          >
            Remove
          </button>
        </div>
      ))}

      {/* Cart Summary & Empty Cart Section */}
      {cart.length > 0 ? (
        <div className="flex flex-col md:flex-row justify-between items-center mt-6 border-t pt-4">
          <p className="text-xl font-medium mb-4 md:mb-0">
            Total: ${total.toFixed()}
          </p>
          <button
            onClick={() => {
              dispatch(emptyCart());
              toast.error("All Products removed Successfully");
            }}
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Clear All
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-6 mt-10">
          <p className="text-2xl text-center font-semibold">No items in Cart</p>
          <Link to="/">
            <button className="bg-black text-white px-4 py-2 rounded-md">
              Go Shopping
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
