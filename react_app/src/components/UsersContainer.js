import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import update from 'immutability-helper'
import axios from 'axios';
import User from './User'
import UserForm from './UserForm'

class UsersContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount(){
  axios.get('http://localhost:3001/api/v1/users.json')
    .then((response)=>{
      const {data} = response.data;
      console.log(data)
      this.setState({
        users: data
      })
    }).catch((error)=> console.log(error));
  }

  render() {
    const {users} = this.state;
    return (
      <div>
        Users
        <Router>
          <div>
            <ul>
              <li><Link to="/users_create">Create new User </Link></li>
            </ul>
            <hr />
            <Route path="/users_create" component={UserForm} />
          </div>
        </Router>
        {this.state.users.map((user) => {
          return(<User user={user} key={user.id} />)
        })}
      </div>
    )
  }
}

export default UsersContainer
