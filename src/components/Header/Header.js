import { getAuth, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';


const auth = getAuth(app);
const Header = () => {
    const [user] = useAuthState(auth);
    const toggleMenu = () => {
        document.getElementById('mobile-menu').classList.toggle('show');
    }
    return (
        <div>
            <Container>
                <nav className='desktop-menu'>

                    <div className="brand">
                        Doctor Sakib
                    </div>
                    <div  className='menu' >
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/blog">Blog</CustomLink>
                        <CustomLink to="/about">About</CustomLink>

                        {
                            user?.uid
                                ?
                                <>
                                    <a className='txt-primary btn-link text-decoration-none' onClick={() => { signOut(auth) }}> Sign Out</a>
                                </>
                                :
                                <><Link to="/login">Login</Link> <Link to="/register">Register</Link></>
                        }
                        <CustomLink to="/checkout">Checkout <i className="fas fa-shopping-cart"></i></CustomLink>
                    </div>
                </nav>

            </Container>
            <nav className='mobile-menu'>

                <Container>
                    <div className="brand">
                        Doctor Sakib
                    </div>
                    <div className='menu' id="mobile-menu">
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/blog">Blog</CustomLink>
                        <CustomLink to="/about">About</CustomLink>

                        {
                            user?.uid
                                ?
                                <>
                                    <h5>{user.displayName}</h5>
                                    <button className='txt-primary btn btn-link text-decoration-none' onClick={() => { signOut(auth) }}> Sign Out</button>
                                </>
                                :
                                <><Link to="/login">Login</Link> <Link to="/register">Register</Link></>
                        }<CustomLink to="/checkout">Checkout <i className="fas fa-shopping-cart"></i></CustomLink>

                    </div>
                    <div onClick={toggleMenu} className='menu-open'><i className="fas fa-bars"></i></div>
                </Container>
            </nav>

        </div>
    );
};

export default Header;