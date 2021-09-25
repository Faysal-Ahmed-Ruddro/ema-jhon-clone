import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import Rating from "react-rating";

const Product = (props) => {
  // console.log(props);
  const { img, name, price, seller, stock,star } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <p>
          <small>By: {seller}</small>
        </p>
        <p>
          <b>Price:</b> {price}
        </p>
        <p>
          only (<b>{stock}</b>) left in stock - order soon
        </p>
        <Rating
          initialRating={star}
          emptySymbol="far fa-star icon-color"
          fullSymbol="fas fa-star icon-color"
        ></Rating>{" "}
        <br /> <br />
        <button
          onClick={() => props.handleAddToCart(props.product)}
          className="btn-cart"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
