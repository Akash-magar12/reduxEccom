import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../utils/instance";
import { setLoading, setProduct } from "../reducers/ProductSlice";
import { useEffect } from "react";
import Search from "../Components/Search";
import Cards from "../Components/Cards";
import Loader from "../utils/Loader.jsx";

const Jewelery = () => {
  const { filteredProduct, isLoading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const getElectronics = async () => {
    dispatch(setLoading()); // Set loading to true before starting the fetch
    const data = await getCategories("jewelery");
    dispatch(setProduct(data));
  };
  useEffect(() => {
    getElectronics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) return <Loader />; // Show loader while fetching data

  return (
    <div>
      <Search />
      <div className="flex flex-wrap min-h-screen justify-center gap-10">
        {filteredProduct && filteredProduct.length > 0 ? (
          filteredProduct.map((item) => <Cards key={item.id} item={item} />)
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Jewelery;
