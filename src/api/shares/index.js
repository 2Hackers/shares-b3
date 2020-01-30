module.exports = {
  resolvers: require('./shares.resolvers'),
  typeDefs: require('../../utils/gqlLoader')('shares/shares.graphql'),
  model : require('./shares.model')
}
