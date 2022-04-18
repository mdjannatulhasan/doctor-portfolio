import { getAuth } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import app from '../../firebase.init';
import './Register.css';


const auth = getAuth(app);
const Register = () => {
    return (
        <div>
            <Container>
                <div className='form-container mx-auto'>
                    <Form className=''>
                        <h2 className='mb-3'>Please Register Here</h2>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name" />
                        </Form.Group>

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
                            Register
                        </Button>
                    </Form>
                </div>
            </Container>
        </div>
    );
};

export default Register;