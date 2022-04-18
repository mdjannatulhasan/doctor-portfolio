import { getAuth } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <Container>
                <div className='form-container mx-auto'>
                    <Form className=''>
                        <h2>Please Login</h2>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    <Button className='mt-4 mb-5' onClick={()=>{signInWithGoogle()}}>Google Sign In</Button>
                </div>
            </Container>
        </div>
    );
};

export default Login;