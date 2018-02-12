import React from 'react'
import UsersContainer from './UsersContainer'
import Login from './Login'

class RootPage extends React.Component {
  render() {
    const user = localStorage.getItem('token');
    if (user) {
      return < UsersContainer />
    } else {
      return < Login />
    }
  }
}

export default RootPage
