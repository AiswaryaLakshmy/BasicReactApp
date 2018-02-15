import React from "react";
import { Switch, Route } from 'react-router-dom'
import CreatedUsers from "./CreatedUsers";
import Login from "./Login";
import NewUser from "./NewUser";
import EditUser from "./EditUser";

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/new_user' component={NewUser}/>
      <Route exact path='/' component={CreatedUsers}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/edit_user/:id' component={EditUser}/>
    </Switch>
  </main>
)

export default Main;
