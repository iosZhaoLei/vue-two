export default {
    path:'/category',
    component:()=>import('@pages/category'),
    children:[
        {
            path:'group/:id',
			component:()=>import('@pages/category/category-group'),
			props:true
        }
    ]
}