import React, { Component } from 'react'
import { Route, Redirect } from 'react-router'
import update from 'immutability-helper'
import axios from 'axios'
import PropTypes from "prop-types";
import Main from '../Main'

class UserEdit extends Component {
  static contextTypes = {
    router: PropTypes.object,
    isLoggedIn: PropTypes.bool
  }

  constructor(props, context) {
    super(props, context)
    this.state = {
      email: '',
      currentUser: { email: '' }
    }
  }

  componentDidMount () {
    debugger
    axios.get(
      'http://localhost:3001/api/v1/users/'+this.props.match.params.userId+'.json',
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('token')
        }
      }
    )
    .then((response)=>{
      const {data} = response.data;
      console.log(data)
      this.setState({
        currentUser: response.data.data
      })
      debugger
    }).catch((error)=> console.log(error));
  }

  handleInput = (e) => {
    const foo = update(this.state.currentUser, {[e.target.name]: {$set: e.target.value}})
    this.setState({
      currentUser: foo
    })
  }

  editUser = () => {
    axios.patch(
      'http://localhost:3001/api/v1/users/'+this.state.currentUser.id+'.json',
      {
        user: this.state.currentUser
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
    if (localStorage.getItem('login') == 'true' && localStorage.getItem('user_role') == 'admin') {
      return (
        <div className="name">
          <Main />
          <input className="input" type="text" name="email" placeholder='Email' value={this.state.currentUser.email} onChange={this.handleInput} />
          <input className="input" type="text" name="email" placeholder='Email' value={this.state.currentUser.email} onChange={this.handleInput} />
          <button className='editUser'
            onClick={this.editUser} >
            Update User
          </button>
        </div>
      );
    }
    else {
      return <Redirect to="/" />
    }
  }
}

export default UserEdit
