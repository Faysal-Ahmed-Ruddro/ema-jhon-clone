import React from 'react';
import img from '../../images/giphy.gif'
import './PlaceOrder.css'
const PlaceOrder = () => {
    return (
        <div>
            <h2>Sir Your Order is done</h2>
            <img src={img} alt="" />
        </div>
    );
};

export default PlaceOrder;