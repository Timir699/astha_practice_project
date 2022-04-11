import { GetStaticProps } from 'next';
import React from 'react';

export const getStaticProps: GetStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    console.log(data);

    return { 
        props: { products: data }
    }
}


const ProductList = ({products}: any) => {
    
    console.log(products);
    
    return (
        <div className="text-zinc-400 text-5xl">
            Product List


        <style jsx>{`
           
        `}

        </style>
        </div>
    );
};

export default ProductList;

