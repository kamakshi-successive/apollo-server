/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */

import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configuration.js';

export default class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.initialize(config);
    this.baseURL = `${config.serviceUrl}/api/user`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }
  
  getMe() {
    return this.get('/me');
  }

  loginUser(payload) {
    console.log('pa', payload);
    console.log('dsffd', this.post('/login', payload));
    return this.post('/login', payload);
  }
}
