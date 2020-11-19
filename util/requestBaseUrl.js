const baseUrl = '/spda-zuul-server';

const requestBaseUrl = {
  businessRequest: {
    baseUrl: baseUrl + '/spda-business',
  },
  announceRequest: {
    baseUrl: baseUrl + '/spda-mes-center',
  },
  devplatformRequest: {
    baseUrl: baseUrl + '/devplatform',
  },
};

export default requestBaseUrl;
