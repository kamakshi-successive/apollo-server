/* eslint-disable no-console */
export default {
  loginUser: async (parent, args, context) => {
    const { payload: { email, password } } = args;
    console.log('ar', args);
    const { dataSources: { userAPI } } = context;
    console.log('context', context);
    console.log('userAPI', userAPI);
    const response = await userAPI.loginUser({ email, password });
    console.log('res', response);
    return response.token;
  }
};
