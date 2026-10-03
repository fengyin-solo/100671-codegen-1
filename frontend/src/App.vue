<template>
  <div class="app-shell">
    <aside class="app-side">
      <h1 class="app-title">石化炼化装置检维修作业管理平台</h1>
      <nav class="nav-list">
        <RouterLink v-for="item in navItems" :key="item.path" :to="item.path" class="nav-item">
          {{ item.label }}
        </RouterLink>
      </nav>
    </aside>
    <main class="app-main">
      <header class="app-head">
        <span class="head-desc">面向生产装置台账、压力容器、换热器、塔器、反应器、机泵机组、离心压缩机、工艺管道、阀门与法兰、安全阀校验、动火作业许可、受限空间作业、盲板抽堵、高处作业、检修计划、开停工方案、防腐保温与工艺参数监控的一体化石化装置检维修作业工作台。</span>
        <span class="head-user">当前值班：{{ store.operator }} · {{ store.shiftLabel }}</span>
      </header>
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useSessionStore } from '@/stores/session'

const store = useSessionStore()

const navItems = [{ label: "运营概览", path: "/" }, { label: "生产装置台账", path: "/unit" }, { label: "压力容器", path: "/vessel" }, { label: "换热器", path: "/exchanger" }, { label: "塔器", path: "/tower" }, { label: "反应器", path: "/reactor" }, { label: "机泵机组", path: "/pump" }, { label: "离心压缩机", path: "/compressor" }, { label: "工艺管道", path: "/pipeline" }, { label: "阀门与法兰", path: "/valveflange" }, { label: "安全阀校验", path: "/safetyvalve" }, { label: "动火作业许可", path: "/hotwork" }, { label: "受限空间作业", path: "/confined" }, { label: "盲板抽堵", path: "/blind" }, { label: "高处作业", path: "/highwork" }, { label: "检修计划", path: "/plan" }, { label: "开停工方案", path: "/shutdown" }, { label: "防腐保温", path: "/anticorr" }, { label: "工艺参数监控", path: "/process" }]
</script>
