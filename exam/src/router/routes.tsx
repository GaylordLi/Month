import Home from '../container/home';
import Fenlei from '../container/fenlei/index'
import Study from '../container/study/index'
import Faxian from '../container/faxian/index'
import User from '../container/user/index'
import Detail from '../container/detail/index'
import shop from '../container/shop/index'
import Shopcar from '../container/shopcar/index'
export default [
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: []
    },
    {
        path: '/fenlei',
        name: 'fenlei',
        component: Fenlei,
        children: []
    }, {
        path: '/study',
        name: 'study',
        component: Study,
        children: []
    }, {
        path: '/faxian',
        name: 'faxian',
        component: Faxian,
        children: []
    }, {
        path: '/user',
        name: 'user',
        component: User,
        children: []
    }, {
        path: '/shop',
        name: 'shop',
        component: shop,
        children: []
    }, {
        path: '/detail',
        name: 'detail',
        component: Detail,
        children: []
    },
    {
        path: '/shopcar',
        name: 'shopcar',
        component: Shopcar,
        children: []
    },

];
