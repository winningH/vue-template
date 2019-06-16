import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入通用样式
import '@/assets/styles/common.scss'

// 引入ui库 iview
import iview from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iview)

console.log(process.env.NODE_ENV)
console.log(process.env.VUE_APP_TITLE)
console.log(process.env.VUE_APP_URL)

Vue.config.productionTip = false

// 中央事件总线，用于兄弟组件通信
window.eventHub = new Vue() 

// 引入全局注册的组件
import MyComponents from 'comp'
Vue.use(MyComponents)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
