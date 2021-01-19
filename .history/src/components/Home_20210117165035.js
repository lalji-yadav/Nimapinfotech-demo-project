import React, { useState } from 'react';
import Select from 'react-select';

const Home=()=> {

    const data = [
        { value: 'flavor', label: '1' },
        { value: 'yummy', label: '2' },
        { value: 'red', label: '3' },
        { value: 'green', label: '4' },
        { value: 'yellow', label: '5' },
      ];

      const [select, setSelelct] = useState('')

      const handleChange = e => {
        setSelelct(e);
      }
    
        return (
            <div>
                <div style={{width:"200px"}}>
                <Select
                    placeholder="Select Option"
                    value={select} // set selected value
                    options={data} // set list of the data
                    onChange={handleChange} // assign onChange function
                />
                </div>

                {select && 
                <div style={{ marginTop: 20, lineHeight: '25px' }}>
                    <b>Selected Option</b><br />
                    <div style={{ marginTop: 10 }}><b>Label: </b> {select.label}</div>
                    <div><b>Value: </b> {select.value}</div>
                </div>
                }

            </div>
        );
    }

export default Home;
