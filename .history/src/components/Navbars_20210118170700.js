import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "../App.css";

import Home from "./Home";
import Tasks from "./Tasks";
import User from "./Users";
import Login from "./Login";

const Navbars=()=> {
        return (
            <div>

              <Router>
                  <Navbar bg="light" expand="lg">
                      <Navbar.Brand> <h4>LOGO</h4></Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                      <Nav variant="pills" defaultActiveKey="/">

                        <Nav.Item className="navbarbtn">
                          <Nav.Link eventKey="link-3"> <Link style={{color:"black"}} to="/home"> Home </Link> </Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='navbarbtn'>
                          <Nav.Link eventKey="link-1"> <Link style={{color:"black"}}  to="/tasks"> Tasks </Link> </Nav.Link>
                        </Nav.Item>

                        <Nav.Item className="navbarbtn">
                          <Nav.Link eventKey="link-2">
                          <Link style={{color:"black"}} to="/user"> User </Link>
                          </Nav.Link>
                        </Nav.Item>

                        <Nav.Item className="navbarbtn">
                          <Nav.Link href='/'> Login
                          {/* <Link style={{color:"black"}} to="/"> Login </Link> */}
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      </Navbar.Collapse>
                    </Navbar>

       
                    <Switch>

                     <Route exact path="/" component={Login} />
                      <Route exact path="/home" component={Home} />
                      
                      <Route exact path="/user" component={User} />
                        
                      <Route exact path="/tasks" component={Tasks} />
                      
                    </Switch>
             </Router>
                
            </div>
        );
    }

export default Navbars;
