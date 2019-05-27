import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'// 首页
import Baojie from '@/pages/baojie/baojie'//保洁 导航
import Rchang from '@/pages/baojie/rchang'// 日常保洁
import Border from '@/pages/baojie/border' //订单列表
import Register from '@/pages/register/register' //注册
import City from '@/pages/city'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/baojie',
      name:'baojie',
      component:Baojie,
      meta:{
        title:'保洁'
      }
    },
    {
      path:'/rchang',
      name:'rchang',
      component:Rchang,
      meta:{
        title:'日常保洁'
      }
    },
    {
      path:'/Border',
      name:'border',
      component:Border,
      meta:{
        title:'订单列表'
      }
    },
    {
      path:'/register',
      name:'register',
      component:Register,
      meta:{
        title:'注册'
      }
    },
    {
      path:'/city',
      name:'city',
      component:City,
      meta:{
        title:'城市选择'
      }
    }

  ]
})

router.beforeEach((to, from, next) => {
  //动态改变title
  changeTitle(to.meta.title)
  next();
});
//动态改变title
function changeTitle(title) {
  title = title ? title : '光明悦生活';
  window.document.title = title;
}
export default router