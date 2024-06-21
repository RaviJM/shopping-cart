import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ShopPage from "./Pages/ShopPage";
import CartPage from "./Pages/CartPage";
import ErrorPage from "./Pages/ErrorPage";

const App = () => {
  const [noOfItems, setNoOfItems] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  function handleAdd(ele) {
    let quantity = prompt("Enter Quantity:");
    quantity = parseInt(quantity);

    if (quantity) {
      ele.quantity = quantity;
      // appends item to cardItems
      setCartItems((cartItems) => [...cartItems, ele]);
      setNoOfItems(noOfItems + quantity);
      alert("Successfully added to Cart!");
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage noOfItems={noOfItems} setNoOfItems={setNoOfItems} />,
      errorElement: (
        <ErrorPage noOfItems={noOfItems} setNoOfItems={setNoOfItems} />
      ),
    },
    {
      path: "/homepage",
      element: <HomePage noOfItems={noOfItems} setNoOfItems={setNoOfItems} />,
    },
    {
      path: "/shoppage",
      element: (
        <ShopPage
          noOfItems={noOfItems}
          setNoOfItems={setNoOfItems}
          handleAdd={handleAdd}
        />
      ),
    },
    {
      path: "/cartpage",
      element: (
        <CartPage
          noOfItems={noOfItems}
          setNoOfItems={setNoOfItems}
          cartItems={cartItems}
          setCartItems={setCartItems}
        />
      ),
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
