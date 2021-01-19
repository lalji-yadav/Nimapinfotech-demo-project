import React, { useState } from 'react';
import Select from 'react-select';

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

            <Select
                    styles={{width:"10px"}}
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

            </div>
        );
    }

export default Home;
