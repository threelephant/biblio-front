import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route, Link, Redirect, withRouter
} from 'react-router-dom'
import Auth from './pages/auth.js'
import './index.css'

const HelloWorld = () => (
  <><h2>Hello World!</h2></>
)

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" render={() => <Auth />} />
        <Route path="/main" render={() => <HelloWorld />} />
        <Route path="/cart" render={() => <HelloWorld />} />
        <Route path="/search" render={() => <HelloWorld />} />
        <Route path="/book/:id" render={() => <HelloWorld />} />
      </Router>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
