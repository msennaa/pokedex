import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PokedexContext from '../context/PokedexContext';
import '../css/Favorites.css';
import trash from '../images/trash.png';

export default function Favorites() {
  const { favorite, setFavorite } = useContext(PokedexContext);
  const history = useHistory();

  const removePoke = (id) => {
    const result = favorite.filter((poke) => poke.id !== id);
    setFavorite(result);
  };

  return (
    <div className="Favorite">
      <h1>Your PokeTeam</h1>
      <div className="favorite-container">
        {
          favorite.map((poke, index) => (
            <div key={ index } className="favorite-card">
              <h3>{poke.name}</h3>
              <img src={ poke.imagem } alt={ poke.name } />
              <button
                className="remove-button"
                type="button"
                onClick={ () => removePoke(poke.id) }
              >
                <img src={ trash } alt="delete" />
              </button>
            </div>
          ))
        }
      </div>
      <button
        type="button"
        className="back"
        onClick={ () => history.goBack() }
      >
        BACK
      </button>
    </div>
  );
}
