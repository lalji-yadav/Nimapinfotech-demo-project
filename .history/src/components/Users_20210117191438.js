import React from 'react';
import { TableBody,Button } from "@material-ui/core";

const User=()=> {
    
        return (
            <div style={{padding:"3%"}}>
                <div className="row" c>
                    <div className="col-sm-5">
                        <h5>Username:</h5> <span> </span> 
                        <h5>Password:</h5> <span> </span>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-4 row">

                    <Button variant="contained">Default</Button> <br/> <br/> <br/>
                    <Button variant="contained">Default</Button>

                    </div>

                </div>
            </div>
        );
    }

export default User;
