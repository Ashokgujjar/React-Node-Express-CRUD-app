import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import './App.css';
import EmployeeList from './EmployeeList';
import AlertMessage from './AlertMessage';

class App extends Component {

  constructor(){
    super();
    this.state={messageAttr:{showMessage:false, varient:"", message:""}};
  }

  toggleAlertMessage= (messageAttr) => {this.setState({messageAttr})}
  render() {
    const {messageAttr} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to EMS (React-Node-Express) App</h1>
        </header>
        <h2 className='App-intro'>List of Employees</h2>
        {messageAttr.showMessage ? <AlertMessage varient={messageAttr.varient} message={messageAttr.message}/> : ''}
        <EmployeeList alertMessage={this.state.messageAttr} toggleAlertMessage={this.toggleAlertMessage}/>
      </div>
    );
  }
}

export default App;