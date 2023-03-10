<template>
  <div class="user-manage-container">
    <el-card class="header">
      <div>
        <el-button type="primary"> {{ $t('msg.excel.importExcel') }}</el-button>
        <el-button type="success">
          {{ $t('msg.excel.exportExcel') }}
        </el-button>
      </div>
    </el-card>
    <el-card>
      <el-table :data="list" border style="width: 100%">
        <el-table-column label="#" type="index" />
        <el-table-column prop="username" :label="$t('msg.excel.name')">
        </el-table-column>
        <!-- 手机 -->
        <el-table-column prop="mobile" :label="$t('msg.excel.mobile')">
        </el-table-column>
        <!-- 头像 -->
        <el-table-column :label="$t('msg.excel.avatar')" align="center">
          <template v-slot="{ row }">
            <img class="avatar" v-lazy:src="row.staffPhoto" alt="" srcset="">
            <!-- <el-image class="avatar" :onerror="img" :src="row.staffPhoto" :preview-src-list="[row.staffPhoto]"> -->
            <!-- </el-image> -->
          </template>

        </el-table-column>
        <!-- 标签 -->
        <el-table-column :label="$t('msg.excel.role')">
          <template #default="{ row }">
            <div v-if="row.role && row.role.length > 0">
              <el-tag v-for="item in row.role" :key="item.id" size="small">{{
                item.title
              }}</el-tag>
            </div>
            <div v-else>
              <el-tag size="small">{{ $t('msg.excel.defaultRole') }}</el-tag>
            </div>
          </template>
        </el-table-column>
        <!-- 时间 -->
        <el-table-column :label="$t('msg.excel.openTime')">
          <template v-slot="{ row }">
            <span>{{ fillteTime(row.timeOfEntry) }}</span>
          </template>
        </el-table-column>
        <!-- 查看、角色、删除 -->
        <el-table-column :label="$t('msg.excel.action')" fixed="right" width="260">
          <template #default>
            <el-button type="primary" size="small">{{
              $t('msg.excel.show')
            }}</el-button>
            <el-button type="info" size="small">{{
              $t('msg.excel.showRole')
            }}</el-button>
            <el-button type="danger" size="small">{{
              $t('msg.excel.remove')
            }}</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination class="pagination" @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page="page.page" :page-sizes="[2, 5, 10, 20]" :page-size="page.size"
        layout="total, sizes, prev, pager, next, jumper" :total="page.total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { getEmployeeList } from '@/api/user-manage'

const page = ref({
  page: 1, // 当前页码
  size: 5,
  total: 0 // 总数
})
const list = ref([])
const getUserMessageList = async () => {
  const { total, rows } = await getEmployeeList({
    page: page.value.page,
    size: page.value.size
  })
  page.value.total = total
  list.value = rows

}
getUserMessageList()
// 时间处理
const fillteTime = (time) => {
  return new Date(time).toLocaleDateString()
}


const handleSizeChange = () => { }
</script>

<style lang="scss" scoped>
.avatar {
  border-radius: 50%;
}

.user-manage-container {
  .header {
    margin-bottom: 22px;
    text-align: right;
  }

  ::v-deep .avatar {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  ::v-deep .el-tag {
    margin-right: 6px;
  }

  .pagination {
    margin-top: 20px;
    text-align: center;
  }
}
</style>
