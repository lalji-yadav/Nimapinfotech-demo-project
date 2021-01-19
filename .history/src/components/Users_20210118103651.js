import React, {useState} from 'react';
import { Button } from "@material-ui/core";
import { useFormik } from 'formik';
import  "../App.css";

const validate = values => {
    const errors = {};
    if (!values.password) {
      errors.password = 'Required';
    } else if (values.password.length <= 6 ) {
      errors.password = 'Must be 6 characters or greater';
    }
    return errors;
  };

const User=()=> {

    const [values, setValues] = useState({
        username: 'Anubhav',
        password: 'Anubhav@123',
        text: 'Change password'
    })

    const changeHandler=()=> {
        setValues({
            username:'Anubhav',
            text: 'Save password',

        })

        alert('wel')
    }

    const formik = useFormik({
        initialValues: {
          password: ''
        },
        validate,
      });
    
    const logoutSubmit=()=> {
        alert('Logout')
    }

     return (
            <div style={{margin:"2% 12% 3% 12%", border:"1px solid green", padding:'4% 2% 8% 2%'}}>
                {
                    values.text=== 'Change password' ? 
                     <div className=" col-sm-5">
                        <div className="row">
                        <h5>Username:</h5> &nbsp; &nbsp; <p>{values.username} </p> 
                        </div>

                        <div className="row">
                         <h5>Password:</h5>  &nbsp; &nbsp; <p>{values.password} </p> 
                        </div>      
                    </div>
                     : 
                        <div className="col-sm-5">
                            <div className="row">
                             <h5>Username:</h5>  &nbsp; &nbsp; <p>{values.username} </p> 
                            </div>
                       
                         <div className="row"> <h5>Password:</h5> &nbsp; &nbsp;
                           <input
                            id="password"
                            name="password"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            /> 
                            <p style={{color:'red', fontSize:"1vw"}}>
                            {formik.touched.password && formik.errors.password ? (
                                    <div>{formik.errors.password}</div>
                                ) : null}
                           
                            </p>
                         </div> 
                   </div>
                }

                <div className="row" style={{marginTop:"5%"}}>
                    <div className="col-sm-3">
                        <Button className="MuiButton-root" variant="contained"
                        onClick={changeHandler}
                        style={{textTransform:'unset', fontSize:'1.1vw'}}
                        >{values.text}</Button> 
                    </div>

                    <div className="col-sm-2">
                        <Button variant="contained" onClick={logoutSubmit}
                        style={{textTransform:'unset', fontSize:'1.1vw'}}
                        >Logout</Button>
                    </div>


                </div>
            </div>
        );
    }

export default User;
