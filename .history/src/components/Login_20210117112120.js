import React from 'react';
import {IconButton, TextField,Input,InputLabel,FormControl,InputAdornment,Card,
Button} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

 const Login=()=> {

  const [values, setValues] = React.useState({
    username:'',
    password: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

 const formSubmit=()=> {
    alert(`${Username}`)
  }

  return (
    <div>
      <Card style={{width:"50%", border:"1px solid red", margin:"5% 25% 0% 25%", padding:"3%"}}>

         <TextField id="Username"
           onChange={handleChange}
            style={{width:"40%"}}
            label="Username"
            color="primary" /> <br /> <br />

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
