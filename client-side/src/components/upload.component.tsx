import React from 'react';
import { Form, Col, Button, Row } from 'react-bootstrap';
import './upload.component.css';

export const UploadComponent: React.FC = () => {
    return (
        <div id="upload-container">
            <header>
                <h2 id="upload-header" className="dark">Upload Reimbursement Ticket
                </h2>
            </header>
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <Form.Label>Amount</Form.Label>
                        <Form.Control placeholder="Amount" />
                    </Form.Group>

                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} >
                        <Form.Label>Description</Form.Label>
                        <Form.Control placeholder="Description" />
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} controlId="formGridImg">
                        <Form.Label>Receipt</Form.Label>
                        <Form.Control type="img" placeholder="Image" />
                    </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit">
                    Submit
            </Button>
            </Form>
        </div>
    )
}