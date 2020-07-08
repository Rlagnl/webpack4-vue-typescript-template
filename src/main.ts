// 引入样式文件，用于清除浏览器默认样式
import './assets/css/cssreset-min.css'
import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false
const _vue = new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

window.$Vm = _vue
export default _vue
