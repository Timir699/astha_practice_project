import Image from 'next/image'
import React from 'react';
import { Products } from '../../model/product';
import SingleProduct from './SingleProduct';


const ProductList = ({products}: Products)  => {
    
    console.log(products);
    
    return (
        <div >
            <h2 className="text-zinc-400 text-5xl my-12">Product List</h2>
            <div className='grid grid-cols-3 gap-y-24'>
            {products.map( product => (
                <SingleProduct key={product.id} product={product}/>
            ))}
            </div>
        <style jsx>{`
           
        `}

        </style>
        </div>
    );
};

export default ProductList;

