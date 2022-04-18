import React from 'react';
import { Link } from 'react-router-dom';

const Appoinment = () => {
    return (
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
                                <Link className="btn btn-primary" to='/checkout'> Book now </Link>
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
                                <Link className="btn btn-primary" to='/checkout'> Book now </Link>
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
                                <Link className="btn btn-primary" to='/checkout'> Book now </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Appoinment;