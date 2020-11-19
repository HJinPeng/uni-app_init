<template>
  <view class="index-wrap">
    <Header class="title" name="首页" />
    <view class="welcome">欢迎使用uni-app</view>
    <view class="desc">demo</view>

    <view class="time">
      {{ nowDate }}
    </view>
  </view>
</template>

<script>
  // 插件
  import moment from 'moment';
  import { mapActions } from 'vuex';

  // 组件
  import Header from '@/components/header/index.vue';

  export default {
    components: {
      Header,
    },
    data() {
      return {
        nowDate: moment(new Date()).format('YYYY-MM-DD hh:mm:ss'),
        nowDateObj: null,
      };
    },
    onLoad() {
      this.getList();
      this.updateDate();
    },

    onUnload() {
      clearInterval(this.nowDateObj);
    },

    onReachBottom() {
      console.log('到达底部');
    },

    methods: {
      ...mapActions('index', ['getInfoList']),

      getList() {
        this.getInfoList({})
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      },

      updateDate() {
        this.nowDateObj = setInterval(() => {
          this.nowDate = moment(new Date()).format('YYYY-MM-DD hh:mm:ss');
        }, 1000);
      },
    },
  };
</script>

<style lang="scss">
  .index-wrap {
    .title {
      font-size: $uni-font-size-lg;
      font-weight: 700;
      color: $uni-color-primary;
      text-align: center;
    }

    .welcome {
      padding: $uni-spacing-col-lg 0;
      color: $uni-color-success;
    }

    .desc {
      color: $uni-text-color-grey;
      text-align: right;
    }
  }
</style>
