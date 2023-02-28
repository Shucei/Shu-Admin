<template>
  <el-form>
    <el-form-item prop="username">
      <el-input placeholder="用户名：admin / user">
        <template #prefix>
          <el-icon class="el-input__icon">
            <User />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item prop="password">
      <el-input type="password" placeholder="密码：123456" show-password autocomplete="new-password">
        <template #prefix>
          <el-icon class="el-input__icon">
            <Lock />
          </el-icon>
        </template>
      </el-input>
    </el-form-item>

    <el-form-item class="bnt-flex">
      <el-button :icon="CircleClose" round size="large">重置</el-button>
      <el-button :icon="UserFilled" round size="large" type="primary" :loading="loading">
        登录
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { CircleClose, UserFilled, Lock, User } from "@element-plus/icons-vue";
</script>

<style lang="scss" scoped></style>