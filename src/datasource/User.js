/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */

import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configuration.js';

console.log('ser', config.serviceUrl);

export default class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = `${config.serviceUrl}/api/user`;
  }

  getMe() {
    return this.get('/me');
  }

  loginUser(payload) {
    return this.post('/login', payload);
  }
}
