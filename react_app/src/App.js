import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, DefaultRoute } from "react-router-dom";

import UsersContainer from './components/UsersContainer'
import Login from './components/Login'
import UserForm from './components/UserForm'
import RootPage from './components/RootPage'

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to='/'>Users</Link>
        </li>
        <li>
          <Link to="/users_create">Create new User </Link>
        </li>
        <li>
          <Link to="/login">Login </Link>
        </li>
      </ul>

      <hr />
      <Route exact path="/" component={ RootPage } />
      <Route path='/users_list' component={ UsersContainer } />
      <Route path="/users_create" component={ UserForm } />
      <Route path="/login" component={ Login } />
    </div>
  </Router>
);

export default App;
