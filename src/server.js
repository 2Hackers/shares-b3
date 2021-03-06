require('dotenv').config()
const { GraphQLServer } = require('graphql-yoga')
const gqlServerConfig = require('./api')
require('./db')()

const serverOptions = {
  port: 5000,
  endpoint: '/graphql',
  playground: '/docs',
  debug: true
}

const server = new GraphQLServer(gqlServerConfig)
server.start(serverOptions, ({port}) => console.log(`Server on port ${port}`))
