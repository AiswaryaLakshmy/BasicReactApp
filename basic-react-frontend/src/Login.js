import React from "react";
import axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.userSubmit = this.userSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  componentDidMount() {
    const token = localStorage.getItem('user_token')
    if(token){
      this.props.history.push("/");
    }
    else{
      this.props.history.push("/login");
    }
  };

  userSubmit(event) {
    axios.post('http://localhost:3001/api/v1/users/sign_in.json',{
      user: {
        email: this.state.email,
        password: this.state.password
      }
    }, {
       headers: {
         'Content-Type': 'application/json'
       }
     })
    .then(response => {
      console.log(response.data)
      localStorage.setItem('user_token', response.data.authentication_token)
      localStorage.setItem('user_email', response.data.email)
      localStorage.setItem('user_role', response.data.role)
      this.props.history.push("/");
    })
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div >
        <h3>Login</h3>
        <label>
          Name:
          <input type="text" name='email' value={this.state.value} onChange={this.handleChange} />
        </label>
        <br/><br/>
        <label>
          Password:
          <input type="password" name='password' value={this.state.value} onChange={this.handleChange}/>
        </label>
        <button onClick={this.userSubmit}>
          submit
        </button>
      </div>
    );
  }
}

export default Login;

