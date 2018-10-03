import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import ReactDOM from 'react-dom'


// components

import NewsHome from './components//newsHome'
import NewsSources from './components/source'


const AppRouter = () => {
  return(
    <Router>
      <Switch>
        <Route
          exact
          path= "/"
          component= {NewsHome}
        />
        <Route
          exact
          path= "/sourcdes"
          component= {NewsSources}
        />
      </Switch>
    </Router>
  )

}

export default AppRouter
