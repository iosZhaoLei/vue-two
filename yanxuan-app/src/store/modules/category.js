
import api from 'api'
import {fetchGet} from 'fetch'

const state = {
    categorydata:[]
}

const mutations = {
    setCategoryData(state,params) {
        state.categorydata = params;
        state.selectMenuId = params[0].id;
    }
}

const actions = {
    //请求侧边栏分类数据
    getCateMenuData(context) {
        console.log(123);
        fetchGet(api.CATEGOEY_LIST_URL).then(data=>{
            let newdata = data.map(({id,name})=>({id,name}));
            context.commit('setCategoryData',newdata)
        })
    }
}

export default {
    namespaced:true,
    state,
    actions,
    mutations
}