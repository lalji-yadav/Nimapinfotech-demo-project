import React, { useState } from 'react';
import Select from 'react-select';

const Home=()=> {

    const data = [
        {
             value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley  type and scrambled it to make a type specimen book',
             label: 'Home'
        },
        { 
            value: 'yummy',
            label: 'Contact'
        },
        {
             value: 'red',
            label: 'About'
         },
        { 
           value: 'green',
           label: 'Gallary'
        },
      ];

      const [select, setSelelct] = useState('')

      const handleChange = e => {
        setSelelct(e);
      }
    
        return (
            <div style={{padding:"3%"}}>
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
                    <div style={{ marginTop: 10, fontSize:"1.2vw"}}> {select.label}</div>
                    <div style={{fontSize:"1.2vw"}}>{select.value}</div>
                </div>
                }

            </div>
        );
    }

export default Home;
