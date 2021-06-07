<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%; height: 100%"
      :header-cell-style="{'background-color': '#F0F3F5', 'color': '#66666', 'font-size': '14px', 'font-weight':'bold', 'text-align': 'center'}"
                :cell-style="{'text-align': 'center',  fontSize: '14px', color: '#666666'}">
      <el-table-column label="编码/名称">
        <template slot-scope="scope">
          <p>{{scope.row.name}}</p>
          <p>{{scope.row.code}}</p>
        </template>
      </el-table-column>
    
      <el-table-column prop="status" label="状态">
        <template slot-scope="scope">
          <span>{{scope.row.status}}</span>
          <span>{{scope.row.message}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="address" label="位置" width="250px"></el-table-column>
      <el-table-column prop="group" label="所属分组" width="250px"></el-table-column>
      <el-table-column prop="line" label="最后操作时间"></el-table-column>
      <el-table-column prop="name" label="操作" width="80px">
        <template>
          <span style="color: #00DDBB; cursor: pointer">详情</span>
        </template>
      </el-table-column>
    
    </el-table>

    <el-pagination background layout="prev,pager,next" :total="1000" style="margin-top: 40px; text-align: center"></el-pagination>
  
    <el-dialog title="新增设备" :visible.sync="addDialog" width="30%" :before-close="addDialog=false"></el-dialog>
  </div>
</template>

<script>
export default {
  name: 'tableInfo',
  mounted(){
    this.$emit.$on('addDevice', () => {
      console.log('addDevice')
    })
  },
  data(){
    return{
      addDialog: false,
      tableData: [
        {
          code: '4327221',
          name: '研发一部',
          status: '离线',
          message: '5月28日 09:37:25离线',
          address: '南山区深圳湾科技生态园6栋',
          group: '1区分厂',
          line: '2020.03.15 17:45'
        },
        {
          code: '4327221',
          name: '研发一部',
          status: '离线',
          message: '5月28日 09:37:25离线',
          address: '南山区深圳湾科技生态园6栋',
          group: '1区分厂',
          line: '2020.03.15 17:45'
        },
        {
          code: '4327221',
          name: '研发一部',
          status: '离线',
          message: '5月28日 09:37:25离线',
          address: '南山区深圳湾科技生态园6栋',
          group: '1区分厂',
          line: '2020.03.15 17:45'
        },
        {
          code: '4327221',
          name: '研发一部',
          status: '离线',
          message: '5月28日 09:37:25离线',
          address: '南山区深圳湾科技生态园6栋',
          group: '1区分厂',
          line: '2020.03.15 17:45'
        },
        {
          code: '4327221',
          name: '研发一部',
          status: '离线',
          message: '5月28日 09:37:25离线',
          address: '南山区深圳湾科技生态园6栋',
          group: '1区分厂',
          line: '2020.03.15 17:45'
        },
        {
          code: '4327221',
          name: '研发一部',
          status: '离线',
          message: '5月28日 09:37:25离线',
          address: '南山区深圳湾科技生态园6栋',
          group: '1区分厂',
          line: '2020.03.15 17:45'
        },
        {
          code: '4327221',
          name: '研发一部',
          status: '离线',
          message: '5月28日 09:37:25离线',
          address: '南山区深圳湾科技生态园6栋',
          group: '1区分厂',
          line: '2020.03.15 17:45'
        },
        {
          code: '4327221',
          name: '研发一部',
          status: '离线',
          message: '5月28日 09:37:25离线',
          address: '南山区深圳湾科技生态园6栋',
          group: '1区分厂',
          line: '2020.03.15 17:45'
        },
        {
          code: '4327221',
          name: '研发一部',
          status: '离线',
          message: '5月28日 09:37:25离线',
          address: '南山区深圳湾科技生态园6栋',
          group: '1区分厂',
          line: '2020.03.15 17:45'
        }
      ]
    }
  }

}
</script>

<style lang='scss' scoped>
</style>