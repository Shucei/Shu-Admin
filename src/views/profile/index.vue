<template>
  <div class="my-container">
    <el-row>
      <el-col :span="8">
        <project-card class="user-card"></project-card>
      </el-col>
      <el-col :span="15">
        <el-card>
          <el-tabs v-model="activeName">
            <el-tab-pane :label="$t('msg.profile.information')" name="information">
              <Information />
            </el-tab-pane>
            <el-tab-pane :label="$t('msg.profile.account')" name="account">
              <Account />
            </el-tab-pane>
          </el-tabs>
        </el-card>

      </el-col>
    </el-row>

  </div>
</template>

<script setup>
import ProjectCard from './components/ProjectCard.vue'
import Information from './components/information.vue'
import Account from './components/Account.vue'
import { ref } from 'vue'
const activeName = ref('feature')
</script>

<style lang="scss" scoped>
.my-container {
  .user-card {
    margin-right: 20px;
  }
}
</style>
