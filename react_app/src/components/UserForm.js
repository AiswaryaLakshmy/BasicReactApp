import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import update from 'immutability-helper'
import axios from 'axios'
import PropTypes from "prop-types";
import ConstantsStore from '../helper/ConstantsStore'

class UserForm extends Component {
  static contextTypes = {
    router: PropTypes.object,
    isLoggedIn: PropTypes.bool
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      email: '',
      password: '',
    }
  }

  componentWillMount (){
    this.setState({isLoggedIn: ConstantsStore.isLoggedIn()})
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
      this.context.router.history.push("/");
    })
    .catch(
      error => console.log(error))
  }

  render() {
    const isLoggedIn = ConstantsStore.isLoggedIn()
    if (localStorage.getItem('login') == 'true') {
      if (localStorage.getItem('user_role') == 'admin') {
        return (
          <div className="name">
            <p> fjhkj </p>
            <p> {this.state.isLoggedIn} </p>
            <input className="input" type="text" name="email" placeholder='Email' value={this.state.email} onChange={this.handleInput} />
            <input className="input" type="text" name="password" placeholder='Passowrd' value={this.state.password} onChange={this.handleInput}/>
            <button className='newUser'
              onClick={this.addNewUser} >
              Create User
            </button>
          </div>
        );
      }
      else {
        return <Redirect to="/" />
      }
    } else {
      return <Redirect to="/login" />
    }
  }
}

export default UserForm
