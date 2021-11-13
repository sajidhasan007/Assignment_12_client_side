import Button from '@mui/material/Button';
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Deshboard.css';
import useAuth from '../Hooks/useAuth';


import { Container, Nav, Navbar } from 'react-bootstrap';
//import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
//import './Header.css';


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import MyEvents from '../MyEvents/MyEvents';
import Payment from './Payment/Payment';
import AddEvent from '../AddEvent/AddEvent';
import ManageEvent from '../ManageEvent/ManageEvent';
import AdminRoute from '../Login/AdminRoute/AdminRoute';
import AddAdmin from './AddAdmin/AddAdmin';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Review from './Review/Review';
import ManageBike from '../Managebike/ManageBike';

const drawerWidth = 240;
const Dashboard = (props) => {
    let { path, url } = useRouteMatch();

    const { user, admin, handlesignout } = useAuth();
    console.log(admin);

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };


    const drawer = (
        <div className='ms-3'>
            <div>
                <img className='deshboard-user-image' src={user.img || 'https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg'}></img>
                <h2>{user.name}</h2>
            </div>
            <Toolbar />
            <Divider />
            <List>


                {user?.email && admin ? <>
                    <Nav.Link as={HashLink} to={`${url}/addbike`} className='deshboard-item'>Add Bike</Nav.Link>

                    <Nav.Link as={HashLink} to={`${url}/managebike`} className='deshboard-item'>Manage Bike</Nav.Link>
                    <Nav.Link as={HashLink} to={`${url}/manageOrders`} className='deshboard-item'>Manage Orders</Nav.Link>
                    <Nav.Link as={HashLink} to={`${url}/addadmin`} className='deshboard-item'>Add an Admin</Nav.Link>
                    <button className='btn btn-danger mt-3' onClick={handlesignout}>SignOut</button>

                </>
                    :
                    <>
                        <Nav.Link as={HashLink} to={`${url}/myOrders`} className='deshboard-item'>My Orders</Nav.Link>
                        <Nav.Link as={HashLink} to={`${url}/payment`} className='deshboard-item'>Pay</Nav.Link>
                        <Nav.Link as={HashLink} to={`${url}/review`} className='deshboard-item'>Review</Nav.Link>
                        <button className='btn btn-danger mt-3' onClick={handlesignout}>SignOut</button>
                    </>

                }

                {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))} */}
            </List>


        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div >

            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    sx={{
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` }

                    }}
                >
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            <Nav.Link as={HashLink} to="/home" className='header-item'>Back to Home</Nav.Link>
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Box
                    component="nav"
                    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                    aria-label="mailbox folders"
                >
                    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                    <Drawer

                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                    {<Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', sm: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                        open
                    >
                        {drawer}
                    </Drawer>}
                </Box>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
                >
                    <Toolbar />


                </Box>
            </Box>

            <Switch>
                <Route exact path={path}>
                    <div className="d-flex justify-content-center deshboard-body">
                        <div>
                            <img className='deshboard-home-image mb-5' src="https://m.media-amazon.com/images/I/61CDMIGC5AS._AC_SL1500_.jpg" alt="Paris" width="300" height="300" />
                            <h1>Welcome to <sup className='deashboard-user-name'>{user.name}'s</sup>  deshboard </h1>
                        </div>
                    </div>
                </Route>

                <Route exact path={`${path}/payment`}>
                    <Payment></Payment>
                </Route>

                <Route exact path={`${path}/myOrders`}>
                    <MyEvents></MyEvents>
                </Route>

                <AdminRoute exact path={`${path}/addbike`}>
                    <AddEvent></AddEvent>
                </AdminRoute>

                <AdminRoute exact path={`${path}/addadmin`}>
                    <MakeAdmin></MakeAdmin>
                </AdminRoute>

                <AdminRoute exact path={`${path}/managebike`}>
                    <ManageBike></ManageBike>
                </AdminRoute>

                <Route exact path={`${path}/review`}>
                    <Review></Review>
                </Route>

                <AdminRoute exact path={`${path}/manageOrders`}>
                    <ManageEvent></ManageEvent>
                </AdminRoute>


            </Switch>

        </div>


    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default Dashboard;