import TabBar from './components/TabBar'
import {Icon,Toast} from 'vant'

export default {
    install(Vue){
        Vue.use(Icon);
        Vue.use(Toast);
        Vue.component('tab-bar',TabBar);
    }
}