import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from '@/views/Dashboard.vue'
const Unit = () => import('@/views/unit/index.vue')
const Vessel = () => import('@/views/vessel/index.vue')
const Exchanger = () => import('@/views/exchanger/index.vue')
const Tower = () => import('@/views/tower/index.vue')
const Reactor = () => import('@/views/reactor/index.vue')
const Pump = () => import('@/views/pump/index.vue')
const Compressor = () => import('@/views/compressor/index.vue')
const Pipeline = () => import('@/views/pipeline/index.vue')
const Valveflange = () => import('@/views/valveflange/index.vue')
const Safetyvalve = () => import('@/views/safetyvalve/index.vue')
const Hotwork = () => import('@/views/hotwork/index.vue')
const Confined = () => import('@/views/confined/index.vue')
const Blind = () => import('@/views/blind/index.vue')
const Highwork = () => import('@/views/highwork/index.vue')
const Plan = () => import('@/views/plan/index.vue')
const Shutdown = () => import('@/views/shutdown/index.vue')
const Anticorr = () => import('@/views/anticorr/index.vue')
const Process = () => import('@/views/process/index.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'dashboard', component: Dashboard },
    { path: '/unit', name: 'unit', component: Unit },
    { path: '/vessel', name: 'vessel', component: Vessel },
    { path: '/exchanger', name: 'exchanger', component: Exchanger },
    { path: '/tower', name: 'tower', component: Tower },
    { path: '/reactor', name: 'reactor', component: Reactor },
    { path: '/pump', name: 'pump', component: Pump },
    { path: '/compressor', name: 'compressor', component: Compressor },
    { path: '/pipeline', name: 'pipeline', component: Pipeline },
    { path: '/valveflange', name: 'valveflange', component: Valveflange },
    { path: '/safetyvalve', name: 'safetyvalve', component: Safetyvalve },
    { path: '/hotwork', name: 'hotwork', component: Hotwork },
    { path: '/confined', name: 'confined', component: Confined },
    { path: '/blind', name: 'blind', component: Blind },
    { path: '/highwork', name: 'highwork', component: Highwork },
    { path: '/plan', name: 'plan', component: Plan },
    { path: '/shutdown', name: 'shutdown', component: Shutdown },
    { path: '/anticorr', name: 'anticorr', component: Anticorr },
    { path: '/process', name: 'process', component: Process },
  ],
})

export default router
