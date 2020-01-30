module.exports = {
  resolvers: require('./historical.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('historical/historical.graphql'),
  model : require('./historical.model')
}
