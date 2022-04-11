import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
        <div className='container'>{children}</div> 
      <Footer />
      <style jsx>{`
            .container {
                width: 80%;
                margin: 0 auto;
            }
        `}

        </style>
    </div>
  );
};

export default Layout;
