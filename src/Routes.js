import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './core/Home'
import Signin from './user/Signin'
import Signup from './user/Signup'
import 'dotenv'
import PrivateRoute from './auth.js/PrivateRoute'
import UserDashboard from './user/UserDashboard'
const Routes = () => {
      return (
            <BrowserRouter>
                  <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/signin" exact component={Signin} />
                        <Route path="/signup" exact component={Signup} />
                        <PrivateRoute path="/dashboard" exact component={UserDashboard}/>
                  </Switch>
            </BrowserRouter>
      )
}

export default Routes
