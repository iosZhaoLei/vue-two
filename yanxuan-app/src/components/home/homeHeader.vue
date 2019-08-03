<template>
    <div class="header">{{shopCount}}</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState({
            shopCount:state=>state.home.shopCount
        })
    },
    created() {
        this.$store.dispatch('home/getHomeShopCount');
    }
}
</script>
    
<style>

</style>
