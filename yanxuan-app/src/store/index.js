import Vuex from 'vuex'
import home from './modules/home'
import category from './modules/category'
import Vue from 'vue'

Vue.use(Vuex)

const state = {

}

const mutations = {

}

const actions = {

}

export default new Vuex.Store({
    modules:{
        state,
        mutations,
        actions,
        home,
        category
    }
})