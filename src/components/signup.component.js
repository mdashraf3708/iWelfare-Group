import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class Signup extends Component {
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
            <div>
               <p className="forgot-password text-right">
                Not registered yet? <a href="#" onClick={this.toggle}>Sign Up</a>
               </p>
               <Modal isOpen={this.state.modal}>
                 <form onSubmit={this.handleSubmit}>
                  <ModalHeader toggle={this.toggle} cssModule={{'modal-title': 'w-100 text-center'}}>
                  Sign Up
                  </ModalHeader>
                  <ModalBody>
                  <div className="form-group">
                   <label>First name</label>
                   <input type="text" className="form-control" placeholder="First name"/>
                  </div>
                  <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name"/>
                  </div>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control" placeholder="Enter password"/>
                  </div>
                  <Button color="info" block>Sign Up</Button>
                 </ModalBody>
                 <ModalFooter>
                 <div className="font-weight-dark">
                   <p className="forgot-password text-right">
                      Already registered <a href="#">sign in?</a>
                  </p>
                 </div>
                 </ModalFooter>
                 </form>
                </Modal>
            </div>
        )
    }
}