/* eslint-disable no-console */
export default {
  getMyProfile: async (parent, args, context) => {
    console.log('args', args);
    const { dataSources: { userAPI } } = context;
    const response = await userAPI.getMe();
    // eslint-disable-next-line no-console
    console.log('respose getmyprofile', response);
    return response.data;
  }
};
