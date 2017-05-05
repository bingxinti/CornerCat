import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router ,Route, Link } from 'react-router-dom'
import routes from 'routes'
import './assets/less/theme.less'
import './App.css'
import createHistory from 'history/createBrowserHistory'
import NavBar from 'components/NavBar/NavBar'

import * as Views from './routes'

const history = createHistory()

export default class App extends Component {
  render () {
    return (
      <Router history={history}>
        <div className='App'>
          <NavBar/>
          <Route path="/"  exact component={Views.HomeView.default}/>
          <Route path="/home" component={Views.HomeView.default}/>
          <Route path="/portfolio" component={Views.PortfolioView.default}/>
          <Route path="/traveler" component={Views.TravelerView.default}/>
          <Route path="/essay" component={Views.EssayView.default}/>
          <Route path="/design" component={Views.DesignView.default}/>
          <Route path="/gift" component={Views.GiftView.default}/>
          <Route path="/about" component={Views.AboutView.default}/>
        </div>
    </Router>
    )
  }
}
