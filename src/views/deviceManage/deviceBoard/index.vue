<template>
  <div class="board">
    <div class="box-info">
      <boxInfo></boxInfo>
    </div>

    <div class="devices">
      <div class="list">
        <boxList1 title="最近查看的传输箱" :list="list1"></boxList1>
      </div>
      <div class="list">
        <boxList2 title="离线和异常的传输箱" :list="list2"></boxList2>

      </div>
      <div class="list">
        <boxList3 title="最近添加的传输箱" :list="list3"></boxList3>

      </div>
    </div>
  </div>
</template>

<script>
import boxInfo from './boxInfo'
import boxList1 from './boxList1'
import boxList2 from './boxList2'

import boxList3 from './boxList3'

export default {
  name: 'deviceBoard',
  components: {boxInfo, boxList1, boxList2, boxList3},

  data(){
    return{
      list1: [
        {name: '研发一部', id: '126545621', status: 1},
        {name: '研发二部', id: '126545621', status: 1},
        {name: '研发三部', id: '126545621', status: 2},
        {name: '研发四部', id: '126545621', status: 2},
        {name: '研发五部', id: '126545621', status: 2},
        {name: '研发六部', id: '126545621', status: 1},
        {name: '研发七部', id: '126545621', status: 3},
        {name: '研发八部', id: '126545621', status: 3},
        {name: '研发九部', id: '126545621', status: 3},
        {name: '研发十部', id: '126545621', status: 1},
      ],

      list2: [
        {name: '研发一部', id: '126545621', status: 1, time_status: '离线时间', time: '5月8日 15:56:23'},
        {name: '研发二部', id: '126545621', status: 1, time_status: '离线时间', time: '5月8日 15:56:23'},
        {name: '研发三部', id: '126545621', status: 2, time_status: '离线时间', time: '5月8日 15:56:23'},
        {name: '研发四部', id: '126545621', status: 2, time_status: '离线时间', time: '5月8日 15:56:23'},
        {name: '研发五部', id: '126545621', status: 2, time_status: '离线时间', time: '5月8日 15:56:23'},
        {name: '研发六部', id: '126545621', status: 2, time_status: '离线时间', time: '5月8日 15:56:23'},
        {name: '研发七部', id: '126545621', status: 1, time_status: '离线时间', time: '5月8日 15:56:23'},
        {name: '研发八部', id: '126545621', status: 3, time_status: '离线时间', time: '5月8日 15:56:23'},
        {name: '研发九部', id: '126545621', status: 3, time_status: '离线时间', time: '5月8日 15:56:23'},
        {name: '研发十部', id: '126545621', status: 3, time_status: '离线时间', time: '5月8日 15:56:23'},
      ],

      list3: [
        {name: '研发一部', id: '126545621', status: 1, time_status: '添加时间', time: '5月8日 15:56:23'},
        {name: '研发二部', id: '126545621', status: 1, time_status: '添加时间', time: '5月8日 15:56:23'},
        {name: '研发三部', id: '126545621', status: 2, time_status: '添加时间', time: '5月8日 15:56:23'},
        {name: '研发四部', id: '126545621', status: 3, time_status: '添加时间', time: '5月8日 15:56:23'},
        {name: '研发五部', id: '126545621', status: 3, time_status: '添加时间', time: '5月8日 15:56:23'},
        {name: '研发六部', id: '126545621', status: 1, time_status: '添加时间', time: '5月8日 15:56:23'},
        {name: '研发七部', id: '126545621', status: 3, time_status: '添加时间', time: '5月8日 15:56:23'},
        {name: '研发八部', id: '126545621', status: 2, time_status: '添加时间', time: '5月8日 15:56:23'},
        {name: '研发九部', id: '126545621', status: 1, time_status: '添加时间', time: '5月8日 15:56:23'},
        {name: '研发十部', id: '126545621', status: 2, time_status: '添加时间', time: '5月8日 15:56:23'},
      ]
    }
  }
}
</script>

<style scoped lang='scss'>
  .box-info{
    height: 90px;
  }

  .devices{
    /* min-height: calc(100% - 90px); */
    /* background-color: bisque; */
    margin-top: 16px;
    display: flex;

    div{
      flex: 1;
      /* height: 60px; */
      /* background-color: #A6A6A6; */
    }

    .list+.list{
      margin-left: 16px;
    }
  }

</style>