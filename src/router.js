import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Profile from './pages/Profile/Profile';
import Register from './pages/Register/Register';

const Router = () => (
  <main>
    <Switch>
        <Route exact path="/" component={ Profile } />
        <Route path="/register" component={ Register } />
    </Switch>
  </main>
)

export default Router