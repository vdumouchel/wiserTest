
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import App from './App'

const Routes = () => {
    return(
        <Router>
            <div>
                <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/app'>
                    <App />
                </Route>
                <Route exact path='/home'>
                    <Home />
                </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default Routes