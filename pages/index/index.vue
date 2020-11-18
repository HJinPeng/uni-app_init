<template>
	<view class="index-wrap">
		<view class="title">首页</view>
		<view class="welcome">欢迎使用uni-app</view>
		<view class="desc">demo</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			}
		},
		onLoad() {
			this.getList();
		},
		onReachBottom() {
			console.log('到达底部');
		},
		methods: {
			getList() {
				this.$uniRequest({
					url: 'index/getList',
					method: 'POST',
					data: {
						pageSize: 10,
						pageNo: 1,
					}
				}).then(res=>{
					console.log(res)
				}).catch(err => {
					console.log(err);
				})
			}
		}
	}
</script>

<style lang="scss">
	.index-wrap {
		.title {
			color: $uni-color-primary;
			font-weight: 700;
			font-size: $uni-font-size-lg;
			text-align: center;
		}
		.welcome {
			color: $uni-color-success;
			padding: $uni-spacing-col-lg 0;
		}
		.desc {
			color: $uni-text-color-grey;
			text-align: right;
		}
	}
</style>
