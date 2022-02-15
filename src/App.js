import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokedexProvider from './context/PokedexProvider';
import Kanto from './pages/Kanto';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <PokedexProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ MainPage } />
          <Route path="/kanto" exact component={ Kanto } />
        </Switch>
      </BrowserRouter>
    </PokedexProvider>
  );
}
