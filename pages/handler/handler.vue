<template>
  <view class="handler-wrap">
    <view v-for="item in todoList" :key="item.id" class="item">
      {{ item.name }}
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        todoList: [
          {
            name: '1',
            id: '1',
          },
          {
            name: '2',
            id: '2',
          },
          {
            name: '3',
            id: '3',
          },
          {
            name: '4',
            id: '4',
          },
          {
            name: '5',
            id: '5',
          },
          {
            name: '6',
            id: '6',
          },
          {
            name: '7',
            id: '7',
          },
        ],
      };
    },
    onPullDownRefresh() {
      console.log('下拉刷新');
      setTimeout(() => {
        uni.stopPullDownRefresh();
      }, 1000);
    },
    onReachBottom() {
      console.log('到达底部了');
    },
    methods: {},
  };
</script>

<style lang="scss">
  .handler-wrap {
    .item {
      height: 500rpx;
    }
  }
</style>
