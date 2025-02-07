import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { closed } from "../reducers/ModalSlice";
import axios from "axios";
import { useEffect, useState } from "react";
import { hideScroller } from "../reducers/ScrollerSlice";

const ProductDetail = () => {
  const id = useSelector((store) => store.modal.item); // Get product ID from Redux
  const [productDetails, setProductDetails] = useState(null); // Local state for product details
  const dispatch = useDispatch();

  const fetchSingle = async (id) => {
    try {
      const data = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setProductDetails(data.data); // Store the fetched product details
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSingle(id); // Fetch product details when id changes
    }
  }, [id]); // Watch for changes in id

  const handleClose = () => {
    dispatch(closed());
    dispatch(hideScroller());
  };
  if (!productDetails) return null;

  return (
    <div className="inset-0 flex fixed items-center justify-center z-50">
      <div
        className="absolute inset-0 bg-gray-800 opacity-50"
        onClick={handleClose}
      ></div>{" "}
      {/* Overlay */}
      <div className="bg-white rounded-2xl shadow-lg p-4 max-w-md w-full relative z-10">
        <button
          onClick={handleClose}
          className="absolute cursor-pointer top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <MdClose size={24} />
        </button>
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          Product Detail
        </h2>
        <div className="p-4">
          <img
            src={productDetails?.image} // Display product image
            alt={productDetails?.title}
            className="w-full h-64 object-cover rounded-lg"
          />
          <div className="text-center mt-4">
            <p className="text-2xl font-bold">${productDetails?.price}</p>
            <h3 className="font-bold text-lg mt-2">{productDetails?.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">
              {productDetails?.description.slice(0,120)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
