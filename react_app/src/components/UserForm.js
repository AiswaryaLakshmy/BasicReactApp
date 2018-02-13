import React, { Component } from 'react'
import update from 'immutability-helper'
import axios from 'axios'
import PropTypes from "prop-types";
import ConstantsStore from '../helper/ConstantsStore'

class UserForm extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {
      email: '',
      password: '',
      isLoggedIn: ConstantsStore.isLoggedIn()
    }
  }

  componentDidMount (){
  }
  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  addNewUser = () => {
    axios.post(
      'http://localhost:3001/api/v1/users.json',
      { user:
        {
          email: this.state.email,
          password: this.state.password
        }
      }, {
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*",
          'Authorization': localStorage.getItem('token')
        }
      }
    )
    .then(response => {
      console.log(response)
      const users = update(this.state.users, {
        $splice: [[0, 0, response.data]]
      })
      this.setState({users: users})
    })
    .catch(
      error => console.log(error))
  }

  render() {
    if (localStorage.getItem('user_role') == 'admin') {
      return (
        <div className="name">
          <input className="input" type="text" name="email" placeholder='Email' value={this.state.email} onChange={this.handleInput} />
          <input className="input" type="text" name="password" placeholder='Passowrd' value={this.state.password} onChange={this.handleInput}/>
          <button className='newUser'
            onClick={this.addNewUser} >
            Create User
          </button>
        </div>
      );
    } else {
      return (
        <h2> Unauthorized </h2>
      );
    }
  }
}

export default UserForm
