<template>
  <div class="operation">
    <el-input placeholder="请填写名称或编码" class="input" v-model="nameOrCode"></el-input>
    <button>新增分组</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
      nameOrCode: '',
    }    
  }
}
</script>

<style scoped lang='scss'>
  .operation{
    /* width: 100%; */
    height: 100%;
  }

  .input{
    width: 200px;
    /* border: 1px solid #E8EBEB; */
    /* height: 36px !important; */
  }

  >>> .el-input__inner{
    height: 36px !important;
  }

  button{
    width: 100px;
    height: 36px;
    font-size: 14px;
    background-color: #00DDBB;
    color: #FFFFFF;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    float: right;

    &:hover{
      opacity: .7;
    }
  }

</style>