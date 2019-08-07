
import Vue from 'vue'
import Router from 'vue-router'
import home from './homeRouter'
import categoty from './categoryRouter'
import discover from './discoverRouter'
import cart from './cartRouter'
import mine from './mineRouter'

Vue.use(Router)

export default new Router ({
    mode:'history',
    base:process.env.BASE_URL,
    routes:[
        home,
        categoty,
        discover,
        cart,
        mine,
        //重定向   当url为/时 进入home
        {
            path:'/',
            redirect:'/home'
        }
    ]
})