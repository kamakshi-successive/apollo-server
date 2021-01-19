/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/extensions */

import schema from './modules/index.js';
import Server from './server.js';
import configuration from './config/configuration.js';

const server = new Server(configuration);

server.bootstrap().setupApollo(schema);
