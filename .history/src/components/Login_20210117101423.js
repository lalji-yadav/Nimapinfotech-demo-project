// import React from 'react';
// import clsx from 'clsx';
// import {TextField ,FormControl,InputLabel,Input,InputAdornment} from '@material-ui/core';

// const Login=()=> {
    
//         return (
//             <div>
//                 <h1> Please Login </h1>

//                 <form noValidate autoComplete="off">

//                 <TextField id="Username"
//                  label="Username"
//                   color="primary" />

//                 <FormControl className={clsx(classNames.margin, classes.textField)}>
//                         <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
//                         <Input
//                             id="standard-adornment-password"
//                             type={values.showPassword ? 'text' : 'password'}
//                             value={values.password}
//                             onChange={handleChange('password')}
//                             endAdornment={
//                             <InputAdornment position="end">
//                                 <IconButton
//                                 aria-label="toggle password visibility"
//                                 onClick={handleClickShowPassword}
//                                 onMouseDown={handleMouseDownPassword}
//                                 >
//                                 {values.showPassword ? <Visibility /> : <VisibilityOff />}
//                                 </IconButton>
//                             </InputAdornment>
//                             }
//                         />
//                         </FormControl>  
                
                
//                 </form>
                
//             </div>
//         );
//     }

// export default Login;

import React from 'react';
import {IconButton, TextField,Input,InputLabel,FormControl,InputAdornment, Card} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

 const Login=()=> {

  const [values, setValues] = React.useState({
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

  return (
    <div>
      <Card style={{width:"50%", border:"1px solid red", margin:"5% 25% 0% 25%", padding:"3%"}}>

         <TextField id="Username"
            label="Username"
            color="primary" /> <br /> <br />

        <FormControl>
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
      </Card>
    </div>
  );
}

export default Login;
