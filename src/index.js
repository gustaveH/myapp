// Import the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//react components
const App = function () {
  return <h5>Netlify is cool</h5>;
};
//take the react component and show it to screen

ReactDOM.render(<App />, document.querySelector('#root'));
