<template>
  <div class="root">
    <div class="top">
       <div class="video">
         <videoMonitor></videoMonitor>
       </div>
       <div class="chart">
         <div class="top-chart">
           <boxNumber></boxNumber>
         </div>
         <div class="bottom-chart">
           <boxLine></boxLine>
         </div>
       </div>
    </div>
    <div class="bottom">
      <div class="dynamic">
        <dynamic :dynamics="dynamics"></dynamic>
      </div>
      <div class="police">
        <police :polices="polices"></police>
      </div>
    </div>
  </div>
</template>

<script>

import videoMonitor from './videoMonitor'
import dynamic from './dynamic'
import police from './police'
import boxNumber from './boxNumber'
import boxLine from './boxLine'
export default {
  name: 'deviceOverview',
  components: {videoMonitor, dynamic, police, boxNumber, boxLine},
  data(){
    return{

      // 传输箱实时动态数据
      dynamics: [
        {
          id: 2564321362,
          name: '1楼传输箱',
          dynamic: '接入摄像头(192.168.1.200)',
          time: '2020.05.22 11:18:56',
          status: 1,
        },
        {
          id: 2564321362,
          name: '1楼传输箱',
          dynamic: '接入摄像头(192.168.1.200)',
          time: '2020.05.22 11:18:56',
          status: 1,
        },
        {
          id: 2564321362,
          name: '2楼传输箱',
          dynamic: '短路',
          time: '2020.05.22 11:18:56',
          status: 2,
        },
        {
          id: 2564321362,
          name: '3楼传输箱',
          dynamic: '离线',
          time: '2020.05.22 11:18:56',
          status: 3,
        },
        {
          id: 2564321362,
          name: '4楼传输箱',
          dynamic: '上线',
          time: '2020.05.22 11:18:56',
          status: 1
        },
        {
          id: 2564321362,
          name: '5楼传输箱',
          dynamic: '输出电源1开启',
          time: '2020.05.22 11:18:56',
          status: 2,
        },
        {
          id: 2564321362,
          name: '6楼传输箱',
          dynamic: '输出电源2开启',
          time: '2020.05.22 11:18:56',
          status: 1,
        },
        {
          id: 2564321362,
          name: '7楼传输箱',
          dynamic: '上线',
          time: '2020.05.22 11:18:56',
          status: 1
        },
      ],

      // 传输箱报警数据
      polices: [
        {
          id: 2564321362,
          name: '1楼传输箱',
          police: '温度大于38℃',
          time: '2020.05.22 11:18:56',
          status: 1,
        },
        {
          id: 2564321362,
          name: '1楼传输箱',
          police: '电压大于250V',
          time: '2020.05.22 11:18:56',
          status: 1,
        },
        {
          id: 2564321362,
          name: '2楼传输箱',
          police: '设备离线',
          time: '2020.05.22 11:18:56',
          status: 2,
        },
        {
          id: 2564321362,
          name: '3楼传输箱',
          police: '箱门打开',
          time: '2020.05.22 11:18:56',
          status: 2,
        },
        {
          id: 2564321362,
          name: '4楼传输箱',
          police: '设备离线',
          time: '2020.05.22 11:18:56',
          status: 1
        },
        {
          id: 2564321362,
          name: '5楼传输箱',
          police: '电压小于180V',
          time: '2020.05.22 11:18:56',
          status: 2,
        },
        {
          id: 2564321362,
          name: '6楼传输箱',
          police: '箱门打开',
          time: '2020.05.22 11:18:56',
          status: 1,
        },
        {
          id: 2564321362,
          name: '7楼传输箱',
          police: '设备离线',
          time: '2020.05.22 11:18:56',
          status: 1
        },
      ],

      // 

    }
  }
}
</script>

<style lang='scss' scoped>
  .root{
    height: calc(100% - 40px);
    margin: 20px 30px;
    /* background-color: #FFFFFF; */
    display: flex;
    flex-direction: column;
  }

  .top{
    height: 524px;
    display: flex;
    .video{
      flex: 708;
      background-color: #FFFFFF;
      border-radius: 8px;
      margin-right: 16px;
      padding: 20px 14px 14px 14px;
    }

    .chart{
      flex: 418;
      display: flex;
      flex-direction: column;
      .top-chart{
        flex: 1;
        margin-bottom: 16px;
        border-radius: 8px;
        background-color: #FFFFFF;
      }

      .bottom-chart{
        flex: 1;
        border-radius: 8px;
        background-color: #FFFFFF;
      }

    }

  }

  .bottom{
    flex: 1;
    margin-top: 16px;
    display: flex;

    .dynamic{
      flex: 1;
      margin-right: 16px;
      background-color: #FFFFFF;
      border-radius: 8px;
    }

    .police{
      flex: 1;
      background-color: #FFFFFF;
      border-radius: 6px;
    }
  }
</style>