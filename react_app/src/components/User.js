import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, DefaultRoute } from "react-router-dom";

class User extends Component {
  render() {
    return (
      ( localStorage.getItem('user_role') == 'admin')) ? (
        <div className='name' key={this.props.user.id} >
          <h4>{this.props.user.email}</h4>
              <Link to={`/edit_user/${this.props.user.id}`}>Edit</Link>
        </div>
      ) : (
      <div className='name' key={this.props.user.id} >
        <h4>{this.props.user.email}</h4>
      </div>
    )
  }
}

export default User
