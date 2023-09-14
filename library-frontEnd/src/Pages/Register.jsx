import React from 'react';
import { Avatar, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { setUser, setToken } from '../Redux/authSlice';
import { Link } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      address: '',
      college: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      phone: Yup.string().required('Phone is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      address: Yup.string().required('Address is required'),
      college: Yup.string().required('College is required'),
      password: Yup.string().required('Password is required'),
    }),
    onSubmit: (values) => {
      axios
        .post('http://127.0.0.1:8000/register/', values) 
        .then((response) => {
          console.log('Registration response:', response.data);
          dispatch(setUser(response.data.user));
          dispatch(setToken(response.data.token));
          navigate('/signin');
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });

  const paperStyle = {
    padding: '30px 20px',
    width: 300,
    margin: '20px auto',
  };

  const headerstyle = { margin: 0 };

  return (
    <div>
      <Grid>
        <Paper elevation={20} style={paperStyle}>
          <Grid align='center'>
            <Avatar></Avatar>
            <h1 style={headerstyle}>Signup</h1>
            <Typography variant='caption'>
              Please fill in the form to create an Account
            </Typography>
          </Grid>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              label='Name'
              name='name' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              fullWidth
              label='Phone'
              name='phone' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              error={formik.touched.phone && Boolean(formik.errors.phone)}
              helperText={formik.touched.phone && formik.errors.phone}
            />
            <TextField
              fullWidth
              label='Email'
              name='email' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              label='Address'
              name='address' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.address}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
            <TextField
              fullWidth
              label='College'
              name='college' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.college}
              error={formik.touched.college && Boolean(formik.errors.college)}
              helperText={formik.touched.college && formik.errors.college}
            />
            <TextField
              fullWidth
              label='Password'
              type='password'
              name='password' 
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />

            <Button type='submit' variant='contained' color='primary'>
              Signup
            </Button>
            <h5>Already have an  Account ....<Link to="/signin"> Register</Link></h5>

          </form>
        </Paper>
      </Grid>
    </div>
  );
}

export default Register;
