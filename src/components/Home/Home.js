import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className='hero py-5'>
                <div className="container py-5">
                    <h1 className='txt-primary'>Dr. Lutful Majid Sakib</h1>
                    <p className='sub-title'>Specialised in Medicine and Surgery</p>

                    <p className='header-body'>I am glad you hand your health concerns to me. I'll make sure to deliver the best possible healthcare! Of course, I always complement my main services with a customer service oriented approach.</p>

                    <a href='#appointment' className='btn btn-primary mt-2'>Book Appointment</a>
                </div>
            </div>
            <div className='about-dr py-5'>
                <div className="container">
                    <h2 className='txt-primary sec-title'>About Me</h2>
                    <div className='row gx-5 align-items-center py-5'>
                        <div className="col-12 col-lg-4">
                            <img src="./../../images/drimg.jpeg" alt="" />
                        </div>

                        <div className="col-12 col-lg-8">
                            <h3 className='fw-bold txt-primary mt-lg-0 mt-4'>Lutful Majid Sakib</h3>
                            <p className='sec-sub-title'>Associate Consultant</p>

                            <h5 className='degrees fw-bold'>Degrees</h5>
                            <ol>
                                <li><strong>MBBS</strong>, Sher-e-Bangla Medical College</li>
                                <li><strong>Masters (MSc)</strong> in Clinical Gastroenterology, Memorial University of Newfoundland Canada</li>
                                <li><strong>FCPS (Surgery)</strong>, Bangladesh College of Physicians & Surgeons</li>
                                <li><strong>FRCS</strong>, Royal College of Surgeons, United Kingdom</li>
                            </ol>
                            <p>
                                As a topper in merit list starting from my early academic life in school secondary and higher secondary exams from Saidpur Govt. College, I continued to demonstrate my stint of excellence securing top positions in all my MBBS professional exams in Sher-e-Bangla Medical College. After obtaining MBBS degree from Sher-e-Bangla Medical College I did Masters (MSc) in Clinical Gastroenterology on full funded scholarship from Memorial University of Newfoundland Canada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div id="appointment" className='mb-5'> 
                <div className="container">
                    <h2 className='txt-primary sec-title mb-5'>Book any Service</h2>
                    <div className="row gx-5">
                        <div className="col-lg-4">
                            <div className="package">
                                <div className="pack-img">
                                    <img src="images/pack1.jpeg" alt="" />
                                </div>
                                <div className="pack-title">CONSULT ABOUT Surgery</div>
                                <div className="pack-desc">
                                    Are you in confusion about what to do, or do you need any surgery or not? Let's discuss about your issue and find out if you really needs a surgery
                                </div>
                                <div className="pack-price">TK. 3000</div>
                                <Link className="btn btn-primary" to='/'> Book now </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="package">
                                <div className="pack-img">
                                    <img src="images/pack2.jpeg" alt="" />
                                </div>
                                <div className="pack-title">Curdiac Surgery Consultation</div>
                                <div className="pack-desc">
                                    You can discuss about Cardiac difficulties you are experiencing and I will find out if you need any of these CABG (OFF PUMP)
                                    CABG ( ON PUMP),
                                    CABG with SAVE procedure,
                                    SAVE procedure & RV Repair,
                                    Excision of Sub-Aortic Member,
                                    CABG with DVR,
                                    CABG with ICR,
                                    Aorto Plasty or any others according to your need
                                </div>
                                <div className="pack-price">TK. 4000</div>
                                <Link className="btn btn-primary" to='/'> Book now </Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="package">
                                <div className="pack-img">
                                    <img src="images/pack3.jpeg" alt="" />
                                </div>
                                <div className="pack-title">EXECUTIVE BASIC CHECK-UP</div>
                                <div className="pack-desc">
                                    Consult with me for any of your issues. If you are a patient of open heart surgery, I may help you in these    Wound Debridement,
                                    Bronchial Pneumonectomy,
                                    Laparatomy,
                                    Expiration of pericardial fluid,
                                    Thromboembolectomy (Extra charges applicable)
                                </div>
                                <div className="pack-price">TK. 5000</div>
                                <Link className="btn btn-primary" to='/'> Book now </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;