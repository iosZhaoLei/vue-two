<template>
    <scroller class="category-menu-list" ref='scroll'>
    <img class="banner" :src="cateMenuList.bannerUrl" alt="">
    <div class="group" v-for="group in cateMenuList.categoryGroupList" :key="group.id">
        <h3 class="group-title" v-if="group.name">{{group.name}}</h3>
        <ul class="group-list">
            <li class="group-item" v-for="(item) in group.categoryList" :key="item.id"
             @click="goCategoryGroup(item)">
                <img :src="item.bannerUrl" alt="">
                <p>{{item.name}}</p>
            </li>
        </ul>
    </div>
</scroller>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    computed:{
        ...mapState({
            cateMenuList:state=>state.category.menuList
        }),
        ...mapGetters({
            menuId:'category/selectMenuId'
        })
    },
    watch:{
        menuId(newVal){
            this.$store.dispatch('category/getCategoryListGroupItem',newVal)
        }
    },
    created(){
        //CATEGOEY_LIST_GROUP_URL
        this.$store.dispatch('category/getCategoryListGroupItem')
    },
    methods:{
        goCategoryGroup(item){
            this.$router.push(`/category/group/${item.id}`);
            // this.$router.push(`/category/group/${item.id}`);
        }
    }
}
</script>

<style lang="scss" scoped>
.category-menu-list {
    padding: 10px;
    box-sizing: border-box;
    .banner {
        width: 100%;
        display: block;
    }
    .group {
        .group-title {
            font-size: 14px;
            font-weight: bold;
            padding: 8px 0;
        }
        .group-list {
            overflow: hidden;
            padding: 10px 0;
            .group-item {
                height: 115px;
                width: 33.33%;
                // height: 100%;
                float: left;
                img {
                    width: 90%;
                    margin: 0 auto;
                    display:  block;
                }
                p {
                    width: 80%;
                    font-size: 12px;
                    text-align: center;
                    line-height: 16px;
                    margin: 0 auto;
                    margin-top: 5px;
                }
            }
        }
    }
}
</style>

