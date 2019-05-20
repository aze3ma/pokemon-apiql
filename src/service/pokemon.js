const pokemons = require('../../data/pokemons.json');

function getPokemons(args) {
  const searchedPokemons = pokemons.slice(0, args.first);

  return searchedPokemons || null;
}

function getPokemonById(pokemonId) {
  const pokemon = pokemons.filter(({ id }) => parseInt(id, 10) === parseInt(pokemonId, 10));

  return pokemon[0] || null;
}

function getPokemonByName(pokemonNameSearch) {
  const pokemonName = pokemonNameSearch.toLowerCase().trim();

  const pokemon = pokemons.filter(({ name }) => name.toLowerCase() === pokemonName);

  if (pokemon) {
    return pokemon[0];
  }

  return pokemon[0] || null;
}

function getPokemonByEvolutions(evolutions) {
  if (!evolutions) {
    return null;
  }

  const pokemonNames = evolutions.map(evolution => evolution.name.toLowerCase().trim());

  const searchedPokemons = pokemons.filter(({ name }) => pokemonNames.indexOf(name.toLowerCase()) !== -1);

  return searchedPokemons || null;
}

module.exports = {
  getPokemons,
  getPokemonById,
  getPokemonByName,
  getPokemonByEvolutions,
};
