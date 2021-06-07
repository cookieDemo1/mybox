<template>
  <div class="outer">
    <p class="title">最近30天报警类型排行</p>
    <div class="chart">
      <div class="left">
        <el-progress type="circle" :percentage="100" stroke-width="10" color="#1980FF" format="1"></el-progress>
      </div>
      <div class="right">
        <el-progress type="circle" :percentage="100" stroke-width="10" color="#00DDBB" format="2"></el-progress>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bottomLeftChart',

  mounted(){
  },

  methods: {
    
  }

}
</script>

<style lang='scss' scoped>
  .outer{
    height: 100%;
    background-color: #FFFFFF;
    border-radius: 8px;
    padding: 20px 30px 30px 20px;
    display: flex;
    flex-direction: column;
  }

  .title{
    height: 17px;
    margin-bottom: 20px;
    font-size: 16px;
    color: #333;
    font-weight: bold;
  }

  .chart{
    flex: 1;
    /* background-color: slateblue; */
    display: flex;
    /* text-align: center; */
    .left{
      flex: 1;
      /* background-color: springgreen; */
      display: flex;
      align-items: center;
      justify-items: center;
    }

    .right{
      flex: 1;
      display: flex;
      align-items: center;
      justify-items: center;
      /* background-color: teal; */
    }
  }
</style>