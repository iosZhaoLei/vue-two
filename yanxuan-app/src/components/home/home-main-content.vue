<template>
    <div>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in bannerList" :key="item.id"><img :src='item.picUrl'></van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import { Swipe, SwipeItem } from 'vant';
export default {
    computed:{
        ...mapState({
            bannerList:state=>state.home.bannerList
        })
    },
    components:{
        [Swipe.name]:Swipe,
		[SwipeItem.name]:SwipeItem,
    },
    created(){
        this.$store.dispatch('home/getHomeBannerList');
    }
}
</script>

<style>
.van-swipe-item img {
	width : 100%;
    height: 170.66px;
	display: block;
}
.van-swipe__indicator {
	width: 16px;
    height: 3px;
    border-radius: 0;
}
</style>
