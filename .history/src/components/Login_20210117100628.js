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
import {IconButton, TextField,Input,InputLabel,FormControl,InputAdornment} from '@material-ui/core';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';

import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

export default function Login() {

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
      <div>

         <TextField id="Username"
                 label="Username"
                    color="primary" />

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
      </div>
    </div>
  );
}

