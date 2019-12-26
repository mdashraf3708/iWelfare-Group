import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {Button} from 'react-bootstrap';

import Signup from "./signup.component";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false,name: '',team :'' ,country: ''};

    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  handleSubmit(event) {
    event.preventDefault();
     }


  render() {
    return (
     <Router>
        <div>
        <Button variant="outline-info" onClick={this.toggle}>Login</Button>
        <Modal isOpen={this.state.modal}>
        <form onSubmit={this.handleSubmit}>
          <ModalHeader toggle={this.toggle} cssModule={{'modal-title': 'w-100 text-center'}}>
              Sign In
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email"/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password"/>
            </div>
            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1"/>
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            <Button color="info">Submit</Button>{' '}
            <Button color="danger" onClick={this.toggle}>Cancel</Button>
          </ModalBody>
          <ModalFooter>
            <div className="font-weight-dark">
           <Signup></Signup>
            <p className="forgot-password text-right">
                Forgot <a href="#">Password?</a>
            </p>
            </div>
          </ModalFooter>
          </form>
        </Modal>
        <Route path="/signup" component={Signup}/>
        </div>
    </Router>
    );
  }
}