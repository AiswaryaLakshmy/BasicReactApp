import React from 'react'
import { Route, Redirect } from 'react-router'
import UsersContainer from './UsersContainer'
import Login from './Login'

class RootPage extends React.Component {
  render() {
    const user = localStorage.getItem('token');
    if (user) {
      return <Redirect to="/" />
    } else {
      return <Redirect to="/login" />
    }
  }
}

export default RootPage
