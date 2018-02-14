import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, DefaultRoute } from "react-router-dom";

import Main from './Main'
import Routes from './Routes'

class App extends Component {
  componentWillMount (){
    this.setState({login: localStorage.getItem('login')})
  }

  render(){
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;

