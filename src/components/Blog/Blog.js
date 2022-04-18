import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="container py-5">
                <div>
                    <h2 className='txt-primary'>Difference between authorization and authentication?</h2>
                    <p>Authentication is the method of proving identity of an user, whereas authorization is the process of permitting access to the resources. Authentication validates user’s login credentials while authorization verifies whether access is allowed or not. Authentication is usually done before authorization, the authorization occurs after authentication. For example, we need login credentials to log into a PC, those username and password is Authentication. On the other hand, accessing files from a PC is authorization as it permits/allows me to access those files from the hard disk.</p>
                </div>
                <div>
                    <h2 className='txt-primary'>Why are you using firebase? What other options do you have to implement authentication?</h2>
                    <p>I am using Firebase as it  provides all in one backend services like database, authentication  using passwords, phone numbers, and cloud storage as well as it gives ready-made UI libraries. <br />

                        Other options do you have to implement authentication:
                        Multi-factor authentication: Two or more independent methods are required to identify a user.
                        Certificate-based authentication:In Certificate-based authentication, technology uses digital certificates to identify users, machines, or devices. A digital certificate is an electronic document based on the idea of ​​a driver's license or  passport.</p>
                </div>
                <div>
                    <h2 className='txt-primary'>What other services does firebase provide other than authentication?</h2>
                    <p>Firebase provides other than authentication: 1) Databases such as Firebase Realtime Database that use data synchronization. Whenever data changes, all connected devices will receive the update within milliseconds. It provides a collaborative and immersive experience without having to think about network code, Cloud Firestore, Cloud Storage that stores files like images, videos, and audio; 2) Firebase testing services such as Test Lab, Crashlytics, Performance monitoring, App Distribution; 3) Fast hosting service that hosts HTML, CSS, JavaScript, graphics, fonts, and icons.</p>
                </div>
            </div>
        </div>
    );
};

export default Blog;