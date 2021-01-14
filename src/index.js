import schema from './modules/index.js';
import Server from './server.js';
import configuration from "./config/configuration.js";

const server = new Server(configuration);

server.bootstrap().setupApollo(schema);