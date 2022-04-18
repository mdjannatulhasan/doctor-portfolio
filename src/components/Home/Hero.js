import React from 'react';

const Hero = () => {
    return (
        <div className='hero py-5'>
            <div className="container py-5">
                <h1 className='txt-primary'>Dr. Lutful Majid Sakib</h1>
                <p className='sub-title'>Specialised in Medicine and Surgery</p>

                <p className='header-body'>I am glad you hand your health concerns to me. I'll make sure to deliver the best possible healthcare! Of course, I always complement my main services with a customer service oriented approach.</p>

                <a href='#appointment' className='btn btn-primary mt-2'>Book Appointment</a>
            </div>
        </div>
    );
};

export default Hero;