import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';
import Header from './Header';

class App extends Component {
  render() {
    const user = localStorage.getItem('user_token');
    const role = localStorage.getItem('user_role');

    if (user && (role === 'admin')) {
      return (
        <div>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">React</h1>
            </header>
          </div>
          <Header />
          <Main />
        </div>
      );
    }

    return (
      <div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">React</h1>
          </header>
        </div>
        <Main />

      </div>
    );
  }

}

export default App;
