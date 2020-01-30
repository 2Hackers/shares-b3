const merge = require('lodash/merge')
const company = require('../api/company')
const historical = require('../api/historical')
const shares = require('../api/shares')
const loaders = require('./loaders')

module.exports = {
  typeDefs: [
    company.typeDefs,
    historical.typeDefs,
    shares.typeDefs
  ].join(' '),
  resolvers: merge({}, company.resolvers, historical.resolvers, shares.resolvers),
  context: {
    models: {
      company: company.model,
      historical: historical.model,
      shares: shares.model
    },
    loaders: loaders()
  }
}
