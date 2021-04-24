<template>
  <view class="explore-container">
    <view class="explore-header">
      <view class="header-text">
        <text class="text-top">探索</text>
        <text class="text-bottom">多少人的思绪，一笔笔勾勒出的华章...</text>
      </view>
      <view class="header-search">
        <!-- <image src='../../static/icon/search.png' /> -->
      </view>
    </view>
    <view class="explore-swiper">
      <swiper
        class="swiper-container"
        indicator-color='#999'
        indicator-active-color='#333'
        indicator-dots="true"
        autoplay
      >
        <swiper-item class="swiper-item">
          <image src="https://img1.doubanio.com/view/group_topic/l/public/p335105788.webp" />
        </swiper-item>
        <swiper-item class="swiper-item">
          <image src="https://img9.doubanio.com/view/group_topic/l/public/p335105734.webp" />
        </swiper-item>
        <swiper-item class="swiper-item">
          <image src="https://img1.doubanio.com/view/group_topic/l/public/p335105758.webp" />
        </swiper-item>
      </swiper>
    </view>
    <view class="explore-btn">
      <view class="btn btn-continue">
        <!-- <image src='../../static/continue_btn.png' class="btn-img"/> -->
        <text class="btn-text">最新续作 ||</text>
      </view>
      <view class="btn btn-create">
        <!-- <image src='../../static/create_btn.png' class="btn-img"/> -->
        <text class="btn-text">最新原创 ||</text>
      </view>
    </view>
    <view class="explore-line"></view>
    <explore-list :data="hotContinue"></explore-list>
    <explore-list :data="hotCreate"></explore-list>
  </view>
</template>

<style lang="less">
.explore-container {
  width: 100%;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  box-sizing:border-box;
  .bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -9;
  }
  .explore-header {
    display: flex;
    align-items: center;
    height: 100rpx;
    width: 100%;
    color: #000;
    padding-top: 40rpx;
    .header-text {
      flex: 3;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      .text-top {
        font-size: 60rpx;
        font-weight: 600;
      }
      .text-bottom {
        font-size: 20rpx;
        font-weight: 500;
      }
    }
    .header-search {
      flex: 1;
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      image {
        width: 50rpx;
        height: 50rpx;
      }
    }
  }
  .explore-swiper {
    margin-top: 50rpx;
    width: 100%;
    .swiper-item {
      border-radius: 30rpx;
      image {
        width: 100%;
      }
    }
  }
  .explore-btn {
    margin-top: 50rpx;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .btn {
      width: 45%;
      height: 100rpx;
      background: #184238;
      border-radius: 30rpx;
      color: #000;
      position: relative;
      .btn-img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        // z-index: 8;
      }
      .btn-text {
        position: absolute;
        font-size: 30rpx;
        font-weight: 600;
        bottom: 20rpx;
        left: 20rpx;
      }
    }
  }
  .explore-line {
    width: 100%;
    height: 3px;
    background: #000;
    margin-top: 50rpx;
  }
}
</style>

<script>
import Vue from 'vue';
import ExploreList from '../../components/exploreList.vue';
import Taro from '@tarojs/taro'
export default {
  components: {
    ExploreList,
  },
  data() {
    return {
      hotContinue: [
        {
          title: '谁偷走了我的昨天',
          user: '中华小子',
          avator: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          id: 'wefyughfc67',
          hot: '45678',
        },
        {
          title: '谁偷走了我的昨天',
          user: '中华小子',
          avator: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          id: 'c2434rc',
          hot: '12345',
        },
        {
          title: '谁偷走了我的昨天',
          user: '中华小子',
          avator: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          id: '34325v34v',
          hot: '87654',
        }
      ],
      hotCreate: [
        {
          title: '谁偷走了我的今天',
          user: '中华小子',
          avator: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          id: 'wefyughfc67',
          hot: '45678',
        },
        {
          title: '谁偷走了我的今天',
          user: '中华小子',
          avator: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          id: 'c2434rc',
          hot: '12345',
        },
        {
          title: '谁偷走了我的今天',
          user: '中华小子',
          avator: 'http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
          id: '34325v34v',
          hot: '87654',
        }
      ]
    }
  },
  methods: {
    handleRefresh: function() {
      Taro.showNavigationBarLoading();
      Taro.showLoading({
        title: '加载中',
      })
      this.handleFetchData();
    },
    handleFetchData: function() {
      this.ajax({
        url: 'https://api.thecatapi.com/v1/images/search',
        method: 'GET',
        data: {
          size: 'full',
          limit: 10,
          page: this.page+1,
        },
        timeout: 6000,
      }).then((res) => {
        console.log(res);
        Taro.hideLoading()
        Taro.hideNavigationBarLoading();
        Taro.stopPullDownRefresh();
        Taro.showToast({
          title: 'success',
          icon: 'success',
          duration: 1000,
        })
      }, (err) => {
        console.log(err);
        Taro.hideLoading();
        Taro.hideNavigationBarLoading();
        Taro.stopPullDownRefresh();
        Taro.showToast({
          title: 'fail',
          icon: 'none',
          duration: 1000,
        })
      })
    }
  },
  onPullDownRefresh() {
    this.handleRefresh();
  }
}
</script>
    ExploreList