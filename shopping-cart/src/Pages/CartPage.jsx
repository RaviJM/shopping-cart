import Navbar from "../Components/Navbar/Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  useEffect(() => {
    handleCartIsEmpty();
    evaluateTotalAmount();
  }, [noOfItems, cartItems]);

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

  return (
    <div>
      <Navbar noOfItems={noOfItems} setNoOfItems={setNoOfItems} />
      <div>
        <p>Total Amount: {totalAmount}</p>
        {!isEmpty && (
          <button onClick={() => handleCheckout(totalAmount)}>Checkout</button>
        )}
      </div>

      {isEmpty && (
        <div>
          <p>Cart is Empty.</p>

          <Link to="/shoppage">
            <button>Shop Now</button>
          </Link>
        </div>
      )}

      {cartItems.map((item) => {
        return (
          <div key={item.id}>
            <img src={item.image}></img>
            <button onClick={() => removeItem(item.title)}>Remove</button>
            <p>Title: {item.title}</p>
            <p>Description: {item.description}</p>
            <p>Quantity: </p>
            <div>
              <button
                className="decrement-button"
                onClick={() => decrementQuantity(item.title)}
              >
                -
              </button>
              <p>{item.quantity}</p>
              <button
                className="increment-button"
                onClick={() => incrementQuantity(item.title)}
              >
                +
              </button>
            </div>
            <p>
              Price: {item.price}*{item.quantity}: {item.price * item.quantity}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default CartPage;
