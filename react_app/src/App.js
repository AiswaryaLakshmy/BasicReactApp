import React, { Component } from 'react';
import './App.css';
import UsersContainer from './components/UsersContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='AppHeader'>
          <h1> User Board </h1>
        </div>
        <UsersContainer />
      </div>
    );
  }
}

export default App;
