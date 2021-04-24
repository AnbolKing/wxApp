<template>
  <view class="explore-list">
    <view class="list-header">
      <text class="header-left">热门续作 ||</text>
      <text class="header-right">更多</text>
    </view>
    <view class="list-wrapper">
      <view class="list-item-wrapper"
        v-for="item in data"
        :key="item.id"
      >
        <AtListItem
          class="list-item"
          :title="item.title"
          :note="item.user"
          :thumb="item.avator"
        />
        <view class="item-last">
          <!-- <image src='../static/icon/hot.png' class="item-img"/> -->
          <text class="item-text">{{item.hot}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { AtListItem } from 'taro-ui-vue'
export default {
  name: 'ExploreList',
  components: {
    AtListItem,
  },
  props: {
    data: {
      type: Array,
      default: [],
    }
  }
}
</script>

<style lang="less">
.explore-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50rpx 0;
  .list-header {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: #000;
    .header-left {
      font-size: 30rpx;
      font-weight: 600;
    }
    .hedaer-right {
      font-size: 20rpx;
      font-weight: 400;
    }
  }
  .list-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20rpx;
    .list-item-wrapper {
      margin: 10rpx 0;
      width: 100%;
      position: relative;
      .list-item {
        background: #CEE38E;
        height: 110rpx;
        border-radius: 30rpx;
        display: flex;
        align-items: center;
        color: #000;
        .at-list__item-container {
          width: 100%;
          .item-thumb {
            width: 66rpx;
            height: 66rpx;
          }
        }
      }
      .item-last {
        position: absolute;
        right: 15rpx;
        top: 50%;
        transform: translateY(-50%);
        display: flex;
        align-items: center;
        color: #000;
        .item-img {
          width: 46rpx;
          height: 46rpx;
          margin-right: 10rpx;
        }
      }
    }
  }
}
</style>