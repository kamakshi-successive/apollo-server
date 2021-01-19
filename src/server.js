import Express from 'express'
import http, { createServer } from 'http';
import { ApolloServer } from 'apollo-server-express'
import { UserAPI } from './datasource/User.js';

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
    return this;
  }
  run(){
    const { port, nodeEnv } = this.config;
      this.httpServer.listen(port, () => {
        console.info(`Server started on port ${port} (${nodeEnv})`);
      }); 
    return this;
  }
      
  async setupApollo(schema) {
    const { app } = this;
    this.server = new ApolloServer({
      ...schema,
      datasource: () => {
        return {
          userAPI: new UserAPI()
        }
      },
      onHealthCheck: () => new Promise((resolve) => {
        resolve('I am Okay...');
      }),
    });
    this.server.applyMiddleware({ app });
    this.httpServer = createServer(app);
    this.server.installSubscriptionHandlers(this.httpServer);
    this.run();
  }
}

