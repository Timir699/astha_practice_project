import Head from 'next/head';
import React from 'react';
import OrderDetails from '../components/OrderDetails';

const orderDetails = () => {
  return (
    <div>
      <Head>
        <title>Order Details | E - Cart</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <OrderDetails />
    </div>
  );
};

export default orderDetails;