<template>
    <nav class="nav border-top">
        <!-- <template v-for="item in navList">
            <router-link :key="item.name">{{item.name}}</router-link>
        </template> -->
        <router-link class='tab-item' v-for="item in navList" :key="item.name" :to='item.path'>
            <span class="icon"></span>
            <span class="text">{{item.name}}</span>
        </router-link>
    </nav>
</template>

<script>
export default {
    data(){
        return {
            navList : [
                {name:'首页',path:'/home'},
                {name:'分类',path:'/category'},
                {name:'识物',path:'/discover'},
                {name:'购物车',path:'/cart'},
                {name:'我的',path:'/mine'}
            ]
        }
    },
    created(){
        console.log('1');
        
    }
}
</script>

<style lang="scss" scoped>
.nav {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 49px;
    display: flex;
    .tab-item{
        flex: 1;
        &.router-link-active .text {
            color: #e43929;
        }
        span {
			display: block;
			&.icon {
				width: 20px;
				height: 20px;
				margin: 0 auto;
				background-size: 100%;
				background-image: url(/images/tabs.png);
				background-repeat: no-repeat;
				}
			&.text {
				padding-top: 2px;
				font-size: 12px;
				color: #333;
				text-align: center;
			}
		}
    }
}

.tab-item:nth-of-type(1) {
		.icon {
			background-position: 0 -122.5px;
		}
	}
	.tab-item:nth-of-type(1).router-link-active {
		.icon {
			background-position: 0 -98px;
		}
	}
	
	.tab-item:nth-of-type(2) {
		.icon {
			background-position: 0 -73.5px;
		}
	}
	.tab-item:nth-of-type(2).router-link-active {
		.icon {
			background-position: 0 -49px;
		}
	}
	
	.tab-item:nth-of-type(3) {
		.icon {
			background-position: 0 -171.5px;
		}
	}
	.tab-item:nth-of-type(3).router-link-active {
		.icon {
			background-position: 0 -147px;
		}
	}
	
	.tab-item:nth-of-type(4) {
		.icon {
			background-position: 0 -24.5px;
		}
	}
	.tab-item:nth-of-type(4).router-link-active {
		.icon {
			background-position: 0 0px;
		}
	}
	
	.tab-item:nth-of-type(5) {
		.icon {
			background-position: 0 -220.5px;
		}
	}
	.tab-item:nth-of-type(5).router-link-active {
		.icon {
			background-position: 0 -196px;
		}
	}
</style>
