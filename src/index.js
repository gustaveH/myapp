// Import the react and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

//react components
const App = function () {
  return <div>Hi there!</div>;
};
//take the react component and show it to screen

ReactDOM.render(<App />, document.querySelector('#root'));
