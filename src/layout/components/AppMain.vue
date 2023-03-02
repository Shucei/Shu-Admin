<template>
  <div class="app-main">
    main
    <!-- <router-view>
      <transition name="fade-transform" mode="out-in">
        <keep-alive>
          <component :is="" :key="route.path" />
        </keep-alive>
      </transition>
    </router-view> -->
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 50px - 43px);
  width: 100%;
  position: relative;
  overflow: hidden;
  padding: 104px 20px 20px 20px;
  box-sizing: border-box;
}
</style>
