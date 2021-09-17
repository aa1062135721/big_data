import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
  
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: '/allScenicSpot',
    children: [
      { // 景区概览
        path: '/allScenicSpot', 
        name: 'allScenicSpot',
        component: resolve => require(['../views/allScenicSpot.vue'], resolve),
        meta: {
          title: '景区概览'
        }
      },
      { // 票务分析
        path: '/sellTicket',
        name: 'sellTicket',
        component: resolve => require(['../views/sellTicket.vue'], resolve),
        meta: {
          title: '票务分析'
        }
      },
      { // 客流分析
        path: '/passengerFlow',
        name: 'passengerFlow',
        component: resolve => require(['../views/passengerFlow.vue'], resolve),
        meta: {
          title: '客流分析'
        }
      },
      { // 巡检分析
        path: '/patrolAnalysis',
        name: 'patrolAnalysis',
        component: resolve => require(['../views/patrolAnalysis'], resolve),
        meta: {
          title: '巡检分析'
        }
      },
      { // 车位分析
        path: '/parkingLot',
        name: 'parkingLot',
        component: resolve => require(['../views/parkingLot'], resolve),
        meta: {
          title: '车位分析'
        }
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
