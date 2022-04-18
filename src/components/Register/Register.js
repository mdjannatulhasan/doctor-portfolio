import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import app from '../../firebase.init';
import './Register.css';


const auth = getAuth(app);
const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [errorMsg, setErrorMsg] = useState('');

    const handleEmailBlur = (event) => {
        setEmail(event.target.value);
    }
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value);
    }
    const handleConfirmPasswordBlur = (event) => {
        setPasswordConfirm(event.target.value);
    }
    const handleError = (event) => {
        setErrorMsg(event.target.value);
    }

    const handleCreateUser = event => {
        event.preventDefault();
        if (password != passwordConfirm) {
            setErrorMsg("Password doesn't match");
            return;
        } else setErrorMsg('');
        if (password.length < 6) {
            setErrorMsg("Password must have 6 characters");
            return;
        } else setErrorMsg('');

        createUserWithEmailAndPassword(email, password);
    }

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
    const navigate = useNavigate();
    if (user) {
        navigate('/home');
    }
    return (
        <div className='mb-5'>
            <Container>
                <div className='form-container mx-auto'>
                    <Form className='' onSubmit={handleCreateUser}>
                        <h2 className='mb-3'>Please Register Here</h2>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" name="name" placeholder="Enter Full Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control onBlur={handleEmailBlur} type="email" name="email" placeholder="Enter email" required />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onBlur={handlePasswordBlur} type="password" name="password" placeholder="Password" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control onBlur={handleConfirmPasswordBlur} type="password" name="password-confirm" placeholder="Password" required />
                        </Form.Group>

                        <p className='text-danger'>{errorMsg}</p>

                        <div className="d-flex align-items-center">
                            <Button variant="primary" type="submit">
                                Register
                            </Button>
                            <Link className='ms-3 txt-primary inline-block' to='/login'>Already have an account? Please login here</Link>
                        </div>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Register;