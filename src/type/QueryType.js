const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList, GraphQLNonNull, fromGlobalId } = require('graphql');

const PokemonType = require('./PokemonType');

const { getPokemons, getPokemonById, getPokemonByName } = require('../service/Pokemon');

const QueryType = new GraphQLObjectType({
  name: 'Query',
  description: 'Query any Pokémon by number or name',
  fields: () => ({
    query: {
      type: QueryType,
      resolve: (...args) => args,
    },
    pokemons: {
      type: new GraphQLList(PokemonType),
      args: {
        first: {
          type: new GraphQLNonNull(GraphQLInt),
        },
      },
      resolve: (obj, args) => getPokemons(args),
    },
    pokemon: {
      type: PokemonType,
      args: {
        id: {
          type: GraphQLString,
        },
        name: {
          type: GraphQLString,
        },
      },
      resolve: (obj, { id, name }) => {
        if (id) {
          return getPokemonById(fromGlobalId(id).id);
        }

        if (name) {
          return getPokemonByName(name);
        }

        throw new Error('You need to specify either the ID or name of the Pokémon');
      },
    },
  }),
});

module.exports = QueryType;
