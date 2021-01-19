import React from 'react';
import {IconButton, TextField,Input,InputLabel,FormControl,InputAdornment,Card,
Button} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useFormik } from 'formik';


const validate = values => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 6) {
    errors.password = 'Must be 6 characters or greater';
  }

  return errors;
};

 const Login=()=> {

  const [values, setValues] = React.useState({
    username:'',
    password: '',
    showPassword: false,
  });

  let history = useHistory();

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validate,
  });

 const formSubmit=()=> {
        axios.post('https://reqres.in/api/login',
        { username: values.username, password: values.password }).then(response => {
        console.log(response);
      alert("Login Successfullly");
      history.push('/')
      }).catch(error => {
          console.log(error);
          alert("Please enter correct email and password")
      });
    //alert(`${values.Username}`)
  }

  return (
    <div>
      <Card style={{width:"50%", border:"1px solid red", margin:"5% 25% 0% 25%", padding:"3%"}}>

         <TextField id="username"
           // onChange={handleChange('username')}
           // value={values.username}
            style={{width:"40%"}}
            label="Username"
            color="primary"

            name="username"
            type="text"
            onChange={formik.handleChange('username')}
            onBlur={formik.handleBlur}
            value={formik.values.username}
             /> <br /> <br />

        {formik.touched.username && formik.errors.username ? (
         <div>{formik.errors.username}</div>
       ) : null}

         <FormControl style={{width:"40%"}}>
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <div className="row" style={{margin:"5% 0% 0% 0%"}}>
          <div className="col-sm-6">
            <Button onClick={formSubmit} variant="contained" color="primary"> Login </Button>
          </div>
          <div className="col-sm-6">
          <Button variant="contained" color="primary"> Register </Button>
          </div>

        </div>
      </Card>
    </div>
  );
}

export default Login;
