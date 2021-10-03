import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Products/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [displayProduct, setDisplayProduct] = useState([]);
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProduct(data);
      });
  }, []);
  useEffect(() => {
    if (products.length) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }
      setCart(storedCart);
    }
  }, [products]);
  const handleAddToCart = (product) => {
    const exist = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exist) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exist.quantity += 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }

    setCart(newCart);
    addToDb(product.key);
  };
  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase();
    const matchProcuct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    );
    setDisplayProduct(matchProcuct);
  };

  return (
    <>
      {" "}
      {/*-----------------------search area ------------------------- */}{" "}
      <div className="search-container">
        <input
          onChange={handleSearch}
          type="text"
          placeholder="Search Product"
        />
      </div>{" "}
      <div className="shop-container">
        {" "}
        {/*--------------------- product area---------------------------*/}{" "}
        <div className="product-container">
          {" "}
          {displayProduct.map((product) => (
            <Product
              key={product.key}
              product={product}
              handleAddToCart={handleAddToCart}
            ></Product>
          ))}{" "}
        </div>{" "}
        {/*--------------------cart area------------------ */}{" "}
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to="/orderReview">
              <button className="btn-cart"> Review Your Order </button>{" "}
            </Link>{" "}
          </Cart>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

export default Shop;
