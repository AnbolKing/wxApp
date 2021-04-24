<template>
  <view>
    <login-page v-if="!loginStatus"></login-page>
    <my-detail v-if="loginStatus" :isFixedTop="isFixedTop"></my-detail>
  </view>
</template>

<script>
import Taro from '@tarojs/taro';
import LoginPage from '../../components/login';
import MyDetail from '../../components/myDetail';
export default {
  components: {
    LoginPage,
    MyDetail,
  },
  data() {
    return {
      loginStatus: false,
      isFixedTop: false,
    }
  },
  methods: {
    handleJudge() {
      Taro.getStorage({
        key: 'userInfo',
        success: (res) => {
          if(res) {
            this.loginStatus = true;
          }
        },
        fail: (err) => {
          console.log(err);
          this.loginStatus = false;
        }
      })
    },
  },
  onShow() {
    this.handleJudge();
  },
  onPageScroll(event) {
    let scrollTop = parseInt(event.scrollTop);
    let isSatisfy = scrollTop >= 132 ? true : false;
    if(this.isFixedTop === isSatisfy) {
      return false;
    }
    this.isFixedTop = isSatisfy;
  },
}
</script>