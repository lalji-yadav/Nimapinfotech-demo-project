import React from 'react';
import { Navbar,Nav,NavDropdown,Form,FormControl ,Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import Tasks from "./Tasks";
import User from "./Users";


const Navbars=()=> {
        return (
            <div>

<Router>
      <div>
         <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">LOGO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link> <Link to="/">Home</Link> </Nav.Link>
                    <Nav.Link> <Link to="/tasks">Tasks</Link> </Nav.Link>
                    <Nav.Link> <Link to="/user">User</Link> </Nav.Link>
                   
                  </Nav>
                </Navbar.Collapse>
              </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/" component={Home} />
          
          <Route exact path="/user" component={User} />
            
          <Route exact path="/tasks" component={Tasks} />
           
        </Switch>
      </div>
    </Router>
                
            </div>
        );
    }

export default Navbars;
