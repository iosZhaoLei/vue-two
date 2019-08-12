<template>
    <scroller class="menu-warp">
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="item in menuList.bannerList" :key="item.targetUrl"><img :src='item.picUrl'></van-swipe-item>
        </van-swipe>
        <div v-for="item in menuList.categoryItemList" :key='item.category.name'>
            <div class="title">
                <p>{{item.category.name}}</p>
                <p>{{item.category.frontName}}</p>
            </div>
            <item-list :list='item.itemList'></item-list>
        </div>
    </scroller>
</template>

<script>
import {mapState} from 'vuex'
import { Swipe, SwipeItem } from 'vant'
export default {
    props:['id','name'],
    computed:{
        ...mapState({
            menuList:state=>state.home.menuList
        })
    },
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
    },
    created() {
        // HOME_CATE_ITEM_LIST_URL
        this.$store.dispatch('home/getMenuListData',this.id)
    },
    watch: {
        id:{
            //每一次id变化 重新请求分类列表数据
            handler(newVal){
                newVal && this.$store.dispatch('home/getMenuListData',newVal);
            },
            //自己执行一次
            immediate:true
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-warp {

}
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
