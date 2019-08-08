
import {fetchGet} from 'fetch'
import api from 'api'

const state = {
    shopCount:'',
    homeMenuList:[{id:-1,label:'推荐'}],
    bannerList:[],
    policyList:[],
    iconList:[],
    topData:{}
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
    },
    setPolicyList(state,params) {
        state.policyList = params
    },
    setHomeIconList(state,params) {
        state.iconList = params;
    },
    setHomeTopCateList(state,params) {
        state.topData = params
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
            let newdata = data.map(({id,picUrl})=>({id,picUrl}))
            commit('setBannerData',newdata);
        })
    },
    getHomePoliyList({commit}) {
        fetchGet(api.POLICY_LIST_URL).then(data=>{
            commit('setPolicyList',data);
        })
    },
    getHomeIconList({commit}) {
        fetchGet(api.HOME_CATE_LIST_URL).then(data=>{
            commit('setHomeIconList',data.kingKongList);
        })
    },
    getHomeTopCateList({commit}) {
        fetchGet(api.HOME_TOP_CATELIST_URL).then(data=>{
            let newdata = data.map(itemData=>{
                let itemList = itemData.itemList.map(({id,name,listPicUrl,retailPrice,counterPrice,promTag})=>
                    ({id,name,listPicUrl,retailPrice,counterPrice,promTag})
                )
                return {
                    titlePicUrl : itemData.titlePicUrl,
                    itemList
                }
            })

            commit('setHomeTopCateList',newdata);
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}