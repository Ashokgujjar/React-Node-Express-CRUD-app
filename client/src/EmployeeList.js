import axios from 'axios';
import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './App.css';
import EditEmployee from './EditEmployee';

class EmployeeList extends Component {

  constructor(...args) {
    super(...args);

    this.state = { employees: [], modalShow: false };
  }

  componentDidMount() {
    axios.get(`/employeeapi/employees`)
      .then(res => {
        this.setState({ employees: res.data });
      });
  }

  render() {
    let modalClose = () => this.setState({ modalShow: false });

    return (
      <div className='Emplist'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Address</th>
              <th>Position</th>
              <th>Salary</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.employees.map((employee, key)=>{
              return (
                <tr key={key}>
                  <td>{key}</td>
                  <td>{employee.name}</td>
                  <td>{employee.address}</td>
                  <td>{employee.position}</td>
                  <td>{employee.salary}</td>
                  <td><Button onClick={() => this.setState({ modalShow: true })}>Edit</Button>&nbsp;<Button>Delete</Button></td>
                </tr>
              );
            })
          }
          </tbody>
        </Table>
      
        <EditEmployee
          show={this.state.modalShow}
          onHide={modalClose}
        />
      </div>
    );
  }
}

export default EmployeeList;