import React, { Component, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal} from 'reactstrap';
import { Carousel, Navbar, Nav, NavDropdown, Button} from 'react-bootstrap';


import "bootstrap/dist/css/bootstrap.min.css";


import Home from "./components/home.component";
import Donations from "./components/donations.component";
import FocusingArea from "./components/focusing-area.component";
import Requirements from "./components/requirements.component";
import Events from "./components/events.component";
import AboutUs from "./components/about-us.component";
import Login from "./components/login.component";
import Signup from "./components/signup.component";

import logo from "./logo.svg";

class App extends Component {
constructor(props) {
  super(props);

  this.toggle = this.toggleDropdown.bind(this);
  this.state = { dropdownOpen: false };
}

toggleDropdown() {
  this.setState({
    dropdownOpen: !this.state.dropdownOpen
  });
}

  render() {
    return (
      <Router>
        <div className="container">
          {/* <nav className="navbar navbar-default navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">iWelfare Group</Link>
            <button className="navbar-toggler" ype="button" data-toggle="collape" data-target="#collapsingNavbar">
              <span className="navbar-toggler-icon"></span>
	          </button>
            <div className="collpase navbar-collapse w-100" id="collapsingNavbar">
              <ul className="navbar-nav mr-auto w-100 justify-content-end">
                <li className="navbar-item">
                  <Link to="/donations" className="nav-link">Donations</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/focusing-area" className="nav-link">Focusing Area</Link>
                </li>
                <li className="nav-item dropdown">
                 <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                 <DropdownToggle tag="a" className="nav-link" caret>
                   Requirements
                 </DropdownToggle>
                 <DropdownMenu>
                   <DropdownItem>Education Requirements</DropdownItem>
                   <DropdownItem>Medical Requirements</DropdownItem>
                   <DropdownItem>Financial Requirements</DropdownItem>
                   <DropdownItem>Mishap Requirements</DropdownItem>
                   </DropdownMenu>
                </Dropdown>
                </li>
                <li className="navbar-item">
                  <Link to="/events" className="nav-link">Events</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/about-us" className="nav-link">About Us</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/about-us" className="nav-link">Administrator</Link>
                </li>
                <li className="navbar-item">
                  <Login></Login>
                </li>
              </ul>
            </div>
          </nav> */}
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">
              <img src={logo} width="30" height="30" alt="iWelfare Group" />{' '}iWelfare Group</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto w-100 justify-content-end">
                <Nav.Link href="/donations">Donations</Nav.Link>
                <Nav.Link href="/focusing-area">Focusing Area</Nav.Link>
                <NavDropdown title="Requirements" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#">Education Requirements</NavDropdown.Item>
                  <NavDropdown.Item href="#">Medical Requirements</NavDropdown.Item>
                  <NavDropdown.Item href="#">Financial Requirements</NavDropdown.Item>
                  <NavDropdown.Item href="#">Mishap Requirements</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/events">Events</Nav.Link>
                <Nav.Link href="/about-us">About Us</Nav.Link>
                <Nav.Link href="#">Administrator</Nav.Link>
                <Login></Login>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
          <br/>
          
          <Route path="/" exact component={Home} />
          <Route path="/donations" exact component={Donations} />
          <Route path="/focusing-area" component={FocusingArea} />
          <Route path="/requirements" component={Requirements} />
          <Route path="/events" component={Events} />
          <Route path="/about-us" component={AboutUs} />
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
        </div>
        
      </Router>
    );
  }
}

export default App;