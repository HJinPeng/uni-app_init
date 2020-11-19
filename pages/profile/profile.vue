<template>
  <view>
    个人中心
    <view class="contact" @click="clickContact"> 联系我们 </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      clickContact() {
        uni.navigateTo({
          url: '../address/address',
        });
      },
    },
  };
</script>

<style></style>
