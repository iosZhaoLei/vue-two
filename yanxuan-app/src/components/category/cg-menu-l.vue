<template>
    <scroller class="scroller border-right">
        <ul class="menu-wrap">
            <li v-for="(item,index) in categorydata" 
            :key='item.id' 
            class="menu-item"
            :class="{active: selectIndex == index}"
            @click="menuAction(index)">
                <span>{{item.name}}</span>
            </li>
        </ul>
    </scroller>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState({
            categorydata:state=>state.category.categorydata,
            selectIndex:state=>state.category.selectMenuIndex
        })
    },
    methods:{
        menuAction(index){
            this.$store.commit('category/setMenuIndex',index)
        }
    },
    created(){
        this.$store.dispatch('category/getCateMenuData');
    }
}
</script>

<style lang="scss" scoped>
.menu-wrap {
    width: 100%;
    .menu-item {
        padding: 10px 0;
        span {
            // display: block;
            // font-size: 14px;
            // border-left: 3px solid transparent;
            display: block;
            font-size: 14px;
            color: #333;
            text-align: center;
            line-height: 18px;
            padding: 5px 0;
            border: 3px solid transparent;  //透明的3像素边框
        }
        &.active span{
            color: #b4284d;
            border-left: 3px solid #b4284d;
        }
    }
}
</style>

