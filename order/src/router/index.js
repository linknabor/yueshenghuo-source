import Vue from 'vue'
import Router from 'vue-router'
import Border from '@/pages/border'
import borderdetail  from '@/pages/border-detail'

Vue.use(Router)

const router= new Router({
  routes: [
    {
      path: '/',
      name: 'border',
      component: Border,
      meta:{
        title:'订单列表'
      },
    },
    {
      path: '/borderdetail',
      name: 'borderdetail',
      component: borderdetail,
      meta:{
        title:'订单详情'
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