import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTask } from "../utils/instance.js";
import { setProduct, setLoading } from "../reducers/ProductSlice.jsx";
import Search from "../Components/Search";
import Cards from "../Components/Cards.jsx";
import Loader from "../utils/Loader.jsx";

const Home = () => {
  const { filteredProduct, isLoading } = useSelector((state) => state.product);

  const dispatch = useDispatch();

  const getAll = async () => {
    dispatch(setLoading()); // Set loading to true before starting the fetch
    const data = await getTask(); // Fetch data
    dispatch(setProduct(data)); // Set products and stop loading
  };

  useEffect(() => {
    getAll(); // Fetch products when the component is mounted
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) return <Loader />; // Show loader while fetching data

  return (
    <div>
      <Search /> {/* Search component */}
      <div className="flex flex-wrap justify-center min-h-screen gap-10">
        {filteredProduct && filteredProduct.length > 0 ? (
          filteredProduct.map((item) => <Cards key={item.id} item={item} />) // Show filtered products
        ) : (
          <div className="text-center text-xl font-semibold text-gray-600">
            No products found.
          </div> // No products found message
        )}
      </div>
    </div>
  );
};

export default Home;
