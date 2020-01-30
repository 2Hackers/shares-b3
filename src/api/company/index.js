module.exports = {
    resolvers: require('./company.resolvers'),
    typeDefs: require('../../utils/gqlLoader')('company/company.graphql'),
    model : require('./company.model')
  }
  