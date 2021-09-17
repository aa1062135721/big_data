import Vue from 'vue'
import App from './App.vue'
import router from './router'
import dayjs from 'dayjs'
import './assets/style.scss'
import './utils/rem'

Vue.prototype.dayjs = dayjs
Vue.config.productionTip = false

router.beforeEach((to, name, next) => {
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
