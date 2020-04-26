import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/App.css';

function HelloApp() {
  return (
    <div className="App">
      <h1>This is like the greatest app world has ever seen</h1>
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
