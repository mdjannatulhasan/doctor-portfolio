import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
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
                        </li>
                    </ul>
                    <div className="login">
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Header;