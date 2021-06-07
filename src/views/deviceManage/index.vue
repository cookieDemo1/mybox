<template>
  <div class="root">
    <div class="menu">
      <span :class="['item', {'active': active==1}]" @click="setActive(1)">设备看板</span>
      <span :class="['item', {'active': active==2}]" @click="setActive(2)">设备列表</span>
      <span :class="['item', {'active': active==3}]" @click="setActive(3)">分组管理</span>
    </div>
    <template v-if="active == 1">
      <deviceBoard class="sub"></deviceBoard>
    </template>
    <template v-else-if="active == 2">
      <deviceTable class="sub"></deviceTable>
    </template>
    <template v-else-if="active == 3">
      <deviceGroup class="sub"></deviceGroup>
    </template>

  </div>

</template>

<script>
import deviceBoard from './deviceBoard'
import deviceTable from './deviceTable'
import deviceGroup from './deviceGroup'
export default {
  name: 'deviceManage',
  components: {deviceBoard, deviceGroup, deviceTable},
  created(){
    this.active = localStorage.getItem('active')
  },
  data(){
    return{
      active: 1
    }
  },

  methods: {
    setActive(num){
      this.active = num
      localStorage.setItem('active', num)
    }
  }
}
</script>

<style lang='scss' scoped>
  .root{
    height: calc(100% - 40px);
    /* width: 100%; */
    margin: 20px 30px;
    display: flex;
    /* background-color: skyblue; */
    flex-direction: column;
    
  }

  .menu{

    .active{
      background-color: #FFFFFF !important;
      color: #00D9DB !important;
      font-weight: bold !important;
    }
    
    .item{
      display: inline-block;
      width: 100px;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-size: 14px;
      cursor: pointer;
      user-select: none;
      background-color: #E8E8E8;
      
      
      &:hover{
        background-color: #FFFFFF;
        color: #00D9DB;
        font-weight: bold;
      }

      &:first-child{
        border-top-left-radius: 8px;
      }

      &:last-child{
        border-top-right-radius: 8px;
      }
    }

    /* .sub{
      height: calc(100% - 40px);
    } */
  }
</style>