//引入路由组件
import Home from '../pages/Home/Home.vue'
import Categories from '../pages/Categories/Categories.vue'
import Profile from '../pages/Profile/Profile.vue'
import Recommend from '../pages/Recommend/Recommend.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'


export default [//注册每个路由route
    {
        path:'/home',
        component:Home
    },
    {
        path:'/categories',
        component:Categories
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/recommend',
        component:Recommend
    },
    {
        path:'/shopCart',
        component:ShopCart
    },
    {
        path:'/',
        redirect:'/home'
    }
    
]