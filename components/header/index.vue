<template>
  <view class="header-view"> 欢迎 : {{ name }} </view>
</template>

<script>
  export default {
    props: {
      name: {
        require: true,
        defalut: '',
      },
    },
  };
</script>

<style lang="scss">
  .header-view {
    color: red;
  }
</style>
