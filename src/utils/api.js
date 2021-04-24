import Taro from '@tarojs/taro'
export const ajax = (params) => {
  return new Promise((resolve, reject) => {
    Taro.request({
      ...params,
      success: function(res) {
        resolve(res.data);
      },
      fail: function(err) {
        reject(err)
      },
    })
  })
}

export const login = () => {
  Taro.login({
    timeout: () => {
      this.loading = false;
      Taro.showToast({
        title: '授权超时，请重试',
        duration: 2000,
        icon: 'none',
      })
    },
    fail: () => {
      this.loading = false;
      Taro.showToast({
        title: '授权失败，请重试',
        duration: 2000,
        icon: 'none',
      })
    },
    success: async (resLogin) => {
      if(resLogin.code) {
        console.log(resLogin.code);
        let result = await this.ajax({
          url: 'https://api.weixin.qq.com/sns/jscode2session',
          method: 'GET',
          data: {
            appid: 'wx823c68fdabb37daf',
            secret: '8028685f348e2278386935e279739c9e',
            js_code: resLogin.code,
            grant_type: 'authorization_code',
          }
        })
        console.log(result);
        Taro.setStorageSync('openId', result.openid);
        Taro.setStorageSync('sessionKey', result.session_key);
      }
    }
  })
}