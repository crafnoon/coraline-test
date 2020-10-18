import React from 'react'
import './App.css'
import { Route, Redirect } from 'react-router-dom'
import Profile from './container/Profile'
import Login from './container/Login'

const  App = () => {
  return (
    <div className="App container" style={{height: '100%'}}>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route path="/profile" component={Profile} />
      <Route path="/login" component={Login} />
    </div>
  )
}

export default App
