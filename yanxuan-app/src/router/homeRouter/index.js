export default {
    path:'/home',
    component:()=>import('@pages/home'),
    children:[
        {
            alias:'',
            path:'main',
            component:()=>import('@components/home/home-main-content')
        }
        // ,
        // {
        //     path:'menu/:id/:name',
        //     components:()=>import('@components/home/home-menu-content'),
        //     props:true      //接收传值
        // }
    ]
}