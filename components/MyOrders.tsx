import Image from 'next/image';
import React from 'react';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import { useStore } from '../store/cartStore';

const MyOrders = () => {
    const orderProduct = useStore((state) => state.orderProduct);
    console.log(orderProduct);

    return (
        <div>
            <div className="grid grid-rows-3 grid-flow-col gap-3">
                <div className="row-span-2 col-span-2 ...">
                    <p className="text-3xl my-4">My Orders</p>
                    <div className="grid grid-cols-4 gap-4">
                        {orderProduct?.map((product) => {
                            return (
                                <div
                                    className="border text-center p-4"
                                    key={product.id}
                                >
                                    <Image
                                        src={product.img}
                                        alt="image"
                                        width={100}
                                        height={100}
                                    />
                                    <p className="text-xl">{product.name}</p>
                                    <p className="text-xl">${product.price}</p>
                                    <div className="flex justify-center mt-2"></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{``}</style>
        </div>
    );
};

export default MyOrders;
