import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import './components/App.css';

function HelloApp() {
  return (
    <div className="App">
      <h1>This is like the greatest app that can be built</h1>
    </div>
  );
}

export default HelloApp;

ReactDOM.render(
  <React.StrictMode>
    <HelloApp />
  </React.StrictMode>,
  document.getElementById('root')
);
