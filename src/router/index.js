import Vue from 'vue'
import VueRouter from 'vue-router'
import Help from '@/components/Help'
import Index from '@/components/Index'
import NotFound from '@/components/404';
import UserF from '@/components/User';
import Params from '@/components/Params';
import Views from '@/components/Views';
import ViewLeft from '@/components/ViewLeft';
import ViewRight from '@/components/ViewRight';

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  scrollBehavior(to,from,savedPosition){
      console.log("savedPosition");
        if(savedPosition){
            return savedPosition;
        }else{
            return {x: 0,y: 0}
        }
    },
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
    	path: '/index',
    	name: 'Index',
    	component: Index,
      // beforeEnter:(to, from, next)=>{
      //   // console.log(to, from,next)
      //   console.log('router ... beforeEnter...');
      //   next();
      // },
      children: [
        {
          path:'user',
          name:'User',
          component: UserF
        },
        {
          path:'list/:id',
          component:{
            template: `<h3>list参数{{$route.params.id}}</h3>`
          }
        },
        { path: 'info', component: resolve => require(['@/components/Info.vue'], resolve) },
        {
          path: 'params',
          name: 'paramsname',
          component: Params
        }
      ],
      // beforeRouteEnter (to, from, next) {
      //   // 在渲染该组件的对应路由被 confirm 前调用
      //   // 不！能！获取组件实例 `this`
      //   // 因为当守卫执行前，组件实例还没被创建
      //   console.log(to, from, next)
      // },
      // beforeRouteUpdate (to, from, next) {
      //   // 在当前路由改变，但是该组件被复用时调用
      //   // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      //   // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      //   // 可以访问组件实例 `this`
      //   console.log(to, from, next)
      // },
      // beforeRouteLeave (to, from, next) {
      //   // 导航离开该组件的对应路由时调用
      //   // 可以访问组件实例 `this`
      //   console.log(to, from, next)
      // }
    },{
      path: '/help',
      name: 'Help',
      component: Help,
      meta: { requiresAuth: true }
    },{
      path: '/views',
      name: 'views',
      component: Views,
      children:[
        {
          path:'multi',
          components:{
            default: null,
            left: ViewLeft,
            right: ViewRight
          }
        }
      ]
      
    },{
      path: '*',
      name: '404',
      component: NotFound
    }
  ]
});

// router.beforeEach((to, from, next) => {
//   // ...
//   console.log(to, from, next);
// });

export default router;


