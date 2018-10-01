import React, { Component } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';
import './App.css';

class EmployeeList extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    axios.get(`/employeeapi/employees`)
      .then(res => {
        this.setState({ employees: res.data });
      });
  }

  render() {

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
                </tr>
              );
            })
          }
          </tbody>
        </Table>
      </div>
    );
  }
}

export default EmployeeList;