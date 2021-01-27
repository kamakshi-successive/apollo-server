/* eslint-disable no-console */
/* eslint-disable import/extensions */
import user from '../../service/user.js';

export default {
  getTrainee: (parent, args) => {
    const { id } = args;
    console.log('get Trainee id', id);
    console.log('getTrainee', user.getUser(id));
    return user.getUser(id);
  },
  getAllTrainees: async (parent, args, context) => {
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.getTrainees();
    console.log('resp', response.data);
    return response.data;
  }
};
