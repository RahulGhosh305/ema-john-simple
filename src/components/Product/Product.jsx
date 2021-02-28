import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



const Product = (props) => {
    const {name, img, seller, price, stock} = props.product;

    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt=""/>
            </div>
            <div className='product-details'>
                <h4 className='product-name'>{name}</h4><br/>
                <p>By: {seller}</p>
                <p>${price}</p>
                <p>Only {stock} in left stock - Order soon</p>
                <button className='main-button' onClick={() => props.handleAddProduct(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

export default Product;