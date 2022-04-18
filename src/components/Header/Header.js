import { getAuth, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { Container, Nav } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import app from '../../firebase.init';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';


const auth = getAuth(app);
const Header = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <Container>
                <nav>
                    <div className="brand">
                        Doctor Sakib
                    </div>
                    <ul>
                        <li>
                            <CustomLink to="/">Home</CustomLink>
                            <CustomLink to="/blog">Blog</CustomLink>
                            <CustomLink to="/checkout">Checkout</CustomLink>
                            <CustomLink to="/about">About</CustomLink>
                        </li>
                    </ul>
                    <div className="login">
                        {
                            user?.uid 
                            ? 
                            <>
                            <h5>{user.displayName}</h5>
                            <button onClick={()=> {signOut(auth)}}> Sign Out</button>
                            </>
                            :
                            <><Link to="/login">Login</Link> <Link to="/register">Register</Link></>
                        }
                        
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Header;