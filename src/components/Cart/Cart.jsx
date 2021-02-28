import React from 'react';

const Cart = (props) => {
    const cart = props.cart
    const total = cart.reduce( (init,prd)=> init + prd.price ,0 )

    let shipping = 0;
    if(total > 35){
        shipping = 7;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }

    const tax = (total/10).toFixed(2);
    const grandTotal = total + shipping + Number(tax)

    const formateNumber = num => {
        const precision = num.toFixed(2)
        return Number(precision)
    }
    return (
        <div>
            <h4>Orders Summery</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price : {formateNumber(total)}</p>
            <p>Shipping Cost : {shipping}</p>
            <p>Tax + Vat : {tax}</p>
            <p>Total : {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;