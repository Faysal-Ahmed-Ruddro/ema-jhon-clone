import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let total = 0;
let totalQuantity  = 0;
  if (cart) {
    for (const product of cart) {
      if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
      
}

  const shipping = total > 200 ? 20 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;
  return (
    <div>
      <div className="cart-div">
        <h2>Ordered Summary</h2>
        <h3>Item Ordered: {totalQuantity}</h3>
        <h3>Total: {total.toFixed(2)}</h3>
        <h3>Shipping: {shipping.toFixed(2)}</h3>
        <h3>Tax: {tax.toFixed(2)}</h3>
        <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
        {props.children}
      </div>
    </div>
  );
};

export default Cart;
