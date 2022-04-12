import React from 'react';
import Footer from '../shared-component/Footer';
import Navbar from '../shared-component/Navbar';

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
                min-height: 89vh;
            }
        `}

        </style>
    </div>
  );
};

export default Layout;
