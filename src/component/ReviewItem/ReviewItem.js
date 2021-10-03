import React from 'react';


const ReviewItem = (props) => {
   
    const {img,name,price,key,quantity} = props?.product;
    const {handleRemove} = props
    return (
        <div className="product ">
           
            <div>
                <img src={img} alt="" />
                <h2>Quantity : {quantity}</h2>
                <h2 className="product-name">{name}</h2>
                <p >Price: {price}</p>
                <button onClick={()=> handleRemove(key)} className="btn-cart"> Remove</button> 
                 {props.children}        
            </div>
        </div>
    );
};

export default ReviewItem;