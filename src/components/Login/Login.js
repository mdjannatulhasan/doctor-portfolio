import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);
const Login = () => {
    let [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }

    let [
        signInWithEmailAndPassword,
        user1,
        loading,
        error1,
    ] = useSignInWithEmailAndPassword(auth);
    [user] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending, errorResetEmail] = useSendPasswordResetEmail(auth);
    if (user1) {
        navigate('/home');
    }
    const notify = () => toast("Email sent!");

    return (
        <div>
            <Container>
                <div className='form-container mx-auto'>
                    <Form className='' onSubmit={handleUserSignIn}>
                        <h2 className='text-center mt-2 mb-4'>Please Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
                        </Form.Group>
                        <p className='text-danger'>{error1?.message}</p>
                        <div className="d-flex align-items-center">
                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <Link className='ms-3 txt-primary inline-block btn btn-link' to='/register'>New here? Please register</Link>

                        </div>
                    </Form>
                        <div className='d-flex align-items-center mt-3'>Forget password? <button onClick={async () => {
                            await sendPasswordResetEmail(email);
                            toast('Email sent!');
                        }}
                            className=' txt-primary inline-block btn btn-link ms--5'>Request password reset link</button></div>
                    <hr className='my-4' />
                    <div className='text-center'>
                        <Button className='mb-5'
                            onClick={
                                () => {
                                    signInWithGoogle()
                                        .then(() => {
                                            navigate(from, { replace: true })
                                        })
                                }
                            }
                        >Sign In with Google</Button>
                    </div>
                    <ToastContainer />

                </div>
            </Container>
        </div>
    );
};

export default Login;