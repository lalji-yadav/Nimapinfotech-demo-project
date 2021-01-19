import React, { useState } from 'react';
import { Dropdown } from "react-bootstrap";

const Home=()=> {

    const data = [
        { value: 'flavor', label: 'flavor' },
        { value: 'yummy', label: 'yummy' },
        { value: 'red', label: 'red' },
        { value: 'green', label: 'green' },
        { value: 'yellow', label: 'yellow' },
      ];

      const [select, setSelelct] = useState('')
    
        return (
            <div>

                <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic"
                 placeholder="Select Option"
                 value={select} // set selected value
                 options={data} // set list of the data
                // onChange={handleChange} // assign onChange function
                >
                    Dropdown Button
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/a">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>


            </div>
        );
    }

export default Home;
