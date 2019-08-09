<template>
    <div class="shop-wrap">
        <div class="banner">
            <img :src="data.titlePicUrl" alt="">
        </div>
        <div ref='wrap'>
            <ul class="shop-list" ref="scroll">
                <li v-for="item in data.itemList" :key="item.id" class="shop-item">
                    <img :src="item.listPicUrl" alt="" class="icon">
                    <p class="title">{{item.name}}</p>
                    <p>
                        <span class="retailPrice">¥{{item.retailPrice}}</span>
                        <span class="counterPrice">¥{{item.counterPrice}}</span>
                    </p>
                    <p class="tip" v-if="item.retailPrice != item.counterPrice">
                        <span v-if="item.promTag">{{item.promTag}}</span>
                    </p>
                </li>
                <li class="show-more">
                    <span>查看更多</span>
                    <van-icon name='arrow' />
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    props:['data'],
    name:'home-shoplist',
    mounted() {
        
        let width = 90 * this.data.itemList.length + 106;
        this.$refs.scroll.style.width = `${width}px`;
        let scroll = new BScroll(this.$refs.wrap,{
            scrollY:false,
            scrollX:true
        });
    }
}
</script>

<style lang="scss" scoped>
.shop-wrap {
    .banner {
        img {
            width: 100%;
        }
    }
    .shop-list {
        // width: 100%;
        padding: 8px;
        box-sizing: border-box;
        overflow: hidden;
        .shop-item {
            float: left;
            padding: 0 5px;
            width: 80px;
            .icon {
                width: 80px;
                height: 80px;
            }
            .title {
                font-size: 14px;
                line-height: 24px;
                color: #333;
                white-space: nowrap;    //不换行
                overflow: hidden;
                text-overflow: ellipsis;
                
            }
            .retailPrice {
                color: #b4284d;
                font-size: 14px;
                line-height: 14px;
            }
            .counterPrice {
                font-size: 12px;
                color: #b4282d;
                text-decoration: line-through;
                color: #999;
                padding-left: 4px;
                // float: left;
            }
            .tip {
                
                font-size: 12px;
                line-height: 12px;
                border: 1px solid #b4282d;
                color: #b4282d;
                border-radius: 4px;
            }
        }
        .show-more {
            width: 80px;
            height: 80px;
            margin: 0 5px;
            background: #f4f4f4;
            text-align: center;
            line-height: 80px;
            font-size: 14px;
            color:#666;
            float: left;
        }
    }
}
</style>

