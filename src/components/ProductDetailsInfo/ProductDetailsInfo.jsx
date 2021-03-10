import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import './ProductDetailsInfo.css';

const ProductDetailsInfo = () => {
    const {productKey} = useParams()
    const product = fakeData.find(pd => pd.key === productKey)
    
    return (
        <div>
            <h1>Details Show Here</h1>
            <Product addProductToCart= {false} product={product}/>
        </div>
    );
};

export default ProductDetailsInfo;