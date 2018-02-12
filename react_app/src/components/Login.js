import React from 'react';
import axios from 'axios'

class Login extends React.Component {
  state = {
    email: '',
    password: '',
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  loginUser = () => {
    debugger
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
