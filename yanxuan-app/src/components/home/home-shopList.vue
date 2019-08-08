<template>
    <div class="shop-wrap">
        <div class="banner">
            <img :src="data.titlePicUrl" alt="">
        </div>
        <div class="shop-list">
            
        </div>
    </div>
</template>

<script>

export default {
    props:['data'],
    name:'home-shoplist',
}
</script>

<style lang="scss" scoped>
.shop-wrap {
    .banner {
        img {
            width: 100%;
        }
    }
}
</style>

