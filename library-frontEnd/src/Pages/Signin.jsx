import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { setUser, setToken } from '../Redux/authSlice';
import axios from 'axios';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const Signin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const [loginError, setLoginError] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      axios
        .post('http://127.0.0.1:8000/signin/', values
        
        )
        .then((response) => {
          dispatch(setUser(response.data.user));
          dispatch(setToken(response.data.token));
          navigate('/')
        })
        .catch((error) => {
          console.error(error);
          setLoginError(true);
        });
    },
  });
  const paperStyle={
    padding:'30px 20px',width:300 ,margin:'20px auto'
}
const headerstyle={margin:0}

  return (
    <div>
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar>

                    </Avatar>
                    <h1 style={headerstyle}>Signin</h1>
                    <Typography variant='caption'>
                        Please fill in the form to create an Account
                    </Typography>
                </Grid>
                <form onSubmit={formik.handleSubmit}>
                   
                    <TextField fullWidth label='Email'
                    name='email' 
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}/>
                    <TextField fullWidth label='Password'
                    name='password' 
                    type='password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}/>
                    <Button type='submit' variant='contained' color='primary'>Sign in</Button>
                    {loginError && (
                      <Typography variant='body2' color='error'>
                        Incorrect username or password. Please try again.
                      </Typography>
                    )}
                    <h5>Dont Have an Account ....<Link to="/signup"> Register</Link></h5>

                </form>
               
            </Paper>
        </Grid>
      
    </div>
  );
};

export default Signin;
