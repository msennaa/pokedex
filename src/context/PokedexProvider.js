import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PokedexContext from './PokedexContext';
import {
  fetchFifthGenerationPokemons,
  fetchFirstGenerationPokemons,
  fetchFourthGenerationPokemons,
  fetchSecondGenerationPokemons,
  fetchThirdGenerationPokemons,
} from '../services/PokeAPI';

export default function PokedexProvider({ children }) {
  const [firstGeneration, setFirstGeneration] = useState([]);
  const [secondGeneration, setSecondGeneration] = useState([]);
  const [thirdGeneration, setThirdGeneration] = useState([]);
  const [fourthGeneration, setFourthGeneration] = useState([]);
  const [fifthGeneration, setFifthGeneration] = useState([]);
  const [pokemon, setPokemon] = useState({});
  const [favorite, setFavorite] = useState([]);

  const firstRender = async () => {
    setFirstGeneration(await fetchFirstGenerationPokemons());
    setSecondGeneration(await fetchSecondGenerationPokemons());
    setThirdGeneration(await fetchThirdGenerationPokemons());
    setFourthGeneration(await fetchFourthGenerationPokemons());
    setFifthGeneration(await fetchFifthGenerationPokemons());
  };

  const createTeam = (newPoke) => {
    setFavorite([...favorite, newPoke]);
  };

  useEffect(() => {
    firstRender();
  }, []);

  const store = {
    firstGeneration,
    secondGeneration,
    thirdGeneration,
    fourthGeneration,
    fifthGeneration,
    pokemon,
    setPokemon,
    createTeam,
    setFavorite,
    favorite,
  };

  console.log(favorite);

  return (
    <PokedexContext.Provider value={ store }>
      {children}
    </PokedexContext.Provider>
  );
}

PokedexProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
