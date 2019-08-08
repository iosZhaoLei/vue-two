import TabBar from './components/TabBar'
import {Icon,Toast} from 'vant'
import Scroller from './components/Scroller'

export default {
    install(Vue){
        Vue.use(Icon);
        Vue.use(Toast);
        Vue.component('tab-bar',TabBar);
        Vue.component('scroller',Scroller);
    }
}