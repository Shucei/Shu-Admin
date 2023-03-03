<template>
  <el-menu :default-active="activeMenu" :background-color="$store.getters.cssVar.menuBg"
    :text-color="$store.getters.cssVar.menuText" :active-text-color="$store.getters.cssVar.menuActiveText"
    :unique-opened="true" router>
    <SidebarItem v-for="item in routes" :key="item.path" :route="item"></SidebarItem>
  </el-menu>

</template>

<script  setup>
import { useRouter } from 'vue-router';
import { filterRouters, generateMenus } from '@/utils/route'
import SidebarItem from './Sidebaritem.vue'
const router = useRouter()

const routes = computed(() => {
  const filterRoutes = filterRouters(router.getRoutes())
  return generateMenus(filterRoutes)
})
// 计算高亮 menu 的方法
const route = useRoute()
const activeMenu = computed(() => {
  const { path } = route
  return path
})
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
