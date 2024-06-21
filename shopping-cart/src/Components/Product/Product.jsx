import "./Product.css";

function Product({ ele, handleAdd }) {
  function truncateDescription(text) {
    const characterLimit = 100;
    if (text.length >= characterLimit) {
      return text.substring(0, characterLimit) + "...";
    }
    return text;
  }

  return (
    <div className="product">
      <div className="product-img-container">
        <img src={ele.image} className="product-img"></img>
      </div>
      <div className="product-title-container">
        <p className="product-title">{ele.title}</p>
      </div>
      <div className="product-rating-container">
        <p className="product-rating">
          <u>Rating:</u> {ele.rating.rate} ({ele.rating.count})
        </p>
      </div>
      <div className="product-description-container">
        <p className="product-description">
          <u>Description:</u> {truncateDescription(ele.description)}
        </p>
      </div>
      <div className="product-price-container">
        <p>
          <u>Price:</u> ${ele.price}
        </p>
      </div>
      {/* <div className="product-add-button-container"> */}
      <button
        className="product-add-button"
        onClick={() => {
          handleAdd(ele);
        }}
      >
        Add To Cart
      </button>
      {/* </div> */}
    </div>
  );
}

export default Product;
