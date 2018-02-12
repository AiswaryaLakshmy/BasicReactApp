import React, { Component } from 'react'
import update from 'immutability-helper'
import axios from 'axios'

class UserForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
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
    return (
      <div className="name">
        <form>
          <input className="input" type="text" name="email" placeholder='Email' value={this.state.email} onChange={this.handleInput} />
          <input className="input" type="text" name="password" placeholder='Passowrd' value={this.state.password} onChange={this.handleInput}/>
          <button className='newUser'
            onClick={this.addNewUser} >
            Create User
          </button>
        </form>
      </div>
    );
  }
}

export default UserForm
