<template>
  <div>
    <el-form ref="formRef" :model="LoginForm" :rules="loginRules">
      <el-form-item prop="username">
        <el-input placeholder="用户名：admin / user" v-model="LoginForm.username">
          <template #prefix>
            <el-icon class="el-input__icon">
              <User />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input type="password" placeholder="密码：123456" show-password autocomplete="new-password"
          v-model="LoginForm.password">
          <template #prefix>
            <el-icon class="el-input__icon">
              <Lock />
            </el-icon>
          </template>
        </el-input>
      </el-form-item>

      <el-form-item class="bnt-flex">
        <el-button :icon="CircleClose" round size="large" @click="resetForm(formRef)">重置</el-button>
        <el-button :icon="UserFilled" round size="large" type="primary" :loading="loading" @click="handerLogin">
          登录
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { validatePassword } from "@/utils/rules";
import { CircleClose, UserFilled, Lock, User, Message } from "@element-plus/icons-vue";
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

const formRef = ref(null)
// 数据源
const LoginForm = ref({
  username: '13800000002',
  password: '123456'
})
// 验证规则
const loginRules = reactive({
  username: [
    { required: true, message: '用户名为必填项', trigger: 'blur' },
    { min: 3, max: 11, message: 'Length should be 3 to 11', trigger: 'blur' },
  ],
  password: [
    {
      required: true,
      trigger: 'blur',
      validator: validatePassword()
    },
  ]
})

// 重置
const resetForm = (formEl) => {
  if (!formEl) return
  formRef.value.resetFields()
}

// 处理登录
const loading = ref(false)
const store = useStore()
const router = useRouter()
const handerLogin = () => {
  // 表单校验
  formRef.value.validate(async valid => {
    if (valid) {
      try {
        loading.value = true
        await store.dispatch('user/login', LoginForm.value)
        ElMessage({
          message: '登录成功',
          type: "success",
          duration: 1500,
        });
        router.push('/')
      } catch (error) {
        console.log(error)
      } finally {
        // 不论成功还是失败都要关闭转圈
        loading.value = false
      }
    }
  })
}
</script>

<style lang="scss" scoped>

</style>
