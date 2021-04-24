import Taro from '@tarojs/taro'
export default () => {
  return new Promise((resolve, reject) => {
    Taro.getSystemInfo({
      success: function(res) {
        resolve(res);
      },
      fail: function(err) {
        reject(err);
      }
    })
  })
}