import { Container, Typography, TextField, Button, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { Grid } from '@mui/material';

import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';


const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, signInWithGoogle, isLoading } = useAuth();

    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container className='mb-5'>
            <div className='d-flex justify-content-center'>
                <div>
                    <Grid container spacing={2}>
                        <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                            <Typography variant="body1" gutterBottom>Please Login</Typography>
                            <form onSubmit={handleLoginSubmit}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Email"
                                    name="email"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="standard-basic"
                                    label="Your Password"
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    variant="standard" />

                                <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                                <NavLink
                                    style={{ textDecoration: 'none' }}
                                    to="/register">
                                    <Button variant="text">I don't have an account? Please Register</Button>
                                </NavLink>
                                {isLoading && <CircularProgress />}
                                {user?.email && <Alert severity="success">Login successfully!</Alert>}
                                {/* {authError && <Alert severity="error">{authError}</Alert>} */}
                            </form>

                        </Grid>
                        <Grid item xs={12} md={6}>

                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    );
};

export default Login;