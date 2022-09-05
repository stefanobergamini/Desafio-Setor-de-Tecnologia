import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import store from './Reducers/Store'
import { Provider } from 'react-redux'
import App from './Pages/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
