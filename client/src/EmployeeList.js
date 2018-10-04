import axios from 'axios';
import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import './App.css';
import EditEmployee from './EditEmployee';

class EmployeeList extends Component {

  constructor(props) {
    super(props);
    this.state = { employees: [], modalShow: false, selectedEmployee: {} };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    axios.get(`/employeeapi/employees`)
      .then(res => {
        this.setState({ employees: res.data });
      });
  }

  handleChange(event) {
    let employee = this.state.selectedEmployee;
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    employee[name] = value;

    this.setState({
      selectedEmployee: employee
    });
  }

  handleSubmit(event){
    
    const {selectedEmployee: employee} = this.state;
    console.log(employee);
    event.preventDefault();
    let response = axios.put(`/employeeapi/employee/${employee._id}`, employee)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.log(error);
    });

    if(response){
      console.log(response);
      this.props.toggleAlertMessage({showMessage:true, varient:"success", message:"Data Updated Successfully!"});
    }
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
              this.state.employees.map((employee, key) => {
                return (
                  <tr key={key}>
                    <td>{key}</td>
                    <td>{employee.name}</td>
                    <td>{employee.address}</td>
                    <td>{employee.position}</td>
                    <td>{employee.salary}</td>
                    <td><Button onClick={() => this.setState({ modalShow: true, selectedEmployee: employee })}>Edit</Button>&nbsp;<Button>Delete</Button></td>
                  </tr>
                );
              })
            }
          </tbody>
        </Table>

        <EditEmployee
          employee={this.state.selectedEmployee || {}}
          show={this.state.modalShow}
          onHide={modalClose}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default EmployeeList;