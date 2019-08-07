<template>
    <div class="menu-wrap">
        <ly-tab
            v-model="selectedId"
            :items="items"
            :options="options">
        </ly-tab>
        <div class="arrow" @click="arrowAction">
            <van-icon name="arrow-down" :class="{active:isShow}"></van-icon>
        </div>

        <div v-show="isShow" class="">
            <p>全部频道</p>
            <ul>
                <li v-for="item in items" :key="item.label">{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import LyTab from 'ly-tab'
export default {
    components:{
        'ly-tab':LyTab.LyTab
    },
    data () {
        return {
        selectedId: 0,
        items: [
            {label: '首页'},
            {label: '推荐'},
            {label: 'Android'},
            {label: '前端'},
            {label: '后端'},
            {label: 'iOS'},
            {label: '产品'},
            {label: '人工智能'},
            {label: '设计'}
        ],
        options: {
            activeColor: '#b4284d'
            // 可在这里指定labelKey为你数据里文字对应的字段
        },
        isShow:false
        }
    },
    methods:{
        arrowAction(){
            this.isShow = !this.isShow;
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-wrap {
    position: absolute;
    top: 44px;
    left: 0;
    width: 100%;
    .arrow {
        position: absolute;
        top: 0;
        right: 0;
        width: 40px;
        height: 100%;
        z-index:3001;
        background: #fff;
        .van-icon {
			width: 40px;
			line-height: 26px;
			text-align: center;
			color: #999;
			transition: 280ms;
			&.active{
					transform: rotate(180deg)
			}
		}
    }

}
</style>

<style>
#app .ly-tab-list {
    padding: 7px 60px 7px 10px;
}
</style>

