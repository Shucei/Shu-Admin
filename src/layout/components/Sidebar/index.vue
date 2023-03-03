<template>
  <div class="">
    <div class="logo-container">
      <SvgIcon icon="logo" :style="changeMargin"></SvgIcon>
      <transition>
        <h1 class="logo-title" v-if="$store.getters.sidebarOpened">
          Shu-Admin
        </h1>
      </transition>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>

  </div>
</template>

<script setup>
import { watch } from 'vue';
import { useStore } from 'vuex';
import SidebarMenu from './SidebarMenu'
const store = useStore()
const margin = {
  margin: 'auto'
}
const nomarin = {
  margin: 'none'
}

watch(store.getters.sidebarOpened, () => {
  store.getters.sidebarOpened ? nomarin : margin
})
</script>

<style lang="scss" scoped>
.logo-container {
  height: 50px;
  // padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .logo-title {
    color: #fff;
    font-weight: 600;
    // line-height: 50px;
    font-size: 20px;
    white-space: nowrap;
  }

  .svg-icon {
    width: 25px;
    height: 50px;
  }
}
</style>
