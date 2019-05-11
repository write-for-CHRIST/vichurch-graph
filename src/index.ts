import { GraphQLServer } from 'graphql-yoga'
import { prisma } from '@vichurch/model'
import resolvers from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
})

server.start(data =>
  console.log(`vichurch-graph is running on http://localhost:${data.port}`),
)
