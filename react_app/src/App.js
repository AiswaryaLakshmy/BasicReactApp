import React, { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3001/api/v1/users.json')
      .then((response)=>{
        const {data} = response.data;
        debugger
        console.log(data)
        this.setState({
          users: data
        })
      }).catch((error)=> console.log(error));
  }

  render() {
    const {users} = this.state;
    return (
      <div className="App">
        <h1>Users1</h1>
        {this.state.users.map((user) => {
          return(
          <div className='name' key={user.id} >
            <h4>{user.first_name}</h4>
          </div>
          )
        })}
      </div>
    );
  }
}

export default App;
