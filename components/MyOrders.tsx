import { useRouter } from 'next/router';
import React from 'react';
import { useStore } from '../store/cartStore';

const MyOrders = () => {
    const createOrder = useStore((state) => state.createOrder);
    const router = useRouter()
    const gotoOrderDetails = () => {
        router.push('/orderDetails')
    }
    
    return (
        <div>
            <div className="grid grid-rows-3 grid-flow-col gap-3">
                <div className="row-span-2 col-span-2 ...">
                    <p className="text-3xl my-4">My Orders</p>
                    <div onClick={() => gotoOrderDetails() } className="grid grid-cols-4 gap-4 border p-2 cursor-pointer ">
                    <p className="text-xl">Order ID - {createOrder?.orderCreate?.id}</p>
                    <p className="text-xl">Order Time - {createOrder?.orderCreate?.time?.toLocaleTimeString()}</p>
                    </div>
                </div>
            </div>

            <style jsx>{``}</style>
        </div>
    );
};

export default MyOrders;
