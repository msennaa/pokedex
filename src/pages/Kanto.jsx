import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cell from '../components/Cell';
import PokedexContext from '../context/PokedexContext';
import '../css/RegionPage.css';
import '../css/Card.css';

export default function Kanto() {
  const { firstGeneration, setPokemon } = useContext(PokedexContext);
  const [input, setInput] = useState('');
  const history = useHistory();

  const handleChange = () => {
    const result = firstGeneration.filter((poke) => poke.name.includes(input));
    return result;
  };

  const result = handleChange();

  const handleClick = (pokemon) => {
    const newObj = {
      name: pokemon.name,
      image: pokemon.sprites.other.dream_world.front_default,
      id: pokemon.id,
      types: pokemon.types,
      stats: pokemon.stats,
      pokemon: pokemon.weight,
      experience: pokemon.base_experience,
      shiny: pokemon.sprites.front_shiny,
    };
    setPokemon(newObj);
    history.push(`pokemon/${pokemon.name}`);
  };

  return (
    <div className="region-page">
      <h1>Kanto Pokemons</h1>
      <nav>
        <button type="button" onClick={ () => history.push('/') }>
          main page
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
      </nav>
      <input
        type="text"
        name="input"
        placeholder="Pokemon"
        value={ input }
        onChange={ ({ target: { value } }) => setInput(value.toLocaleLowerCase()) }
      />
      <div className="card-container">
        {
          result.length === 0 ? (
            <h4>Pokemon não encontrado</h4>
          ) : (
            result.map((poke) => (
              <button
                type="button"
                className="Card"
                key={ poke.id }
                onClick={ () => handleClick(poke) }
              >
                <Cell
                  id={ poke.id }
                  name={ poke.name }
                  image={ poke.sprites.other.dream_world.front_default }
                  type={ poke.types }
                />
              </button>
            ))
          )
        }
      </div>
    </div>
  );
}
