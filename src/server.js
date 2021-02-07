/* eslint-disable import/extensions */
import Express from 'express';
import { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express';
import UserAPI from './datasource/User.js';
import TraineeAPI from './datasource/Trainee.js';

export default class Server {
  constructor(config) {
    this.config = config;
    this.app = new Express();
    this.run = this.run.bind(this);
  }

  get application() {
    return this.app;
  }

  bootstrap() {
    return this;
  }

  run() {
    const { port, nodeEnv } = this.config;
    this.httpServer.listen(port, () => {
      // eslint-disable-next-line no-console
      console.info(`Server started on port ${port} (${nodeEnv})`);
    });
    return this;
  }

  async setupApollo(schema) {
    const { app } = this;
    this.server = new ApolloServer({
      ...schema,
      dataSources: () => {
        const userAPI = new UserAPI();
        const traineeAPI = new TraineeAPI();
        return { userAPI, traineeAPI };
      },
      context: ({ req }) => {
        if (req) {
          return { token: req.headers.authorization };
        }
        return {};
      },
      onHealthCheck: () => new Promise((resolve) => {
        resolve('I am Okay...');
      })
    });
    this.server.applyMiddleware({ app });
    this.httpServer = createServer(app);
    this.server.installSubscriptionHandlers(this.httpServer);
    this.run();
  }
}
