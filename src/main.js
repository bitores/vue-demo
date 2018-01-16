// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// for store
import store from '@/vuex/store'
// fore axios
import axios from 'axios'
// fore i18n
import VueI18n from 'vue-i18n'

Vue.prototype.$http = axios;

Vue.config.productionTip = false

Vue.use(VueI18n)
const i18n = new VueI18n({
    // locale: 'zh-CN',
    locale:'en-US',
    // 语言切换
    //this.$i18n.locale 
    /*
	changeLanguage(){//语言切换
       if(this.$i18n.locale =='zh-CN'){
           this.$i18n.locale = 'en-US'
       }else{
           this.$i18n.locale = 'zh-CN'
       }
    }
    */
    // 语言字符串使用
    // {{$t("m.welcome")}}
    messages: {
        'zh-CN': require('./assets/js/lang/zh'),
        'en-US': require('./assets/js/lang/en')
    }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 使用 route
  store, // 使用 store
  i18n,
  template: '<App/>',
  components: { App }
})
