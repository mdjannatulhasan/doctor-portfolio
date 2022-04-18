import React from 'react';

const AboutDr = () => {
    return (
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
    );
};

export default AboutDr;