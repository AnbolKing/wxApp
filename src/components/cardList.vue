<template>
  <view class="my-list">
    <view class="list-type" v-if="type==='create'">
      <view class="list-item" v-for="item in data" :key="item.id">
        <AtCard
          class="item-card"
          :extra="item.date"
          :note="item.user"
          :title="item.title"
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        >
          {{item.content}}
        </AtCard>
      </view>
    </view>
    <view class="list-type" v-if="type==='love'">
      <view class="list-item" v-for="item in data" :key="item.id">
        <AtCard
          class="item-card"
          :extra="item.date"
          :note="item.user"
          :title="item.title"
          thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'
        >
          {{item.content}}
        </AtCard>
      </view>
    </view>
    <view class="list-type" v-if="type==='focus'">
      <view class="list-item" v-for="item in data" :key="item.id">
        <AtListItem
          class="item-list"
          title='标题文字'
          note='描述信息'
          arrow='right'
          extraText='详细信息'
          :hasBorder="false"
          thumb='http://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png'
        />
      </view>
    </view>
  </view>
</template>

<style lang="less">
.my-list {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30rpx 0;
  .list-type {
    width: 100%;
    .list-item {
      width: 100%;
      padding: 15rpx 0;
      .item-card {
        border-radius: 30rpx;
        background: #F9F9F9;
        border: none;
        .at-card__header {
          border: none;
        }
        .at-card__content {
          border: none;
          padding-top: 10rpx;
        }
        .at-card__content-note {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
      }
      .item-list {
        width: 100%;
        border-radius: 60rpx;
        background: #F9F9F9;
        border: 1px solid #eee;
        padding: 10rpx 24rpx;
      }
    }
  }
}
</style>

<script>
import { AtCard, AtListItem } from 'taro-ui-vue'
export default {
  name: 'CardList',
  components: {
    AtCard,
    AtListItem,
  },
  props: {
    data: {
      type: Array,
      default: [],
    },
    type: {
      type: String,
      default:''
    }
  },
}
</script>