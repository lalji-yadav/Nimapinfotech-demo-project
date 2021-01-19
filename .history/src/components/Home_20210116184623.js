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

      const handleChange = e => {
        setSelelct(e);
      }
    
        return (
            <div>

            <select
                    placeholder="Select Option"
                    value={select} // set selected value
                    options={data} // set list of the data
                    onChange={handleChange} // assign onChange function
                />

                {select && <div style={{ marginTop: 20, lineHeight: '25px' }}>
                    <b>Selected Option</b><br />
                    <div style={{ marginTop: 10 }}><b>Label: </b> {select.label}</div>
                    <div><b>Value: </b> {select.value}</div>
                </div>}

                {/* <Dropdown>
                <Dropdown.Toggle variant="outline-dark" id="dropdown-basic"
                 placeholder="Select Option"
                 value={select} // set selected value
                 options={data} // set list of the data
                // onChange={handleChange} // assign onChange function
                >
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="/a">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown> */}


            </div>
        );
    }

export default Home;
