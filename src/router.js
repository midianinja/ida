import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

const Router = () => (
  <main>
    <Switch>
        <Route exact path="/" component={ Profile } />
        <Route path="/cadastro" component={ Register } />
        <Route path="/login" component={ Login } />
    </Switch>
  </main>
)

export default Router