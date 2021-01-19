import React from 'react';
import { TableBody,Button } from "@material-ui/core";
import  "../App.css";

const User=()=> {
    
        return (
            <div style={{padding:"2% 12% 3% 12%"}}>
                <div className="row" c>
                    <div className="col-sm-5">
                        <h5>Username:</h5> <span> </span> 
                        <h5>Password:</h5> <span> </span>
                    </div>
                    <div className="col-sm-5">
                        <h5>Username:</h5> <span> </span> 
                        <h5>Password:</h5> <input type="text" /> 
                    </div>
                    
                </div>

                <div className="row" style={{marginTop:"5%"}}>
                    <div className="col-sm-2">
                    <Button className="MuiButton-root" variant="contained">Change password</Button> 
                    </div>
                    <div className="col-sm-2">
                    <Button variant="contained">Logout</Button>
                    </div>


                </div>
            </div>
        );
    }

export default User;
