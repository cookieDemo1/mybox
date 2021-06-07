<template>
  <div class="root">
    <div class="operation">
      <el-input style="width: 200px; height: 36px" v-model="nameOrPhone" placeholder="填写操作人搜索"></el-input>
      <el-select v-model="mode" style="margin-left: 20px">
        <el-option value="0" label="全部模块"></el-option>
        <el-option value="1" label="模块1"></el-option>
        <el-option value="2" label="模块2"></el-option>
        <el-option value="3" label="模块3"></el-option>
      </el-select>

      <el-date-picker style="margin-left: 20px"
        v-model="date"
        type="datetimerange"
        range-separator="至"
        start-placeholde="开始日期"
        end-placeholde="结束日期">
      </el-date-picker>


    </div>
    <div class="table">
      <el-table :data="tableData" style="width: 100%; height: 100%"
        :header-cell-style="{'background-color': '#F0F3F5', 'color': '#66666', 'font-size': '14px', 'font-weight':'bold', 'text-align': 'center'}"
                  :cell-style="{'text-align': 'center',  fontSize: '14px', color: '#666666'}">
        <el-table-column label="序号">
          <template slot-scope="scope">
            {{scope.$index+1}}
          </template>
        </el-table-column>
        <el-table-column prop="name" label="操作人"></el-table-column>
        <el-table-column prop="content" label="内容"></el-table-column>
        <el-table-column prop="result" label="结果"></el-table-column>
        <el-table-column prop="module" label="模块"></el-table-column>
        <el-table-column prop="ip" label="访问IP"></el-table-column>
        <el-table-column prop="time" label="时间"></el-table-column>
      </el-table>
    </div>

    <div class="footer">
      <el-pagination background layout="prev,pager,next" :total="1000" style="text-align: center"></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: 'authManage',
  data(){
    return{
      nameOrphone: '',
      mode: '1',
      date: '',
      tableData: [
        {
          name: '张三',
          content: '登陆系统',
          result: '成功',
          module: '登陆管理',
          ip: '192.168.1.254',
          time: '2020.03.15 17:45',
        },
        {
          name: '张三',
          content: '登陆系统',
          result: '成功',
          module: '登陆管理',
          ip: '192.168.1.254',
          time: '2020.03.15 17:45',
        },
        {
          name: '张三',
          content: '登陆系统',
          result: '成功',
          module: '登陆管理',
          ip: '192.168.1.254',
          time: '2020.03.15 17:45',
        },
        {
          name: '张三',
          content: '登陆系统',
          result: '成功',
          module: '登陆管理',
          ip: '192.168.1.254',
          time: '2020.03.15 17:45',
        },
        {
          name: '张三',
          content: '登陆系统',
          result: '成功',
          module: '登陆管理',
          ip: '192.168.1.254',
          time: '2020.03.15 17:45',
        },
        
      ]
    }
  }
}
</script>

<style lang='scss' scoped>
  .root{
    height: calc(100% - 40px);
    /* width: 100%; */
    margin: 20px 30px;
    background-color: #FFFFFF;
    border-radius: 8px;
    /* display: flex; */
    /* background-color: skyblue; */
    /* flex-direction: column; */

    padding: 30px 20px 20px 20px;

    display: flex;
    flex-direction: column;
    
  }

  .operation{
    height: 36px;
  }

  .addition{
    float: right;
    width: 100px;
    height: 36px;
    background-color: #00DDBB;
    color: #FFFFFF;
    font-size: 14px;
    outline: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
      opacity: .7;
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