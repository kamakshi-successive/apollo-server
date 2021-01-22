/* eslint-disable no-console */
/* eslint-disable import/extensions */

import pubsub from '../pubsub.js';
import constant from '../../libs/constant.js';

export default {
  createTrainee: async (parent, args, context) => {
    const { dataSources: { traineeAPI } } = context;
    const {
      payload: {
        id, name, email, password, role
      }
    } = args;
    const response = await traineeAPI.createTra({
      id, name, email, password, role
    });
    console.log('created data : ', response);
    pubsub.publish(constant.subscriptions.TRAINEE_ADDED, { traineeAdded: response.result });
    const createTraineeResponse = JSON.stringify(response);
    return createTraineeResponse;
  },
  updateTrainee: async (parent, args, context) => {
    console.log('args', args);
    const {
      payload: {
        id, name, email, password
      }
    } = args;
    console.log('data', id, name, email, password);
    const { dataSources: { traineeAPI } } = context;
    const response = await traineeAPI.updateTra({
      id, dataToUpdate: { name, email, password }
    });
    console.log('update', response.result);
    const updateTraineeResponse = JSON.stringify(response);
    return updateTraineeResponse;
  },
  deleteTrainee: async (parent, args, context) => {
    const { dataSources: { traineeAPI } } = context;
    const { payload: { originalId } } = args;
    const response = await traineeAPI.deleteTra(originalId);
    console.log('trainee deleted : ', response);
    pubsub.publish(constant.subscriptions.TRAINEE_DELETED, { traineeDeleted: response.message });
    const deleteTraineeResponse = JSON.stringify(response);
    return deleteTraineeResponse;
  }
};
