import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import EmployeeList from './EmployeeList';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to EMS (React-Node-Express) App</h1>
        </header>
        <h2 className='App-intro'>List of Employees</h2>
        <EmployeeList/>
      </div>
    );
  }
}

export default App;