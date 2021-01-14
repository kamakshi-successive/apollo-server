import Express from 'express'
import { ApolloServer } from 'apollo-server-express'
import Database from './libs/Database.js';

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
    const { port, nodeEnv, mongoUrl } = this.config;
    Database.open(mongoUrl)
    .then((res) => {
      this.app.listen(port, (err) => {
        if (err) {
          console.log(err);
        }
        console.info(`Server started on port ${port} (${nodeEnv})`);
      }); 
    })
    .catch(err => console.log(err));
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
    this.run();
  }
}

