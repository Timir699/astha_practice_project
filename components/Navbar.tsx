import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCart } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div className="navbar-main">
            <div className="container">
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer'}}>
                    <Link href="/" passHref>
                        <Image 
                            src="/images.jpg"
                            alt="company logo"
                            width={70}
                            height={50}
                        />
                    </Link>    
                    <Link href="/myOrders">
                        <a>MyOrders</a>
                    </Link> 
                    {/* <Link href="/" passHref>
                        
                    </Link>    */}
                    <Link href="/cart">
                        <a><BsCart style={{ fontSize: '2rem', cursor: 'pointer' }} /></a>
                    </Link>
                </div>
               
            </div>
            <style jsx>{`
                    .navbar-main {
                        background: #E5E7E9;
                    }
                    .container {
                        width: 80%;
                        margin: 0 auto;    
                    }
                    // .logo {
                    //     display: flex;
                    //     alignItems: center;
                    //     justifyContent: space-between;
                    //     cursor: pointer;
                    // }
                `}</style>
        </div>
        
    );
};

export default Navbar;