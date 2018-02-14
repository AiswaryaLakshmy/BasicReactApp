import React from 'react';
import axios from 'axios'
import PropTypes from "prop-types";
import Main from '../Main'
import ConstantsStore from '../helper/ConstantsStore'

class Login extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context) {
     super(props, context);
  }

  state = {
    email: '',
    password: '',
    isLoggedIn: ConstantsStore.isLoggedIn()
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  loginUser = () => {
    axios.post(
      'http://localhost:3001/api/v1/users/sign_in.json',
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
      localStorage.setItem('token', response.data.access_token);
      localStorage.setItem('user_role', response.data.role);
      localStorage.setItem('login', true);
      this.context.router.history.push("/users_list");
    })
    .catch(
      error => console.log(error))
  }

  render() {
    return (
      <div>
        <h2> Login </h2>
        <input
          name='email'
          placeholder='Email'
          onChange={e => this.onChange(e)}
          value={this.state.email} />
        <input
          name='password'
          placeholder='Password'
          type='password'
          onChange={e => this.onChange(e)}
          value={this.state.password} />
        <br />
        <button onClick={() => this.loginUser()}>Login</button>
      </div>
    );
  }
}

export default Login
