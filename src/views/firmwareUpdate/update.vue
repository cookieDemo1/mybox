<template>
  <div class="update">
    <div class="operation">
      <el-input style="width: 200px; height: 36px" placeholder="填写编码搜索"></el-input>
      <el-select v-model="group" style="margin-left: 20px">
        <el-option value="0" label="全部分组"></el-option>
        <el-option value="1" label="研发分组1"></el-option>
        <el-option value="2" label="研发分组2"></el-option>
      </el-select>
      <el-select v-model="status" style="margin-left: 20px">
        <el-option value="0" label="全部状态"></el-option>
        <el-option value="1" label="无限火力状态"></el-option>
        <el-option value="2" label="大乱斗状态"></el-option>
      </el-select>
      <button class="btn">升级固件</button>
    </div>

    <div class="table">
      <el-table :data="tableData" style="width: 100%; height: 100%"
        :header-cell-style="{'background-color': '#F0F3F5', 'color': '#66666', 'font-size': '14px', 'font-weight':'bold', 'text-align': 'center'}"
        :cell-style="{'text-align': 'center',  fontSize: '14px', color: '#666666'}" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column prop="name" label="设备名称"></el-table-column>
        <el-table-column prop="code" label="设备编号"></el-table-column>
        <el-table-column prop="version" label="设备版本号"></el-table-column>
        <el-table-column prop="firmwareVersion" label="最新固件版本"></el-table-column>
        <el-table-column prop="publishTime" label="发布时间"></el-table-column>
        <el-table-column label="操作">
          <template>
            <span style="color: #00DDBB; cursor: pointer">升级固件</span>
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
  name: 'update',
  data(){
    return{
      group: '0',
      status: '0',
      selected: [],
      tableData: [
        {
          name: '研发一部',
          code: '57192343',
          version: '1.3.0',
          firmwareVersion: '0.2.4',
          publishTime: '2020.03.15 17:45',
        },
        {
          name: '研发一部',
          code: '57192343',
          version: '1.3.0',
          firmwareVersion: '0.2.4',
          publishTime: '2020.03.15 17:45',
        },
        {
          name: '研发一部',
          code: '57192343',
          version: '1.3.0',
          firmwareVersion: '0.2.4',
          publishTime: '2020.03.15 17:45',
        },
        {
          name: '研发一部',
          code: '57192343',
          version: '1.3.0',
          firmwareVersion: '0.2.4',
          publishTime: '2020.03.15 17:45',
        },
        {
          name: '研发一部',
          code: '57192343',
          version: '1.3.0',
          firmwareVersion: '0.2.4',
          publishTime: '2020.03.15 17:45',
        },
        {
          name: '研发一部',
          code: '57192343',
          version: '1.3.0',
          firmwareVersion: '0.2.4',
          publishTime: '2020.03.15 17:45',
        },
        {
          name: '研发一部',
          code: '57192343',
          version: '1.3.0',
          firmwareVersion: '0.2.4',
          publishTime: '2020.03.15 17:45',
        },
        
      ]
    }
  },
  methods: {
    handleSelectionChange(val){
      this.selected = []
      val.forEach(item => {
        this.selected.push(item.code)
      })
      console.log(this.selected)
    }
  },

  watch: {
    selected(newVal, oldVale){
      console.log('selected改变')
    }
  }
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