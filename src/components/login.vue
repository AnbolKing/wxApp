<template>
  <view class="login-container">
    <view class="login-header">
      <text class="header-top">你好，</text>
      <text class="header-bottom">欢迎登录Demo</text>
    </view>
    <view class="login-btn">
      <AtButton
        class="btn btn-wx"
        type='primary'
        circle='true'
        :loading="loading"
        open-type='getUserInfo'
        :on-get-user-info="handleInfo"
      >
        <view class="btn-content">
          <text>{{text}}</text>
        </view>
      </AtButton>
      <AtButton
        class="btn btn-tel"
        type='primary'
        circle='true'
        :on-click="handleTel"
      >
        <view class="btn-content">
          <text>手机短信验证登录</text>
        </view>
      </AtButton>
    </view>
  </view>
</template>

<script>
import { AtButton } from 'taro-ui-vue';
import Taro from '@tarojs/taro';
export default {
  name: 'LoginPage',
  components: {
    AtButton,
  },
  data() {
    return {
      loading: false,
      open: false,
      text: '微信授权信息登录'
    }
  },
  methods: {
    handleTel: function() {
      Taro.showToast({
        title: '请使用微信登录不用谢',
        duration: 2000,
        icon: 'none',
      })
    },
    handleInfo: function(res) {
      this.loading = true;
      this.text = '授权登录中...'
      // 检查授权状态
      console.log(res);
      Taro.setStorageSync('userInfo', res.detail.userInfo);
      setTimeout(() => {
        Taro.showToast({
          title: '授权成功',
          icon: 'success',
          duration: 2000
        })
        this.loading = false;
        this.text = '微信授权信息登录';
        Taro.switchTab({
          url: '/pages/explore/index'
        })
      }, 2000)
    }
  }
}
</script>

<style lang="less">
.login-container {
  width: 100%;
  .login-header {
    box-sizing: border-box;
    padding: 50rpx 50rpx;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 40rpx;
    font-weight: 500;
    .hedaer-top {
      margin: 40rpx;
    }
  }
  .login-btn {
    width: 90%;
    margin: 0 auto;
    padding: 180rpx 0;
    .btn {
      margin: 20rpx 0;
    }
    .btn-wx {
      background: #6FB289;
      border: 1px #6FB289 solid;
    }
    .btn-tel {
      background: #fff;
      color: #000;
      border: 1px #000 solid;
    }
  }
}
</style>