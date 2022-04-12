import Image from 'next/image';
import React from 'react';
import { Product } from '../../model/product';

const SingleProduct = ({ product }: { product: Product }) => {
  return (
    <div>
      <div className="border text-center mx-10" key={product.id}>
        <Image src={product.img} alt="image" width={300} height={300} />
        <h2 className="text-2xl">Name : {product.name}</h2>
        <h2 className="text-2xl">Price : {product.price}</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Quick view
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-6 ml-2 ">
          Product Details
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
