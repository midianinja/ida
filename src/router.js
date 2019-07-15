import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import Landing from './pages/Landing/Landing';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';

const Router = () => (
  <main>
    <Switch>
        <Route exact path="/" component={ Landing } />
        <Route exact path="/profile" component={ Profile } />
        <Route path="/cadastro" component={ Register } />
        <Route path="/login" component={ Login } />
    </Switch>
  </main>
)

export default Router