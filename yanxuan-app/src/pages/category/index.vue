<template>
<div>
    <header class="cate-header">
		<div class="search-bar">
			<van-icon name='search'/>
			<!-- 搜索商品，共{{total}}好物 -->
			搜索商品，共{{$store.state.home.total}}好物
		</div>
	</header>
    <div class="category-content">
        <cgMenuL class="left-content"/>
        <cgMenuR class="right-content"/>
    </div>
    <transition enter-active-class='slideInRight' leave-active-class='slideOutRight'>
        <router-view/>
    </transition>
    
</div>
</template>

<script>
import cgMenuL from '@components/category/cg-menu-l'
import cgMenuR from '@components/category/cg-menu-r'
export default {
    components:{
        cgMenuL,
        cgMenuR
    },
    created(){
        
    }
}
</script>

<style lang="scss" scoped>
.cate-header {
    width: 100%;
    height: 44px;
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 8px;
    box-sizing: border-box;
    display: flex;
    .search-bar {
        background: #efefef;
        flex: 1;
        margin: 0 5px;
        border-radius: 4px;
        font-size: 12px;
        color: #999;
        text-align: center;
        line-height: 24px;
        .van-icon {
            font-size: 16px;
            transform:translateY(4px);
        }
    }
}
.category-content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left:0px;
    width: 100%;
    display: flex;
    .left-content {
        width: 80px;
        overflow: hidden;
    }
    .right-content {
        flex: 1;
        overflow: hidden;
    }
}
</style>

