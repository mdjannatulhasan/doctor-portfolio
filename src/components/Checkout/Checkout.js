import React from 'react';
import { Form, Button } from 'react-bootstrap';

const Checkout = () => {
    return (
        <div className='my-5'>
            <div className='form-container mx-auto'>
                <Form className=''>
                    <h2 className='text-center mt-2 mb-4'>Please fill this booking form</h2>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your full name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Phone Number</Form.Label>
                        <Form.Control type="text" placeholder="Enter your phone number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Enter Booking Date</Form.Label>
                        <Form.Control type="date" placeholder="Enter Booking Date" />
                    </Form.Group>

                    <div className="pt-2">
                        <Button variant="primary" type="submit">
                            Confirm Booking
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;