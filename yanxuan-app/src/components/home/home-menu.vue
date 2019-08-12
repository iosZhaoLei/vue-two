<template>
    <div class="menu-wrap">
        <ly-tab
            v-if='homeMenuList.length>1'
            v-model="selectedId"
            :items="homeMenuList"
            :options="options">
        </ly-tab>
        <div class="arrow" @click="arrowAction">
            <van-icon name="arrow-down" :class="{active:isShow}"></van-icon>
        </div>
        <van-popup v-model='isShow'></van-popup>
        <div v-show="isShow" class="wrap">
            <div>全部频道</div>
            <ul>
                <li v-for="(item,index) in homeMenuList" :key="item.id" 
                :class="{active:selectedId==index}" @click="menuAction(index)">{{item.label}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import LyTab from 'ly-tab'
import {Popup} from 'vant'
import {mapState} from 'vuex'
export default {
    components:{
        'ly-tab':LyTab.LyTab,
        [Popup.name]:Popup
    },
    computed:{
        ...mapState({
            homeMenuList:state=>state.home.homeMenuList
        })
    },
    data () {
        return {
        selectedId: 0,
        options: {
            activeColor: '#b4284d'
            // 可在这里指定labelKey为你数据里文字对应的字段
        },
        isShow:false
        }
    },
    created() {
        this.$store.dispatch('home/getHomeMenuList');
    },
    methods:{
        arrowAction(){
            this.isShow = !this.isShow;
        },
        menuAction(index){
            this.selectedId = index;
            this.isShow = !this.isShow;
        }
    },
    watch:{
        selectedId(newval){
            if(newval == 0) {
                this.$router.push('/home/main')
            }else {
                let {id,label} = this.homeMenuList[newval];
                this.$router.push(`/home/menu/${id}/${label}`)
            }
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
    .wrap {
        position: absolute;
        top: 0;
        left: 0;
        background: #fff;
        width: 100%;
        z-index: 3000;
        div {
            height: 26px;
            line-height: 26px;
            padding-left: 10px;
            font-size: 14px;
            text-align: left;
        }
        ul {
            li {
                margin-top: 10px;
                float: left;
                width: 25%;
            }
            .active {
                color: #b4282d;
            }
        }
    }

}
</style>

<style>
#app .ly-tab-list {
    padding: 7px 60px 7px 10px;
}

.van-overlay {
	top:44px;
}
</style>

