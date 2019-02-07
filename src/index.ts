import { GraphQLServer } from 'graphql-yoga'
import { prisma } from '@write-for-christ/vichurch-model'
import resolvers from './resolvers'

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: request => ({
    ...request,
    prisma,
  }),
})
server.start(() => console.log(`vichurch-graph is running on port 4000`))
