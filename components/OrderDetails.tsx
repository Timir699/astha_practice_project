import React from 'react';
import { useStore } from '../store/cartStore';
import Image from 'next/image';


const OrderDetails = () => {
  const orderProduct = useStore((state) => state.orderProduct);
  const checkOutForm = useStore((state) => state.checkOutForm);
  console.log(checkOutForm.data);

  console.log(orderProduct);
  const quantity = orderProduct?.length;

  const total = orderProduct?.map((cartProductPrice) => {
    const { price } = cartProductPrice;
    return price;
  });

  let totalPrice = total?.reduce((a, b) => a + b, 0);
  console.log(totalPrice);
  return (
    <div>
      <div className="">
        <div className="grid grid-rows-2 grid-flow-col gap-2">
          <div className="row-span-2 col-span-2 ...">
            <p className="text-4xl my-4">Order Details Information</p>

            <p className="text-xl my-4">Name : {checkOutForm?.data?.Name}</p>
            <p className="text-xl my-4">Email : {checkOutForm?.data?.Email}</p>
            <p className="text-xl my-4">Mobile : {checkOutForm?.data?.Mobile_number}</p>
            <p className="text-xl my-4">Address : {checkOutForm?.data?.Address}</p>
            <p className="text-3xl my-4">Products</p>
            <div className="grid grid-cols-4 gap-4">
            
              {orderProduct?.map((product) => {
                return (
                  <div className="border text-center p-4" key={product?.id}>
                    <Image
                      src={product?.img}
                      alt="image"
                      width={100}
                      height={100}
                    />
                    <p className="text-xl">{product?.name}</p>
                    <p className="text-xl">${product?.price}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="row-span-3 ...">
            <p className="text-3xl my-4">Order Summary</p>
            <p className="text-xl my-4">Quantity : {quantity} </p>
            <p className="text-xl my-4">Total : ${totalPrice}</p>
            <hr />
            <p className="text-xl my-4">Grand Total : ${totalPrice} </p>
          </div>
        </div>

        <style jsx>{``}</style>
      </div>
    </div>
  );
};

export default OrderDetails;
