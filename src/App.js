import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home_page/Home/Home';
import Event from './Pages/Event/Event';
import Login from './Pages/Login/Login';
import AuthProvider from './Pages/Firebase/AuthProvider';
import PrivateRoute from './Pages/Privateroute/PrivateRoute';
import Booking from './Pages/Booking/Booking';
import ManageEvent from './Pages/ManageEvent/ManageEvent';
import MyEvents from './Pages/MyEvents/MyEvents';
import AddEvent from './Pages/AddEvent/AddEvent';
import NotFound from './Pages/NotFound/NotFound';
import Dashboard from './Pages/Dashboard/Dashboard';
import Register from './Pages/Register/Register';
import Explore from './Pages/Explore/Explore';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>

          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <PrivateRoute path='/event/:eventid'>
              <Header></Header>
              <Event></Event>
            </PrivateRoute>

            <PrivateRoute path='/book/:eventid'>
              <Booking></Booking>
            </PrivateRoute>

            {/*  <PrivateRoute path='/'>

            </PrivateRoute> */}

            <PrivateRoute path='/deshboard'>
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path='/explore'>
              <Header></Header>
              <Explore></Explore>
            </Route>

            <Route path='/login'>
              <Header></Header>
              <Login></Login>
            </Route>

            <Route path='/register'>
              <Header></Header>
              <Register></Register>
            </Route>

            <Route path='*'>
              <Header></Header>
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
