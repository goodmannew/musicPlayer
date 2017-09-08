<template>
	<div class="myHeader">
		<div class="icon">jsjjsj</div>
		<div class="text">Chicken Music</div>
	</div>
</template>
<script>
	export default {
	}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable.styl"
	@import "~common/stylus/mixin.styl"
	.myHeader
		position: relative
		height: 44px
		text-align: center
		color: $color-theme
		font-size: 0
		.icon
			display inline-block
			vertical-align top 
			width 30px
			height 32px
			margin-right 9px
			bg-image('logo')	
			background-size 30px 32px 
		.text
			display inline-block
			vertical-align top
			line-height 44px
			font-size $font-size-large
		.mine
			display inline-block

</style>