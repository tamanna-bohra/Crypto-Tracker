import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import 'antd/dist/reset.css';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,document.getElementById('root')
);


