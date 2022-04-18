import React from 'react';
import { Link } from 'react-router-dom';
import AboutDr from './AboutDr';
import Appoinment from './Appoinment';
import Hero from './Hero';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutDr></AboutDr>
            <Appoinment></Appoinment>
        </div>
    );
};

export default Home;