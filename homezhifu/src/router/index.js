import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index';
import Success from '@/pages/success'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {
        title:'保洁日常支付'
      }
    },
     {
       path:'/success',
       name:'success',
       component:Success,
       meta: {
         title:'预约成功'
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
