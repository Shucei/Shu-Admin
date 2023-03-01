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

// 数据源
const LoginForm = reactive({
  username: 'admin',
  password: '123456'
})
// 验证规则
const rules = reactive({
  username: [
    { required: true, message: '用户名为必填项', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ]
})

</script>

<style lang="scss" scoped></style>