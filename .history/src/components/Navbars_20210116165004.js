import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl ,Button } from 'react-bootstrap';

const Navbars=()=> {
        return (
            <div>

              <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                   
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
                
            </div>
        );
    }

export default Navbars;
