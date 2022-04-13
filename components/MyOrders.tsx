import React from 'react';
import { useStore } from '../store/cartStore';

const MyOrders = () => {
    const cartProduct = useStore((state) => state.cartProduct);
    console.log(cartProduct);
    
    return (
        <div>
            My Orders
        </div>
    );
};

export default MyOrders;