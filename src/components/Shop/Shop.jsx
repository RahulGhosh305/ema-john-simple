import React, { useState } from 'react';
import fakeData from '../../fakeData/index';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products, setProducts] = useState(first10)
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(pod => <Product product={pod}/>)
                }
            </div>
            <div className='cart-container'>
                <h2>Cart</h2>
            </div>
        </div>
    );
};

export default Shop;