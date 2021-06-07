<template>
  <div class="root">
    <div class="operation">
      <el-input style="width: 200px; height: 36px" v-model="nameOrPhone" placeholder="请输入姓名或手机号搜索"></el-input>
      <button class="addition">新增管理员</button>
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
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="phone" label="手机号"></el-table-column>
        <el-table-column label="权限">
          <template slot-scope="scope">
            <span style="color: #00DDBB" v-if="scope.row.auth == 1">超级管理员</span>
            <span style="color: #00DDBB" v-if="scope.row.auth == 2">普通管理员</span>
          </template>
        </el-table-column>
        <el-table-column prop="creater" label="创建人"></el-table-column>
        <el-table-column prop="createTime" label="创建时间"></el-table-column>
        <el-table-column prop="time" label="操作" width="200px">
          <template>
            <span style="color: #FF5B67; cursor: pointer; margin-right: 30px">删除</span>
            <span style="color: #00DDBB; cursor: pointer; margin-right: 30px">修改</span>
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
  name: 'authManage',
  data(){
    return{
      nameOrphone: '',
      tableData: [
        {
          name: '张三',
          phone: '13232634775',
          auth: '1',
          creater: 'Hadoop',
          createTime: '2020.03.15 17:45',
        },
        {
          name: '李四',
          phone: '13232634775',
          auth: '2',
          creater: 'Flask',
          createTime: '2020.03.15 17:45',
        },
        {
          name: '张三',
          phone: '13232634775',
          auth: '1',
          creater: 'Hadoop',
          createTime: '2020.03.15 17:45',
        },
        {
          name: '王五',
          phone: '13232634775',
          auth: '2',
          creater: 'Spark',
          createTime: '2020.03.15 17:45',
        },
        {
          name: 'VeryGood',
          phone: '13232634775',
          auth: '1',
          creater: 'Chunk',
          createTime: '2020.03.15 17:45',
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