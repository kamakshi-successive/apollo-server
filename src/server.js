import Express from 'express'
import bodyParser from 'body-parser'
import { ApolloServer } from 'apollo-server-express'
import createServer from 'connect';

export default class Server {
  constructor(config)
  {
    this.config = config;
    this.app = new Express();
    this.run = this.run.bind(this);
  }
  get application() {
    return this.app;
  }
  bootstrap() {
    this._initJsonParser();
    return this;
  }
  run(){
    const { port, env } = this.config;
    this.httpServer.listen(port, () => {
      console.info(`Server started on port ${port} (${env})`);
    });
    return this;
  }
  async setupApollo(schema) {
    const { app } = this;
    this.server = new ApolloServer({
      ...schema,
      onHealthCheck: () => new Promise((resolve) => {
        resolve('I am Okay...');
      }),
    });
    this.server.applyMiddleware({ app });
    this.httpServer = createServer(app);
    this.run();
  }
}















































// import express from 'express';
// import { ApolloServer, gql } from 'apollo-server-express';

// // Construct a schema, using GraphQL schema language
// const typeDefs = gql`
//   type Query {
//     getMyProfile: User!
//   }
//   type User {
//     id: ID!
//     name: String!
//     email: String!
// }
  
// `;

// // Provide resolver functions for your schema fields
// const resolvers = {
//   Query: {
//     getMyProfile: () => {
//         return {
//             id: 1,
//             name: 'Kamakshi',
//             email: 'kamakshi.kumari@successive.tech'
//         }
//     }
//   },
// };

// const server = new ApolloServer({ typeDefs, resolvers });

// const app = express();
// server.applyMiddleware({ app });

// app.listen({ port: 4000 }, () =>
//   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
// );