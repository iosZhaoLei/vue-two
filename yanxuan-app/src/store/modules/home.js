
import {fetchGet} from 'fetch'
import api from 'api'

const state = {
    shopCount:'',
    homeMenuList:[{id:-1,label:'推荐'}],
    bannerList:[]
}

const mutations = {
    setShopCount(state,params) {
        state.shopCount = params
    },
    setHomeMenuList(state,params) {
        state.homeMenuList = [...state.homeMenuList,...params];
    },
    setBannerData(state,params) {
        state.bannerList = params
    }
}

const actions = {
    getHomeShopCount({commit}) {
        fetchGet(api.GOODS_TOTAL_URL).then(data=>{
            commit('setShopCount',data.total)
        })
    },
    getHomeMenuList({commit}) {
        fetchGet(api.CATE_LIST_URL).then(data=>{
            let newdata = data.map(({id,name})=>({id,label:name}))
            commit('setHomeMenuList',newdata)
        })
    },
    getHomeBannerList({commit}) {
        fetchGet(api.HOME_BANNER_LIST_URL).then(data=>{
            console.log(data);
            let newdata = data.map(({id,picUrl})=>({id,picUrl}))
            commit('setBannerData',newdata);
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}