import { uniRequest } from '@/util/request.js';
import requestBaseUrl from '@/util/requestBaseUrl.js';

function makeAction(
  { baseUrl = '', method = 'GET', mutationType, url, defaultQuery },
  resolve,
  reject
) {
  return ({ commit }, { query } = {}) => {
    const data = { ...defaultQuery, ...query };
    console.log(
      'requestBaseUrl[baseUrl].baseUrl',
      requestBaseUrl[baseUrl],
      requestBaseUrl[baseUrl].baseUrl
    );
    return uniRequest({
      method,
      url: requestBaseUrl[baseUrl].baseUrl + url,
      data,
    })
      .then((res) => {
        resolve && resolve(res);
        mutationType && commit(mutationType, res);
        return Promise.resolve(res);
      })
      .catch((err) => {
        reject && reject(err);
        return Promise.reject(err);
      });
  };
}

export { makeAction };
