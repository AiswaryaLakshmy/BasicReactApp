import React from "react";
import axios from 'axios'
import { Link } from 'react-router-dom'

class CreatedUsers extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  state = {
    usersList: []
  };

  handleLogout(event) {
    axios.delete('http://localhost:3001/api/v1/users/sign_out.json',{
      headers: {
        'Content-Type': 'application/json',
        'X-User-Token': localStorage.getItem('user_token'),
        'X-User-Email': localStorage.getItem('user_email')
     }
    })
    .then(response => {
      console.log(response.data.user)

      localStorage.removeItem('user_token')
      localStorage.removeItem('user_email')
      this.props.history.push('/login');
    })
    .catch(error => console.log(error))
  };

  deleteUser(userId) {
    axios.delete('http://localhost:3001/api/v1/users/'+userId+'.json',{
      headers: {
        'Content-Type': 'application/json',
        'X-User-Token': localStorage.getItem('user_token'),
        'X-User-Email': localStorage.getItem('user_email')
     }
    })
    .then(response => {
      console.log(response.data.user)
      this.setState({usersList: response.data.users})
    })
    .catch(error => console.log(error))
  };

  componentDidMount() {
    if (localStorage.getItem('user_token')){
      axios.get('http://localhost:3001/api/v1/users.json',{
        headers: {
          'Content-Type': 'application/json',
          'X-User-Token': localStorage.getItem('user_token'),
          'X-User-Email': localStorage.getItem('user_email')
       }
      })
      .then(response => {
        console.log(response.data.user)
        this.setState({usersList: response.data.user})
      })
      .catch(error => console.log(error))
    }
    else{
      this.props.history.push("/login");
    }
  };

  render() {

    const { usersList } = this.state;
    const userRows = usersList.map((user, idx) => (
      <tr key={idx} >
        <td>{user.first_name}</td>
        <td className="right aligned">{user.last_name}</td>
        <td className="right aligned">{user.role}</td>
        <td className="right aligned">{user.contact}</td>
        <td className="right aligned">{user.email}</td>
        <td className="right aligned"><button onClick={this.deleteUser.bind(this, user.id)}>
            Delete
          </button></td>
        <td className="right aligned">
        <Link to={`/edit_user/${user.id}`}>Edit</Link>
        </td>
      </tr>
    ));

    return (
      <div>
        <table className="ui selectable structured large table">
          <thead>
            <tr>
              <th colSpan="5">
                <h3>Users</h3>
              </th>
            </tr>
            <tr>
              <th className="eight wide">First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Contact</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {userRows}
          </tbody>
        </table>
        <br/>
        <br/>
        <div>
          <button onClick={this.handleLogout}>
            Logout
          </button>
        </div>
      </div>
    );
  }
}

export default CreatedUsers;
