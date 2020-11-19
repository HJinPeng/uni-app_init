const loginInfo = uni.getStorageSync('loginInfo') || {};
const { token } = loginInfo;

export const uniRequest = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      header: {
        'X-Access-Token': token,
      },
      url: options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: (res) => {
        // 如果没登录

        // 如果响应失败

        resolve(res);
      },
      fail: (err) => {
        reject(err);
      },
    });
  });
};
