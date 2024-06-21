function Product({ ele, handleAdd }) {
  return (
    <div>
      <img src={ele.image}></img>
      <p>Title: {ele.title}</p>
      <p>
        Rating: {ele.rating.rate} ({ele.rating.count})
      </p>
      <p>Description: {ele.description}</p>
      <p>Price: {ele.price}</p>
      <button
        onClick={() => {
          handleAdd(ele);
        }}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default Product;
