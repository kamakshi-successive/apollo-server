/* eslint-disable no-console */
export default {
  getMyProfile: async (parent, args, context) => {
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.getMe();
    console.log('response', response);
    return response.data;
  }
};
