import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Details from './components/Details';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/details">
          <Details />
        </Route>
        <Route exact path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>
);
