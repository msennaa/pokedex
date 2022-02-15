import React from 'react';
import '../css/MainPage.css';
import { useHistory } from 'react-router-dom';
import ash from '../images/ash.png';
import girl from '../images/girl.png';
import title from '../images/title.png';

export default function MainPage() {
  const history = useHistory();
  console.log('oi');

  return (
    <div className="MainPage">
      <img className="title-image" src={ title } alt="title" />
      <div className="main-button-container">
        <button type="button" onClick={ () => history.push('/kanto') }>
          Kanto
        </button>
        <button type="button" onClick={ () => history.push('/johto') }>
          Johto
        </button>
        <button type="button" onClick={ () => history.push('/hoenn') }>
          Hoenn
        </button>
        <button type="button" onClick={ () => history.push('/sinnoh') }>
          Sinnoh
        </button>
        <button type="button" onClick={ () => history.push('/unova') }>
          Unova
        </button>
        <button type="button" onClick={ () => history.push('/favorites') }>
          Favorites
        </button>
      </div>
      <div className="main-image-container">
        <img className="ash" src={ ash } alt="ash" />
        <img className="girl" src={ girl } alt="girl" />
      </div>
    </div>
  );
}
