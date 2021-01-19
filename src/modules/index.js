/* eslint-disable no-console */
/* eslint-disable import/extensions */
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';
import path from 'path';
import * as user from './user/index.js';
import * as trainee from './trainee/index.js';

const dirname = path.resolve();
const typeArray = fileLoader(path.join(dirname, './**/*.graphql'));
const typeDefs = mergeTypes(typeArray, { all: true });

export default {
  resolvers: {
    Query: {
      ...user.getMyProfile,
      ...trainee.traineeQuery
    },
    Mutation: {
      ...trainee.traineeMutation
    },
    Subscription: {
      ...trainee.traineeSubscription
    }
  },
  typeDefs
};
