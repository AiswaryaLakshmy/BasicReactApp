import React from 'react';
import { BrowserRouter as Router, Route, Link, DefaultRoute } from "react-router-dom";

import UsersContainer from './components/UsersContainer'
import Login from './components/Login'
import UserForm from './components/UserForm'
import UserEdit from './components/UserEdit'
import RootPage from './components/RootPage'
import Logout from './components/Logout'
import User from './components/User'

const Routes = () =>
  <div>
    <Route exact path="/" component={ RootPage } />
    <Route path='/users_list' component={ UsersContainer } />
    <Route path="/users_create" component={ UserForm } />
    <Route path="/edit_user/:userId" component={ UserEdit } user={User}/>
    <Route path="/login" component={ Login } />
    <Route path="/logout" component={ Logout } />
  </div>

export default Routes
