import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Applayout from "./Pages/Applayout";
import Electronics from "./Pages/Electronics";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Jewelery from "./Pages/Jewelery";
import Mens from "./Pages/Mens";
import Womens from "./Pages/Womens";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/electronics", element: <Electronics /> },
        { path: "/jewelery", element: <Jewelery /> },
        { path: "/mens", element: <Mens /> },
        { path: "/womens", element: <Womens /> },
        { path: "/cart", element: <Cart /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
