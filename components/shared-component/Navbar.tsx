import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BsCart } from 'react-icons/bs';
import { useStore } from '../../store/cartStore';

const Navbar = () => {
  const cartProduct  = useStore(state=>state.cartProduct);
  const cartCounter = cartProduct.length
  console.log(cartCounter);
  return (
    <div className="navbar-main">
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            cursor: 'pointer',
          }}
        >
          <Link href="/products" passHref>
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
          <div className="cart-link">
            <Link href="/cart" passHref >
              <div>
                <a>
                  <BsCart style={{ fontSize: '2rem', cursor: 'pointer' }} />
                </a>
                <div className="cart-counter text-white">{cartCounter > 0 ? cartCounter : 0}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <style jsx>{`
        .navbar-main {
          background: #e5e7e9;
        }
        .container {
          width: 80%;
          margin: 0 auto;
        }
        .cart-link {
          /* margin-left: 70px; */
          position: relative;
        }
        .cart-counter {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: red;
          display: flex;
          justify-content: center;
          align-items: center;
          /* margin-right: 20px; */
          cursor: pointer;
          position: absolute;
          top: 0;
          right: -10px;
        }
      `}</style>
    </div>
  );
};

export default Navbar;
