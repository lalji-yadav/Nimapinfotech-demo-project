import React from 'react';
import { DropdownButton,Dropdown } from "react-bootstrap";

const Home=()=> {
    
        return (
            <div>
                <h1>Home COm</h1>
                <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>
                
            </div>
        );
    }

export default Home;
