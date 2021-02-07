import './App.css'
import react from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import User from './components/pages/User'
import About from './components/pages/About'
import Home from './components/pages/Home'
import Alert from './components/layout/Alert'
import NotFound from './components/pages/NotFound'

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className='App'>
            <Navbar />
            <div className='container' style={{marginTop: '100px'}}>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App
