/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */

import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configuration.js';

export default class TraineeAPI extends RESTDataSource {
  constructor() {
    super();
    this.initialize(config);
    this.baseURL = `${config.serviceUrl}/api/user`;
  }

  willSendRequest(request) {
    request.headers.set('Authorization', this.context.token);
  }

  async getTrainees(data) {
    console.log('this get', this.get());
    const res = await this.get('/', data);
    console.log('Datasource', res);
    return res;
  }

  createTra(data) {
    return this.post('/create', data);
  }

  updateTra(id, dataToUpdate) {
    return this.put('/update', id, dataToUpdate);
  }

  deleteTra(originalId) {
    return this.delete(`/${originalId}`);
  }
}
