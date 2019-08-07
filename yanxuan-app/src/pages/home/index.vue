<template>
<div class='page'>
    <homeHeader/>
    <homeMenu/>

    <keep-alive>
		<router-view class="home-content" />
	</keep-alive>
</div>
</template>

<script>
import homeHeader from '@components/home/homeHeader'
import homeMenu from '@components/home/home-menu'
export default {
    components:{
        homeHeader,
        homeMenu
    }
}
</script>

<style lang='scss' scope>
.home-content {
	width: 100%;
	position: absolute;
	top: 71px;
	left: 0;
	bottom: 0px;
	overflow: hidden;
}
</style>
