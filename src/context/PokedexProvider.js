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

  const firstRender = async () => {
    setFirstGeneration(await fetchFirstGenerationPokemons());
    setSecondGeneration(await fetchSecondGenerationPokemons());
    setThirdGeneration(await fetchThirdGenerationPokemons());
    setFourthGeneration(await fetchFourthGenerationPokemons());
    setFifthGeneration(await fetchFifthGenerationPokemons());
  };

  useEffect(() => {
    firstRender();
  }, []);

  console.log(fifthGeneration);

  const store = {
    firstGeneration,
    secondGeneration,
    thirdGeneration,
    fourthGeneration,
    fifthGeneration,
  };

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
