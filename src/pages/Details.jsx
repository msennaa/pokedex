import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PokedexContext from '../context/PokedexContext';
import '../css/Details.css';

export default function Details() {
  const { pokemon, createTeam, favorite } = useContext(PokedexContext);
  const [dis, setDisabled] = useState(false);
  const history = useHistory();
  const arrayTypes = pokemon.types;
  const stats = pokemon.stats.map((poke) => `${poke.stat.name}: ${poke.base_stat}`);

  const submitPoke = (e) => {
    e.preventDefault();

    const poke = {
      name: pokemon.name,
      imagem: pokemon.image,
      id: pokemon.id,
    };
    createTeam(poke);
    history.push('/');
  };

  const validation = () => {
    const maxPokemons = 6;
    const result = favorite.some((poke) => poke.id === pokemon.id);
    if (result === true || favorite.length === maxPokemons) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  useEffect(() => {
    validation();
  }, []);

  return (
    <div className="Details">
      <h1>{ pokemon.name }</h1>
      <div className="main-content">
        <img className="main-content-image" src={ pokemon.image } alt={ pokemon.name } />
        <section>
          <div className="type">
            {
              arrayTypes.map((element, index) => (
                <h3 key={ index } className={ element.type.name }>{element.type.name}</h3>
              ))
            }
          </div>
          <h3>{`ID: ${pokemon.id}`}</h3>
          <div>
            {
              stats.map((poke, index) => (
                <h3 key={ index }>{poke}</h3>
              ))
            }
          </div>
          <h3>{`Base Experience: ${pokemon.experience}`}</h3>
        </section>
        <div className="shiny-card">
          <h3>{`Shiny ${pokemon.name}`}</h3>
          <img className="shiny" src={ pokemon.shiny } alt={ `shiny ${pokemon.name}` } />
        </div>
      </div>
      {
        dis === true ? (
          <div className="error-message">
            <h3>Pokemon Disabled</h3>
            <p>1- Check if you have already added this pokemon</p>
            <p>2- Check if you reached the max number of pokemons </p>
            <button
              type="button"
              className="back"
              onClick={ () => history.goBack() }
            >
              BACK
            </button>
          </div>
        ) : (
          <div className="button-container">
            <button
              type="button"
              className="back"
              onClick={ () => history.goBack() }
            >
              BACK
            </button>
            <button
              type="button"
              className="favorite"
              disabled={ dis }
              onClick={ submitPoke }
            >
              FAVORITE
            </button>
          </div>
        )
      }
    </div>
  );
}
