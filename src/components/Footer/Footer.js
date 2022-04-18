import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='py-5 text-white'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="brand">
                            Doctor Sakib
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <Link to="/">Home</Link>
                        <Link to="/Blog">Blog</Link>
                        <Link to="/">Home</Link>
                    </div>
                    <div className="col-lg-4">
                        <div className="social-links">

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;