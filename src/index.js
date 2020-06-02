import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router, Route
} from 'react-router-dom'
import Auth from './pages/auth'
import Register from './pages/register'
import Main from './pages/main'
import Cart from './pages/cart'
import Search from './pages/search'
import Book from './pages/book'
import Add from './pages/add'
import './index.css'

function App() {
  return (
    <>
      <Router>
        <Route path="/login" render={() => <Auth />} />
        <Route path="/register" render={() => <Register />} />
        <Route exact path="/" render={() => <Main />} />
        <Route path="/cart" render={() => <Cart />} />
        <Route path="/search" render={() => <Search />} />
        <Route path="/add" render={() => <Add />} />
        <Route path="/book/:id" render={({ match }) => <Book id={match.params.id}/>} />
      </Router>
    </>
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
