<template>
<scroller>
    <van-swipe :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="item in bannerList" :key="item.id"><img :src='item.picUrl'></van-swipe-item>
    </van-swipe>

    <ul class="policy-wrap">
        <li v-for="item in policyList" :key="item.desc" class="policy-item">
            <img :src="item.icon" alt="">
            <span>{{item.desc}}</span>
        </li>
    </ul>

    <ul class="icon-list">
        <li v-for="item in iconList" :key="item.picUrl" class="icon-item">
            <img :src="item.picUrl" alt="">
            <span>{{item.text}}</span>
         </li>
    </ul>
    <template v-for="item in topData">
        <home-shoplist :key="item.id" :data='item'></home-shoplist>
    </template>
    
</scroller>
        <!-- picUrl text textColor -->
</template>

<script>
import {mapState} from 'vuex'
import { Swipe, SwipeItem } from 'vant'
import homeShoplist from './home-shopList'
export default {
    computed:{
        ...mapState({
            bannerList:state=>state.home.bannerList,
            policyList:state=>state.home.policyList,
            iconList:state=>state.home.iconList,
            topData:state=>state.home.topData
        })
    },
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        [homeShoplist.name]:homeShoplist
    },
    created(){
        this.$store.dispatch('home/getHomeBannerList');
        this.$store.dispatch('home/getHomePoliyList');
        this.$store.dispatch('home/getHomeIconList');

        // HOME_TOP_CATELIST_URL
        this.$store.dispatch('home/getHomeTopCateList')
    }
}
</script>

<style lang="scss" scoped>
.policy-wrap {
    width: 100%;
    padding: 2px 1px;
    background: #ffecdd;
    display: flex;
    .policy-item {
        flex: 1;
        img {
            width: 16px;
            height: 16px;
            float: left;
        }
        span {
            float: left;
            font-size: 12px;
            line-height: 14px;
            color: #b4284d;
        }
    }
}
.icon-list {
    .icon-item {
        width: 20%;
        float: left;
        img  {
            width: 90%;
            margin: 0 auto;
        }
        span {
            width: 100%;
            font-size: 12px;
            line-height: 20px;
            color: #333;
            text-align: center;
            float: left;
        }
    }
}
</style>


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
