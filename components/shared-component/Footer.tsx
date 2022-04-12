import React from 'react';

const Footer = () => {
  return (
    <div className="footer-main">
      <div>
        <h3>Footer</h3>
      </div>
      <style jsx>{`
        .footer-main {
          background: #e5e7e9;
          height: 50px;
          margin-top: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          width: 80%;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
};

export default Footer;
