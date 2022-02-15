import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={ MainPage } />
      </Switch>
    </BrowserRouter>
  );
}
