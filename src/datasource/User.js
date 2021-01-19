import { RESTDataSource } from 'apollo-datasource-rest';
import config from '../config/configuration.js';

console.log('ser', config.serviceUrl)
export class UserAPI extends RESTDataSource {
    constructor() {
        super();
        this.baseURL = `${config.serviceUrl}/api/user`;
        console.log('ser1', this.baseURL)
    }
       
    getMe() {
        return this.get('/me');
    }

    loginUser(payload) {
        return this.post('/login',payload);
    }
}