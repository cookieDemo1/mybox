<template>
  <div class="overview">
    <div class="today-police">
      <todayPolice></todayPolice>
    </div>
    <div class="middle">
      <div class="ml">
        <middleLeftChart></middleLeftChart>
      </div>
      <div class="mr">
        <middleRightChart></middleRightChart>
      </div>
    </div>

    <div class="bottom">
      <div class="bl">
        <bottomLeftChart></bottomLeftChart>
      </div>
      <div class="br">
        <bottomRightChart></bottomRightChart>
      </div>
    </div>
  </div>  
</template>

<script>

import todayPolice from './todayPolice'
import middleLeftChart from './middleLeftChart'
import middleRightChart from './middleRightChart'
import bottomLeftChart from './bottomLeftChart'
import bottomRightChart from './bottomRightChart'


export default {
  name: 'policeOverview',

  components: {todayPolice, middleLeftChart, middleRightChart, bottomLeftChart, bottomRightChart}
}
</script>

<style lang='scss' scoped>
  .overview{
    min-height: calc(100% - 40px);
    /* background-color: skyblue; */
    border-top-right-radius: 8px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    flex-direction: column;
    /* padding: 20px; */
  }

  .today-police{
    height: 175px;
  }

  .middle{
    margin-top: 16px;
    flex: 412;
    min-height: 412px;
    /* background-color: blueviolet; */
    display: flex;
    .ml{
      flex: 347;
      margin-right: 16px;
      /* background-color: chocolate; */
    }

    .mr{
      flex: 752;
      /* background-color: crimson; */
    }
  }

  .bottom{
    flex: 273;
    min-height: 273px;
    margin-top: 16px;
    /* background-color: cadetblue; */
    display: flex;

    .bl{
      flex: 347;
      margin-right: 16px;
      /* background-color: chocolate; */
    }

    .br{
      flex: 752;
      /* background-color: crimson; */
    }
  }
</style>