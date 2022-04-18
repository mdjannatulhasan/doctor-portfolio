import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className='py-5 text-white'>
            <div className="container">
                <div className="row text-center flex-column justify-content-center align-items-center">
                    <div className="col-lg-6">
                        <div className="brand">
                            Doctor Sakib
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <p>©2022 | Shah Muhammad Jannatul Hasan, all right reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;