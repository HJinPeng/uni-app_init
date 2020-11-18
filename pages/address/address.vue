<template>
	<view class="address-wrap">
		<view @click="callPhone">
			联系我们：13143352767
		</view>
		<map class="map" :longitude="longitude" :latitude="latitude" :markers="markers" show-compass  :scale="scale"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scale: 11,
				longitude: 113.27692,
				latitude: 23.137185,
				markers: [
					{
						latitude: 23.137185,
						longitude: 113.27692,
						iconPath: '../../static/logo.png',
						width: 30,
						height: 30
					}
				]
			}
		},
		methods: {
			callPhone() {
				uni.makePhoneCall({
					phoneNumber: '13143352767'
				})
			}
		}
	}
</script>

<style lang="scss">
	.address-wrap {
		.map {
			width: 750rpx;
			height: 750rpx;
		}
	}
</style>
