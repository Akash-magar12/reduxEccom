import { MdShoppingCart } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  const cartLength = useSelector((store) => store.cart.cartProduct);
  return (
    <nav className="w-full flex items-center border-b pb-4 border-zinc-300 justify-between ">
      <div className="flex items-center gap-4">
        <h2 className="font-semibold text-2xl cursor-pointer">Shopify</h2>
        <NavLink to="/">All</NavLink>
        <NavLink to="/electronics">Electronics</NavLink>
        <NavLink to="/jewelery">Jewelery</NavLink>
        <NavLink to="/mens">{"Men's clothing"}</NavLink>
        <NavLink to="/womens">{"Women's clothing"}</NavLink>
      </div>
      <div className="flex items-center gap-4">
        <h3>My Order</h3>
        <Link to="/cart" className="flex cursor-pointer items-center relative">
          <MdShoppingCart />
          <span className="absolute top-[-1rem] right-[-6px]">
            {cartLength.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
