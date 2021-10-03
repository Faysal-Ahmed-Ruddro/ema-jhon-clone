import React from "react"
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProduct";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import { useHistory } from "react-router";
import ReviewItem from "../ReviewItem/ReviewItem";



const OrderReview = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);
 const history = useHistory()
  const handleRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    setCart(newCart);
   deleteFromDb(key);
  };
  const handlePlaceOrder = (order)=> {
      history.push("/placeOrder")
      clearTheCart()     
  }
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart?.map((product) => (
          <ReviewItem
            handleRemove={handleRemove}
            key={product.key}
            product={product}
          ></ReviewItem>
        ))}
      </div>
      <div>
        <Cart cart={cart}>
          
            <button onClick={handlePlaceOrder} className="btn-cart">
              Place Your Order
            </button>
        
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
