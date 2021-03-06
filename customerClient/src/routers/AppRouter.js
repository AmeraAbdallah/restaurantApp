import React from 'react';
import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

import Home from './../components/Home';
import Login from './../components/Login';
import Signup from './../components/Signup';

const AppRouter = () => {
    return (
    <Router>
        <div>
          <Switch>
            <PublicRoute path = '/' component = {Login} exact/>
            <PublicRoute path = '/signup' component = {Signup}/>
            <PrivateRoute path = '/Home' component = {Home}/>
            <Route>
              <div>not found</div>
            </Route>
          </Switch>
        </div>
      </Router>
    )
}

export default AppRouter;
