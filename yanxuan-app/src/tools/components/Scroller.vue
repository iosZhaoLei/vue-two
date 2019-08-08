<template>
<div class="scroller-wrap" ref="wrap">
    <div class="scroller">
        <slot/>
    </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
    mounted(){
        let scroll = new BScroll(this.$refs.wrap,{
            tap:true,
            click:true
        })

        //在用户每一次需要滚动前,刷新滚动图，识别滚动视图高度   
        scroll.on('beforeScrollStart',()=>{
            scroll.refresh();
        })
    }
}
</script>

<style>

</style>
