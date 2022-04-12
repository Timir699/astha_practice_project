import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Product } from '../../model/product';
import Modal from '../modal/Modal';

const SingleProduct = ({ product }: { product: Product }) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  
  //
  return (
    <div>
      <div className="border text-center mx-10" key={product.id}>
        <Link href={`/products/${product.id}`}>
          <div>
            <Image src={product.img} alt="image" width={300} height={300} />
            <h2 className="text-2xl">Name : {product.name}</h2>
            <h2 className="text-2xl">Price : ${product.price}</h2>
          </div>
        </Link>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Quick view
        </button>
        <Modal onClose={() => setShowModal(false)} 
        show={showModal}
        >
          <div className="text-center">
          <Image src={product.img} alt="image" width={150} height={150} />
            <h2 className="text-2xl">Product Name : {product.name}</h2>
            <h2 className="text-2xl">Price : ${product.price}</h2>
            <h2 className="text-lg">Description : {product.description}</h2>
            <h2 className="text-xl">Product Weight : {product.weight}</h2>
          </div>
        </Modal>
        <Link href={`/products/${product.id}`}>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-6 ml-2 ">
            Product Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
