const { GraphQLObjectType, GraphQLInt, GraphQLString } = require('graphql');

const EvolutionRequirementType = new GraphQLObjectType({
  name: 'PokemonEvolutionRequirement',
  description: "Represents a Pokémon's requirement to evolve",
  fields: {
    amount: {
      type: GraphQLInt,
      description: 'The amount of candy to evolve',
      resolve: obj => obj.amount,
    },
    name: {
      type: GraphQLString,
      description: 'The name of the candy to evolve',
      resolve: obj => obj.name,
    },
  },
});

module.exports = EvolutionRequirementType;
