import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { CiMenuBurger } from "react-icons/ci";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartLength = useSelector((store) => store.cart.cartProduct);

  return (
    <nav className="w-full relative flex items-center border-b pb-4 border-zinc-300 justify-between px-4 md:px-8">
      {/* Logo and Nav Links */}
      <div className="flex items-center gap-4">
        <h2 className="font-semibold text-2xl cursor-pointer">Shopify</h2>
        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className="hover:text-blue-500">
            All
          </NavLink>
          <NavLink to="/electronics" className="hover:text-blue-500">
            Electronics
          </NavLink>
          <NavLink to="/jewelery" className="hover:text-blue-500">
            Jewelery
          </NavLink>
          <NavLink to="/mens" className="hover:text-blue-500">
            {"Men's clothing"}
          </NavLink>
          <NavLink to="/womens" className="hover:text-blue-500">
            {"Women's clothing"}
          </NavLink>
        </div>
      </div>

      {/* Cart and Mobile Menu */}
      <div className="flex items-center gap-4">
        <h3 className="hidden md:block">My Order</h3>
        <Link to="/cart" className="flex cursor-pointer items-center relative">
          <MdShoppingCart size={24} />
          <span className="absolute top-[-6px] right-[-8px] bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartLength.length}
          </span>
        </Link>
        {/* Mobile Menu Icon */}
        <span
          className="md:hidden cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <CiMenuBurger size={24} />
        </span>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)} // Close on clicking outside
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-screen bg-white text-black z-50 w-64 shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          ✖
        </button>
        <div className="flex flex-col items-start mt-12 p-6 space-y-4">
          <NavLink
            to="/"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            All
          </NavLink>
          <NavLink
            to="/electronics"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Electronics
          </NavLink>
          <NavLink
            to="/jewelery"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Jewelery
          </NavLink>
          <NavLink
            to="/mens"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            {"Men's clothing"}
          </NavLink>
          <NavLink
            to="/womens"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            {"Women's clothing"}
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
