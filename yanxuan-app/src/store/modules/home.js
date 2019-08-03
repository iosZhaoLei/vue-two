
import {fetchGet} from 'fetch'
import api from 'api'

const state = {
    shopCount:''
}

const mutations = {
    setShopCount(state,params) {
        state.shopCount = params
    }
}

const actions = {
    getHomeShopCount({commit}) {
        fetchGet(api.GOODS_TOTAL_URL).then(data=>{
            commit('setShopCount',data)
        })
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}