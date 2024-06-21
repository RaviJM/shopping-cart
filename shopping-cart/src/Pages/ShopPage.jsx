import Navbar from "../Components/Navbar/Navbar";
import "../assets/Styles/ShopPage.css";
import Product from "../Components/Product/Product";
import { useState, useEffect } from "react";

function ShopPage({ noOfItems, setNoOfItems, handleAdd }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = () => {
    fetch("https://fakestoreapi.com/products?limit=20")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <Navbar noOfItems={noOfItems} setNoOfItems={setNoOfItems} />

      {isLoading && (
        <div className="loading-text-container">
          <p className="loading-text">Loading...</p>
        </div>
      )}

      <div className="products-container">
        {data.map((ele) => (
          <Product ele={ele} key={ele.id} handleAdd={handleAdd} />
        ))}
      </div>
    </div>
  );
}

export default ShopPage;
