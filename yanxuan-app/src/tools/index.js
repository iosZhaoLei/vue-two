import TabBar from './components/TabBar'
import {Icon,Toast,Lazyload} from 'vant'
import Scroller from './components/Scroller'
import ItemList from './components/itemList'

export default {
    install(Vue){
        Vue.use(Icon);
        Vue.use(Toast);
        Vue.use(Lazyload);
        Vue.component('tab-bar',TabBar);
        Vue.component('scroller',Scroller);
        Vue.component(ItemList.name,ItemList);
    }
}