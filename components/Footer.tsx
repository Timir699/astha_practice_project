import React from 'react';

const Footer = () => {
    return (
        <div className="footer-main">
            <div>
                <h3>Footer</h3>
            </div>
            <style jsx>{`
                    .footer-main {
                        background: #E5E7E9;
                        height: 50px;
                        margin-top: 32%;
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