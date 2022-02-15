export const fetchFirstGenerationPokemons = async () => {
  const array = [];
  const maxPokemons = 151;
  for (let i = 1; i <= maxPokemons; i += 1) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(url).then((result) => result.json());
    array.push(response);
  }

  return array;
};

export const fetchSecondGenerationPokemons = async () => {
  const array = [];
  const maxPokemons = 251;
  const initialPokemon = 152;
  for (let i = initialPokemon; i <= maxPokemons; i += 1) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(url).then((result) => result.json());
    array.push(response);
  }

  return array;
};

export const fetchThirdGenerationPokemons = async () => {
  const array = [];
  const maxPokemons = 386;
  const initialPokemon = 252;

  for (let i = initialPokemon; i <= maxPokemons; i += 1) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(url).then((result) => result.json());
    array.push(response);
  }

  return array;
};

export const fetchFourthGenerationPokemons = async () => {
  const array = [];
  const maxPokemons = 493;
  const initialPokemon = 387;

  for (let i = initialPokemon; i <= maxPokemons; i += 1) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(url).then((result) => result.json());
    array.push(response);
  }

  return array;
};

export const fetchFifthGenerationPokemons = async () => {
  const array = [];
  const maxPokemons = 649;
  const initialPokemon = 494;

  for (let i = initialPokemon; i <= maxPokemons; i += 1) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    // eslint-disable-next-line no-await-in-loop
    const response = await fetch(url).then((result) => result.json());
    array.push(response);
  }

  return array;
};
