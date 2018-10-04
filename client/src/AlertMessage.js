import React, { Component } from "react";
import { Alert } from "react-bootstrap";

class AlertMessage extends Component{

  render(){
    const {varient, heading, message} = this.props;
    return (
      <Alert dismissible variant={varient}>
        {heading ? <Alert.Heading>{heading}</Alert.Heading> : ''}
        <p>
        {`${message}`}
        </p>
    </Alert>
    );
  }
}

export default AlertMessage;