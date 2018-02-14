import React from 'react'
import { BrowserRouter as Router, Route, Link, DefaultRoute } from "react-router-dom";

class Main extends React.Component {
  componentWillMount (){
    this.setState({login: localStorage.getItem('login')})
    this.setState({user_role: localStorage.getItem('user_role')})
  }

  render() {
    return(
      ( this.state.login == 'true') ? (
        (this.state.user_role == 'admin') ? (
          <div>
            <ul>
              <li>
                <Link to='/users_list'>Users</Link>
              </li>
              <li>
                <Link to="/users_create">Create new User </Link>
              </li>
              <li>
                <Link to="/login">Login </Link>
              </li>
              <li>
                <Link to="/logout">Logout </Link>
              </li>
            </ul>
          </div>
        ) : (
          <div>
            <ul>
              <li>
                <Link to="/logout">Logout </Link>
              </li>
            </ul>
          </div>
        )) : (
      <div>
      </div>
      )
    )
  }
}

export default Main
