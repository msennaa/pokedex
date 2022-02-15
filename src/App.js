import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PokedexProvider from './context/PokedexProvider';
import Johto from './pages/Johto';
import Kanto from './pages/Kanto';
import Hoenn from './pages/Hoenn';
import Sinnoh from './pages/Sinnoh';
import Unova from './pages/Unova';
import MainPage from './pages/MainPage';

export default function App() {
  return (
    <PokedexProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ MainPage } />
          <Route path="/kanto" exact component={ Kanto } />
          <Route path="/johto" exact component={ Johto } />
          <Route path="/hoenn" exact component={ Hoenn } />
          <Route path="/sinnoh" exact component={ Sinnoh } />
          <Route path="/unova" exact component={ Unova } />
        </Switch>
      </BrowserRouter>
    </PokedexProvider>
  );
}
