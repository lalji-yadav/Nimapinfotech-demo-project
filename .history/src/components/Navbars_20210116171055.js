import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl ,Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const Navbars=()=> {
        return (
            <div>

              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Tasks</Nav.Link>
                    <Nav.Link href="#link">User</Nav.Link>
                   
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
                
            </div>
        );
    }

export default Navbars;
