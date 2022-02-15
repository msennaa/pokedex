import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Cell from '../components/Cell';
import PokedexContext from '../context/PokedexContext';

export default function Hoenn() {
  const history = useHistory();
  const [input, setInput] = useState('');
  const { thirdGeneration, setPokemon } = useContext(PokedexContext);

  const handleChange = () => {
    const result = thirdGeneration.filter((poke) => poke.name.includes(input));
    return result;
  };

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

  const result = handleChange();
  return (
    <div className="region-page">
      <h1>Hoenn Pokemons</h1>
      <nav>
        <button type="button" onClick={ () => history.push('/') }>
          main page
        </button>
        <button type="button" onClick={ () => history.push('/kanto') }>
          Kanto
        </button>
        <button type="button" onClick={ () => history.push('/johto') }>
          Johto
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
            result.map((poke, id) => (
              <button
                type="button"
                className="Card"
                key={ id }
                onClick={ () => handleClick(poke) }
              >
                <Cell
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
