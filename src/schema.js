const { GraphQLSchema } = require('graphql');

const QueryType = require('./type/QueryType');

const schema = new GraphQLSchema({
  query: QueryType,
});

module.exports = schema;
