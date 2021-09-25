import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    for(const product of cart){
        total= total+ product.price;
    }
    const shipping = total> 200 ? 20: 0; 
    const tax = (total + shipping ) * 0.10;
    const  grandTotal = (total + shipping + tax);
    return (
      <div>
        <div className="cart-div">
          <h2>Ordered Summary</h2>
          <h3>Item Ordered: {props.cart.length}</h3>
          <h3>Total: {total.toFixed(2)}</h3>
          <h3>Shipping: {shipping.toFixed(2)}</h3>
          <h3>Tax: {tax.toFixed(2)}</h3>
          <h4>Grand Total: {grandTotal.toFixed(2)}</h4>
        </div>
      </div>
    );
};

export default Cart;

