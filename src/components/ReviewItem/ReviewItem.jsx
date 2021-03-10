import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const reviewCart = {
        border : '1px solid black',
        padding : '10px',
        margin : '10px',
    }
    const {category, img, key, name, price, quantity, shipping} = props.product
    return ( 
        <div>
            <div style={{width : '70%',margin : '0 auto',}}>
                <div style={reviewCart}>
                    <h2>{category} : {key}</h2>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <img src={img} alt=""/>
                    </div>
                    <h4>{name}</h4>
                    <div style={{display: 'flex'}}>
                        <p style={{marginRight: '20px'}}>Quantity : {quantity} |</p>
                        <p style={{marginRight: '20px'}}>Price : {price} |</p>
                        <p>Shipping : {shipping} </p>
                    </div>
                    <button onClick={() => props.removeCard(key)} className="main-button">Remove</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;