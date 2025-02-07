import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import ProductDetail from "../Components/ProductDetails";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";

const Applayout = () => {
  const modal = useSelector((state) => state.modal.show);

  return (
    <div className="w-full px-4 py-3 md:px-10 md:py-7">
      {modal && <ProductDetail />}
      <Toaster
        toastOptions={{
          duration: 1000,
        }}
        position="top-right"
        reverseOrder={false}
      />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Applayout;
