# demo3

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


$route  route object



Eslint 规则说明
http://blog.csdn.net/helpzp2008/article/details/51507428

配置 path 的时候，以 " / " 开头的嵌套路径会被当作根路径，所以子路由的 path 不需要添加 " / "

路由是可以嵌套的，也就是 路由中 的 children 参数， 但要注意的是，嵌套的路由的 页面组件也 是要 同时嵌套，，比如， 子路由的组件 必须在 父组件 中渲染

这种只需要跳转页面，不需要添加验证方法的情况，可以使用 <router-link> 来实现导航的功能


要注意：
$route 与 $router 两个变量的使用区别


父组件向子组件传递数据

在 Vue 中，可以使用 props 向子组件传递数据。在 props 中添加了元素之后，就不需要在 data 中再添加变量了


子组件 向 父组件 传递数据 

this.$emit('props_event目标函数名', 参数);

组件的通讯，基本最常用的是这三种;

父传子: props
子传父: emit
兄弟通讯:
event bus: 就是找一个中间组件来作为信息传递中介
vuex: 信息树


组件可以缓存么?
可以,用keep-alive;

不过是有代码的..占有内存会多了...所以无脑的缓存所有组件!!!别说性能好了..切换几次,
有些硬件 hold不住的,浏览器直接崩溃或者卡死..

所以keep-alive一般缓存都是一些列表页,不会有太多的操作,更多的只是结果集的更换..

给路由的组件meta增加一个标志位,结合v-if就可以按需加上缓存了!

汇总 Vue 中大家最爱问的高频问题
http://blog.csdn.net/csdn_yudong/article/details/78866631

data functions should return an object??

data 1、写法不错 2、data必须得写


vuex里面有什么？

应用级的状态集中放在store中； 
改变状态的方式是提交mutations，这是个同步的事物； 
异步逻辑应该封装在action中

//=========
创建 state actions mutations getters
getters(): 是store的计算属性,getters接收state作为第一个参数
actions: 提交mutation,可以包含任意异步操作,不能直接修改state
mutations: action支持异步操作(setTimeout)，mutation必须是同步函数
更改 Vuex 的 store 中的状态的唯一方法是提交 mutation
Action 提交的是 mutation，Action 通过 store.dispatch 方法触发


mapMutations
mapActions
mapGetters
mapState
把store传递给根组件，让所有子组件都能获取到。子组件通过this.$store访问

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})

===== store 可以分模块
store.state.a// -> moduleA 的状态

const store=new Vuex.Store({
   modules:{
	   	// store.state.a// -> moduleA 的状态
		a:modulesA,
		// store.state.b// -> moduleB 的状态
		b:modulesB
   }
})

<!-- 字符串 -->
<router-link to="home">Home</router-link>
<!-- 渲染结果 -->
<a href="home">Home</a>

<!-- 使用 v-bind 的 JS 表达式 -->
<router-link v-bind:to="'home'">Home</router-link>

<!-- 不写 v-bind 也可以，就像绑定别的属性一样 -->
<router-link :to="'home'">Home</router-link>

<!-- 同上 -->
<router-link :to="{ path: 'home' }">Home</router-link>

<!-- 命名的路由 -->
<router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link>

<!-- 带查询参数，下面的结果为 /register?plan=private -->
<router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>



六、路由信息对象
1.$route.path
字符串，对应当前路由的路径，总是解析为绝对路径，如 "/foo/bar"。
2.$route.params
一个 key/value 对象，包含了 动态片段 和 全匹配片段，如果没有路由参数，就是一个空对象。
3.$route.query
一个 key/value 对象，表示 URL 查询参数。例如，对于路径 /foo?user=1，则有 $route.query.user == 1，如果没有查询参数，则是个空对象。
4.$route.hash
当前路由的 hash 值 (不带 #) ，如果没有 hash 值，则为空字符串。
5.$route.fullPath
完成解析后的 URL，包含查询参数和 hash 的完整路径。
6.$route.matched
一个数组，包含当前路由的所有嵌套路径片段的 路由记录 。路由记录就是 routes 配置数组中的对象副本（还有在 children 数组）。

http://blog.csdn.net/hsany330/article/details/53411937