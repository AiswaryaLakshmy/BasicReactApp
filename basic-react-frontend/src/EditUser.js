import React from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

class EditUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      contact: '',
      first_name: '',
      last_name: '',
      currentUser: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.userSubmit = this.userSubmit.bind(this);
  }

  handleChange(event) {
    debugger
    this.setState({[event.target.name]: event.target.value});
  }

  componentDidMount() {
    if (localStorage.getItem('user_token')){
      axios.get('http://localhost:3001/api/v1/users/'+this.props.match.params.id+'.json',{
        headers: {
          'Content-Type': 'application/json',
          'X-User-Token': localStorage.getItem('user_token'),
          'X-User-Email': localStorage.getItem('user_email')
       }
      })
      .then(response => {
        console.log(response.data.user)
        this.setState({currentUser: response.data.user})
      })
      .catch(error => console.log(error))
    }
    else{
      this.props.history.push("/login");
    }
  };

  userSubmit(event) {
    axios.post('http://localhost:3001/api/v1/users/'+this.props.match.params.id+'.json',{
      user: {
        email: this.state.email,
        password: this.state.password,
        contact: this.state.contact,
        first_name: this.state.first_name,
        last_name: this.state.last_name
      }
    },{
        headers: {
          'Content-Type': 'application/json',
          'X-User-Token': localStorage.getItem('user_token'),
          'X-User-Email': localStorage.getItem('user_email')
       }
     })
    .then(response => {
      console.log(response.data)
      this.props.history.push("/");
    })
    .catch(error => console.log(error))
  }

  render() {
    if(this.state.currentUser){
      return (
        <div >

          <h3>Edit User</h3>
          <label>
            Email:
            <input type="text" name='email' value={this.state.currentUser.email} onChange={this.handleChange} />
          </label>
          <br/><br/>
          <label>
            Password:
            <input type="password" name='password' value={this.state.currentUser.password} onChange={this.handleChange}/>
          </label>
          <br/><br/>
          <label>
            Contact:
            <input type="text" name='contact' value={this.state.currentUser.contact} onChange={this.handleChange} />
          </label>
          <br/><br/>
          <label>
            First Name:
            <input type="text" name='first_name' value={this.state.currentUser.first_name} onChange={this.handleChange} />
          </label>
          <br/><br/>
          <label>
            Last Name:
            <input type="text" name='last_name' value={this.state.currentUser.last_name} onChange={this.handleChange} />
          </label>
          <br/><br/>
          <button onClick={this.userSubmit}>
            Create
          </button>
          <br/>
          <br/>
          <Link to='/'>Back to users</Link>
        </div>
      );

    }else {
      return (
        <div >

          <h3>Edit User</h3>
          <label>
            Email:
            <input type="text" name='email' value={this.state.value} onChange={this.handleChange} />
          </label>
          <br/><br/>
          <label>
            Password:
            <input type="password" name='password' value={this.state.value} onChange={this.handleChange}/>
          </label>
          <br/><br/>
          <label>
            Contact:
            <input type="text" name='contact' value={this.state.value} onChange={this.handleChange} />
          </label>
          <br/><br/>
          <label>
            First Name:
            <input type="text" name='first_name' value={this.state.value} onChange={this.handleChange} />
          </label>
          <br/><br/>
          <label>
            Last Name:
            <input type="text" name='last_name' value={this.state.value} onChange={this.handleChange} />
          </label>
          <br/><br/>
          <button onClick={this.userSubmit}>
            Create
          </button>
          <br/>
          <br/>
          <Link to='/'>Back to users</Link>
        </div>
      );
    }
  }
}

export default EditUser;

