<template>
  <view class="my-container">
    <view class="my-header">
      <view class="header-desc">
        <text class="desc-user">{{nickName}}</text>
        <text class="desc-info">213天，15个原创，36条续写，79次评论...</text>
      </view>
      <view class="header-avator" @tap="this.handleChangeAvator">
        <image :src="avatar"/>
      </view>
    </view>
    <view class="my-tab">
      <AtTabs
        :class='["tab-nav",isFixedTop ? "tab-fixed" : ""]'
        :swipeable="true"
        :current="current1"
        :tabList="tabList1"
        :onClick="handleClick"
      >
        <AtTabsPane :current="current1" :index="0">
          <card-list :data="this.myCreate" type='create'></card-list>
        </AtTabsPane>
        <AtTabsPane :current="current1" :index="1">
          <card-list :data="this.myLove" type='love'></card-list>
        </AtTabsPane>
        <AtTabsPane :current="current1" :index="2">
          <card-list :data="this.myLove" type='focus'></card-list>
        </AtTabsPane>
      </AtTabs>
    </view>
  </view>
</template>

<script>
import { AtTabs, AtTabsPane } from 'taro-ui-vue';
import CardList from './cardList';
import Taro from '@tarojs/taro'
export default {
  name: 'MyDetail',
  components: {
    AtTabs,
    AtTabsPane,
    CardList,
  },
  props: {
    isFixedTop: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      msg: 'This is three',
      current1: 0,
      tabNavInitTop: 205,
      nickName: '',
      avatar: '',
      tabList1: [
        { title: '我的创作' },
        { title: '我的收藏' },
        { title: '我的关注' }
      ],
      myCreate: [
        {
          title: '谁偷走了我的昨天',
          content: '这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能',
          date: '3月10日',
          user: 'AnbolKing',
          id: '23r2c',
        },
        {
          title: '谁偷走了我的昨天',
          content: '这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能',
          date: '3月10日',
          user: 'AnbolKing',
          id: '23r2c',
        },
        {
          title: '谁偷走了我的昨天',
          content: '这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能',
          date: '3月10日',
          user: 'AnbolKing',
          id: '23r2c',
        },
        {
          title: '谁偷走了我的昨天',
          content: '这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能',
          date: '3月10日',
          user: 'AnbolKing',
          id: '2487c',
        },
        {
          title: '谁偷走了我的昨天',
          content: '这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能',
          date: '3月10日',
          user: 'AnbolKing',
          id: 'q3to873c',
        }
      ],
      myLove: [
        {
          title: '谁偷走了我的昨天',
          content: '这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能',
          date: '3月10日',
          user: 'AnbolKing',
          love: true,
          id: '3487c',
        },
        {
          title: '谁偷走了我的昨天',
          content: '这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能',
          date: '3月10日',
          user: 'AnbolKing',
          love: true,
          id: 'q2r87',
        },
        {
          title: '谁偷走了我的昨天',
          content: '这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能这也是内容区 可以随意定义功能',
          date: '3月10日',
          user: 'AnbolKing',
          love: true,
          id: '34879c',
        }
      ]
    }
  },
  methods: {
    handleClick(value) {
      this.current1 = value
    },
    handleChangeAvator() {
      Taro.showToast({
        title: '正在访问手机相册',
        duration: 1500,
        icon: 'loading',
      })
      Taro.chooseImage({
        count: 1,
        sourceType: ['album', 'camera'],
        sizeType: ['compressed'],
        fail: () => {
          Taro.showToast({
            title: '头像更换失败',
            icon: 'none',
          })
        },
        success: (res) => {
          let tmpPath = res.tempFilePaths[0];
          tmpPath = tmpPath.slice(tmpPath.indexOf(':'));
          tmpPath = 'http' + tmpPath;
          this.avatar = tmpPath;
          console.log(this.avatar);
        }
      })
    },
    handleInit() {
      Taro.getStorage({
        key: 'userInfo',
        success: (res) => {
          console.log(res);
          this.nickName = res.data.nickName;
          this.avatar = res.data.avatarUrl;
        },
      })
    },
  },
  onShow() {
    let that = this;
    Taro.createSelectorQuery().in(that).select('.at-tabs__header').boundingClientRect(function(rect){
      console.log(rect);
    }).exec()
  },
  mounted() {
    this.handleInit()
  }
}
</script>

<style lang="less">
.my-container {
  width: 100%;
  height: 100%;
  box-sizing:border-box;
  padding-top: 100rpx;
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -9;
  }
  .my-header {
    padding-left: 30px;
    padding-right: 30px;
    box-sizing:border-box;
    display: flex;
    align-items: center;
    height: 100rpx;
    width: 100%;
    color: #000;
    .header-desc {
      flex: 3;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .desc-user {
        font-size: 60rpx;
        font-weight: 600;
      }
      .desc-info {
        font-size: 25rpx;
        font-weight: 500;
      }
    }
    .header-avator {
      flex: 1;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      image {
        border-radius: 50%;
        width: 150rpx;
        height: 150rpx;
      }
    }
  }
  .my-tab {
    margin-top: 50rpx;
    width: 100%;
    .tab-fixed {
      width: 100%;
      .at-tabs__header {
          position: fixed !important;
          top: 0 !important;
          width: 750rpx !important;
          padding-left: 0 !important;
          border-radius: 0 !important;
          transition: width 0.5s !important;
          z-index: 3 !important;
          background: #F9F9F9 !important;
        }
    }
    .at-tabs__header {
      background: #F9F9F9;
      height: 100rpx;
      border-radius: 50rpx;
      margin: 0 auto;
      width: 90%;
    }
    .at-tabs__item-underline {
      display: none;
    }
    .at-tabs__body {
      border: none;
      margin: 0 auto;
      width: 95%;
      .at-tabs__underline {
        display: none;
      }
    }
  }
  .my-pay {
    width: 90%;
    margin: 0 auto;
    padding-bottom: 30rpx;
    .pay-container {
      width: 100%;
      background: #05B40f;
      color: #fff;
      font-size: 30rpx;
      font-weight: 500;
      height: 80rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50rpx;
    }
  }
}
</style>