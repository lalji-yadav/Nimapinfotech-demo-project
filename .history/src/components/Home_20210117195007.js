import React, { useState } from 'react';
import Select from 'react-select';

const Home=()=> {

    const data = [
        {
             value: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s when an unknown printer took a galley  type and scrambled it to make a type specimen book',
             label: 'Home'
        },
        { 
            value: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using',
            label: 'Contact'
        },
        {
             value: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here',
            label: 'About'
         },
        { 
           value: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable If you are going to use a passage of Lorem Ipsum you need to be sure there isnt anything embarrassing hidden in the middle of text',
           label: 'Gallary'
        },
      ];

      const [select, setSelelct] = useState('')

      const handleChange = e => {
        setSelelct(e);
      }
    
        return (
            <div style={{padding:"3% 12% 0% 12%"}}>
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
                    <div style=
                    {{ width:'60%',
                     border:'1px solid green',
                      marginTop: '3%',
                      fontSize:"1.2vw", 
                      padding:'5%'}}>
                          {select.value}</div>
                </div>
                }

            </div>
        );
    }

export default Home;
