<template>
  <div class="real">
    <div class="operation">
      <el-input style="width: 200px; height: 36px" placeholder="填写名称或编码"></el-input>
    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%; height: 100%"
      :header-cell-style="{'background-color': '#F0F3F5', 'color': '#66666', 'font-size': '14px', 'font-weight':'bold', 'text-align': 'center'}"
                :cell-style="{'text-align': 'center',  fontSize: '14px', color: '#666666'}">

      <el-table-column prop="value" label="位置"></el-table-column>
      <el-table-column prop="code" label="设备编码"></el-table-column>
      <el-table-column prop="person" label="报警通知人"></el-table-column>
      <el-table-column prop="time" label="报警时间"></el-table-column>
      <el-table-column prop="recovery" label="恢复时间"></el-table-column>
      <el-table-column prop="status" label="状态"></el-table-column>
    
      <el-table-column prop="time" label="操作" width="200px">
        <template>
          <span style="color: #00DDBB; cursor: pointer; margin-right: 30px">确认报警</span>
          <span style="color: #00DDBB; cursor: pointer">查看详情</span>
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
  name: 'realTimepolice',
  data(){
    return {
      tableData: [
        {
          value: '温度大于38℃',
          code: '15341234',
          person: 'Hale(184563224556)',
          time: '2020.03.15 17:45',
          recovery: '2020.03.15 17:45',
          status: '恢复',
        },
        {
          value: '温度大于38℃',
          code: '15341234',
          person: 'Hale(184563224556)',
          time: '2020.03.15 17:45',
          recovery: '2020.03.15 17:45',
          status: '恢复',
        },{
          value: '温度大于38℃',
          code: '15341234',
          person: 'Hale(184563224556)',
          time: '2020.03.15 17:45',
          recovery: '2020.03.15 17:45',
          status: '恢复',
        },{
          value: '温度大于38℃',
          code: '15341234',
          person: 'Hale(184563224556)',
          time: '2020.03.15 17:45',
          recovery: '2020.03.15 17:45',
          status: '恢复',
        },{
          value: '温度大于38℃',
          code: '15341234',
          person: 'Hale(184563224556)',
          time: '2020.03.15 17:45',
          recovery: '2020.03.15 17:45',
          status: '恢复',
        },{
          value: '温度大于38℃',
          code: '15341234',
          person: 'Hale(184563224556)',
          time: '2020.03.15 17:45',
          recovery: '2020.03.15 17:45',
          status: '恢复',
        },{
          value: '温度大于38℃',
          code: '15341234',
          person: 'Hale(184563224556)',
          time: '2020.03.15 17:45',
          recovery: '2020.03.15 17:45',
          status: '恢复',
        },
        
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  .real{
    min-height: calc(100% - 40px);
    background-color: #FFF;
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    
  }

  .operation{
    margin-top: 10px;
    height: 36px;
  }

  .table{
    margin-top: 20px;
    flex: 1;
    background-color: teal;
  }

  .footer{
    margin-top: 40px;
    height: 40px;
  }
</style>