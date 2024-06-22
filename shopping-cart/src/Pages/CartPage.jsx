import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/Styles/CartPage.css";

function CartPage({ noOfItems, setNoOfItems, cartItems, setCartItems }) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [totalAmount, setTotalAmount] = useState(0);

  function handleCartIsEmpty() {
    if (noOfItems !== 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  }

  function evaluateTotalAmount() {
    let amt = 0;
    cartItems.map((item) => {
      amt += item.quantity * item.price;
    });
    setTotalAmount(amt);
  }

  function handleCheckout(totalAmount) {
    if (confirm(`Your total Amount is: $${totalAmount}.   Proceed?`)) {
      alert("Checked Out!");
    }
  }

  // function to increment quantity of a product
  function incrementQuantity(productName) {
    const updatedItemArray = cartItems.map((item) => {
      if (item.title === productName) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });

    setCartItems(updatedItemArray);
    setNoOfItems(noOfItems + 1); //to set number of items in cart (number beside the cart symbol in navbar)
  }

  // function to decrement quantity of a product
  function decrementQuantity(productName) {
    const updatedItemArray = cartItems
      .map((item) => {
        if (item.title === productName) {
          if (item.quantity === 1) {
            return null;
          }
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      })
      .filter((item) => item !== null); //this removes the items that are marked as null in the array

    setCartItems(updatedItemArray);
    setNoOfItems(noOfItems - 1); //to set number of items in cart (number beside the cart symbol in navbar)
  }

  function removeItem(productName) {
    let deductQuantity = 0;

    // iterate to get the quantity of item to be removed
    cartItems.map((item) => {
      if (item.title === productName) {
        deductQuantity = item.quantity;
      }
    });

    // update the array of items in cart (by removing the item completely (all quantity of item))
    const updatedItemArray = cartItems.filter(
      (item) => item.title !== productName
    );

    setCartItems(updatedItemArray);
    setNoOfItems(noOfItems - deductQuantity);
  }

  useEffect(() => {
    handleCartIsEmpty();
    evaluateTotalAmount();
  }, [noOfItems, cartItems]);

  return (
    <div>
      <Navbar noOfItems={noOfItems} setNoOfItems={setNoOfItems} />

      <div className="review-container">
        <div>
          <div className="total-amount-container">
            <p className="total-amount">Total Amount: ${totalAmount}</p>
          </div>

          {!isEmpty && (
            <button
              className="button-27"
              onClick={() => handleCheckout(totalAmount)}
            >
              Checkout
            </button>
          )}
        </div>
      </div>

      {isEmpty && (
        <div className="empty-cart-info-container">
          <p>Cart is Empty</p>

          <Link to="/shoppage">
            <button className="button-50">Shop Now</button>
          </Link>
        </div>
      )}

      {cartItems.map((item) => {
        return (
          <div className="item" key={item.id}>
            <div className="item-img-container">
              <img className="item-img" src={item.image}></img>
            </div>

            <div className="item-info-container">
              <div className="item-remove-button-container">
                <button
                  className="button-45"
                  onClick={() => removeItem(item.title)}
                >
                  Remove
                </button>
              </div>

              <div className="item-title-container">
                <p>{item.title}</p>
              </div>

              <div className="item-description-container">
                <p>
                  <u>
                    <b>Description:</b>
                  </u>
                  {item.description}
                </p>
              </div>

              <div className="item-quantity-container">
                <p>
                  <u>
                    <b>Quantity:</b>
                  </u>
                </p>
                <button
                  className="decrement-button button-21"
                  onClick={() => decrementQuantity(item.title)}
                >
                  -
                </button>
                <p className="item-quantity">{item.quantity}</p>
                <button
                  className="increment-button button-21"
                  onClick={() => incrementQuantity(item.title)}
                >
                  +
                </button>
              </div>

              <div className="item-price-container">
                <p>
                  <u>Price:</u>
                  {"   "}
                  {item.quantity} * ${item.price}: ${item.price * item.quantity}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default CartPage;
