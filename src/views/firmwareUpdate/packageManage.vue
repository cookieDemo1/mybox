<template>
  <div class="update">
    <div class="operation">
      <el-select v-model="version" style="margin-left: 20px">
        <el-option value="0" label="全部版本号"></el-option>
        <el-option value="1" label="release 0.1"></el-option>
        <el-option value="2" label="release 0.2"></el-option>
      </el-select>

      <button class="btn">上传固件</button>
    </div>

    <div class="table">
      <el-table :data="tableData" style="width: 100%; height: 100%"
        :header-cell-style="{'background-color': '#F0F3F5', 'color': '#66666', 'font-size': '14px', 'font-weight':'bold', 'text-align': 'center'}"
        :cell-style="{'text-align': 'center',  fontSize: '14px', color: '#666666'}" @selection-change="handleSelectionChange">
        <el-table-column label="序号">
          <template slot-scope="scope"> 
            <span>{{scope.$index}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="设备类型"></el-table-column>
        <el-table-column prop="version" label="固件版本号"></el-table-column>
        <el-table-column prop="publishTime" label="发布时间"></el-table-column>
        <el-table-column prop="remark" label="备注"></el-table-column>
        <el-table-column label="操作">
          <template>
            <span style="color: #FF5B67; cursor: pointer">删除</span>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="footer">
      <el-pagination background layout="prev,pager,next" :total="1000" style="text-align: center"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'packageManage',
  data(){
    return{
      version: '0',
      selected: [],
      tableData: [
        {
          type: 'fbox',
          version: '1.3.0',
          publishTime: '2020.03.15 17:45',
          remark: 'Test'
        },
        {
          type: 'fbox',
          version: '1.3.0',
          publishTime: '2020.03.15 17:45',
          remark: 'Test'
        },
        {
          type: 'fbox',
          version: '1.3.0',
          publishTime: '2020.03.15 17:45',
          remark: 'Test'
        },
        {
          type: 'fbox',
          version: '1.3.0',
          publishTime: '2020.03.15 17:45',
          remark: 'Test'
        },
        {
          type: 'fbox',
          version: '1.3.0',
          publishTime: '2020.03.15 17:45',
          remark: 'Test'
        },
        {
          type: 'fbox',
          version: '1.3.0',
          publishTime: '2020.03.15 17:45',
          remark: 'Test'
        },
        {
          type: 'fbox',
          version: '1.3.0',
          publishTime: '2020.03.15 17:45',
          remark: 'Test'
        },
        
      ]
    }
  },
}
</script>

<style lang='scss' scoped>
  .update{
    height: 100%;
    background-color: #FFF;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 30px 20px 20px 20px;
    display: flex;
    flex-direction: column;
  }

  .operation{
    height: 36px;
    .btn{
      width: 100px;
      height: 36px;
      background-color: #00DDBB;
      font-size: 14px;
      color: #FFF;
      float: right;
      border: none;
      outline: none;
      cursor: pointer;
      border-radius: 4px;
      &:hover{
        opacity: .7;
      }
    }
    
  }


  .table{
    flex: 1;
    background-color: aquamarine;
    margin-top: 20px;
  }

  .footer{
    margin-top: 40px;
    height: 40px;
  }
</style>