import { Triangle } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full  flex h-[60vh] justify-center items-center">
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="black"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
