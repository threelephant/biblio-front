import React from 'react'
import ReactDOM from 'react-dom'
import TextFields from './elements/textfields.js'
import './index.css'

function App() {
  return (
    <TextFields />
  )
}

ReactDOM.render(<App />, document.querySelector('#app'))
