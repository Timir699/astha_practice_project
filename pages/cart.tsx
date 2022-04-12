import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Cart from '../components/Cart';

const cart: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Cart | E - Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cart />
      
    </div>
  );
};

export default cart;
