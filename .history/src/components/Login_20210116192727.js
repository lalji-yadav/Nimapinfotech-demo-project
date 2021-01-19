import React from 'react';
import {TextField ,Button} from '@material-ui/core';

const Login=()=> {
    
        return (
            <div>
                <h1> Please Login </h1>

                <form noValidate autoComplete="off">
                <TextField id="standard-secondary" label="Standard secondary" color="secondary" />
                <TextField
                    id="filled-secondary"
                    label="Filled secondary"
                    variant="filled"
                    color="secondary"
                />
                <TextField
                    id="outlined-secondary"
                    label="Outlined secondary"
                    variant="outlined"
                    color="secondary"
                />
                </form>
                
            </div>
        );
    }

export default Login;
