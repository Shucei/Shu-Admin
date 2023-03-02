<template>
  <div class="">
    <div class="logo-container">
      <SvgIcon icon="logo" class=""></SvgIcon>
      <h1 class="logo-title">
        Shu-Admin
      </h1>
    </div>
    <el-scrollbar>
      <sidebar-menu></sidebar-menu>
    </el-scrollbar>

  </div>
</template>

<script setup>
import SidebarMenu from './SidebarMenu'
import { } from 'vue'

const logoHeight = 30
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
