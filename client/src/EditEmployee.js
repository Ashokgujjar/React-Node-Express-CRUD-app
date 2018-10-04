import React, { Component } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class EditEmployee extends Component {

    constructor(props) {
        super(props);
        this.state = { employee: {} };

    }

    render() {
        const {employee, handleChange, handleSubmit, onHide, show} = this.props;   
        return (
            <Modal show={show} onHide={onHide}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Employee</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Name" value={`${employee.name}`} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="address">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" name="address" placeholder="Address" value={`${employee.address}`} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="position">
                        <Form.Label>Position</Form.Label>
                        <Form.Control type="text" name="position" placeholder="Position" value={`${employee.position}`} onChange={handleChange}/>
                    </Form.Group>

                    <Form.Group controlId="salary">
                        <Form.Label>Salary</Form.Label>
                        <Form.Control type="text" name="salary" placeholder="Salary" value={`${employee.salary}`} onChange={handleChange}/>
                    </Form.Group>
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>
                        Close
                    </Button>
                    <Button type="submit" variant="primary" onClick={this.props.onHide}>
                        Save Changes
                    </Button>
                </Modal.Footer>
                </Form>
            </Modal>
        )
    }
}

export default EditEmployee;