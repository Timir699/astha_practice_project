import React, { useEffect, useState } from 'react';
import { useStore } from '../store/cartStore';
import { IoBagCheckOutline } from 'react-icons/io5';
import { MdOutlineRemoveShoppingCart } from 'react-icons/md';
import Image from 'next/image';

const Cart = () => {
  const cartProduct = useStore((state) => state.cartProduct);
  const addAllCartProduct = useStore((state) => state.addAllCartProduct);

  const [allCartProduct, setAllCartProduct] = useState(cartProduct)

  useEffect(() => {
    addAllCartProduct(allCartProduct)
  }, [allCartProduct])

  console.log(allCartProduct);

  const removeItem = (product) => {
    const finalCartItems = allCartProduct.filter(
      (finalCartItem) => finalCartItem.id !== product.id
    );
    setAllCartProduct(finalCartItems);
  };
  

  const quantity = allCartProduct.length

  const total = allCartProduct.map((cartProductPrice) => {
    const { price } = cartProductPrice;
    return price;
  });

  let totalPrice = total.reduce( (a, b) => a + b, 0 );
  console.log(totalPrice);

  return (
    <div className="">
      <div className="grid grid-rows-2 grid-flow-col gap-2">
        <div className="row-span-2 col-span-2 ...">
          <p className="text-3xl my-4">Cart</p>

          <div className="grid grid-cols-4 gap-4">
          {allCartProduct.map((product) => {
            return (
              <div className="border text-center p-4" key={product.id}>
                <Image src={product.img} alt="image" width={100} height={100} />
                <p className="text-xl">{product.name}</p>
                <p className="text-xl">${product.price}</p>
                <div className="flex justify-center mt-2">
            <button onClick={() => removeItem(product) } className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none flex items-center">
              <MdOutlineRemoveShoppingCart />
              <p className="ml-2">Remove from cart</p>
            </button>
          </div>
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
         
          <div className="flex justify-start mt-2">
            <button className="px-6 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none flex items-center">
              <IoBagCheckOutline />
              <p className="ml-2">Checkout</p>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{``}</style>
    </div>
  );
};

export default Cart;
