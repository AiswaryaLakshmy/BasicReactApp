import React from 'react';
import axios from 'axios'
import PropTypes from "prop-types";

class Logout extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  constructor(props, context) {
    super(props, context);
  }

  componentDidMount () {
    axios.delete(
      'http://localhost:3001/api/v1/users/sign_out.json')
    .then(response => {
      console.log(response)
      localStorage.removeItem('token');
      localStorage.removeItem('user_role');
      localStorage.setItem('login', false);
      this.context.router.history.push("/login");
    })
  }

  render(){
    return null
  }
}

export default Logout
