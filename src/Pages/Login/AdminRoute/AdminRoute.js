import { CircularProgress } from '@mui/material';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';


const AdminRoute = ({ children, ...rest }) => {
    //isLoading = false;
    const { user, admin, isLoading } = useAuth();
    //console.log(isLoading);

    if (isLoading) { return <CircularProgress /> }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;