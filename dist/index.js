import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import './components/App.css';

function HelloApp() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("h1", null, "This is like the greatest app that can be built"));
}

export default HelloApp;
ReactDOM.render( /*#__PURE__*/React.createElement(React.StrictMode, null, /*#__PURE__*/React.createElement(HelloApp, null)), document.getElementById('root'));