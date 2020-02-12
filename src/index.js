import React from 'react';
import ReactDOM from 'react-dom';
import TextFields from './elements/textfields.js';

function App() {
  return (
    <TextFields />
  );
}

ReactDOM.render(<App />, document.querySelector('#app'));
