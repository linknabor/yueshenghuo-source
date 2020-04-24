import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'// 首页
import Register from '@/pages/register/register' //注册

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path:'/register',
      name:'register',
      component:Register,
      meta:{
        title:'注册'
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