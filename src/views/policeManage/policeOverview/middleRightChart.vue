<template>
  <div class="outer">
    <p class="title">最近20天报警趋势</p>
    <div ref="chart" class="chart"></div>
  </div>
</template>

<script>
export default {
  name: 'middleRightChart',

  data(){
    return{
      
    }
  },

  mounted(){
    const chart = this.$echarts.init(this.$refs.chart)

    const options = {
      tooltip: {
        trigger: 'axis'
      },

      legend: {
        data: ['电压低', '电压高', '过流', '短路', '漏电', '缺相', '箱门打开', '设备离线', '温度过高']
      },

      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        containLabel: true
      },

      toolbox: {
        // feature: {
        //   saveAsImage: {}
        // }
      },

      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['02.23','02.23','02.23','02.23','02.23','02.23','02.23','02.23','02.23','02.23','02.23',],
        axisTick: {
          show:false
        },

        axisLine: {
          show: true,
          lineStyle: {
            color: '#E6E6E6'
          }
        },

        axisLabel: {
          textStyle: {
            color: '#666666'
          }
        }
      },

      yAxis: {
        type: 'value',
        axisLine: {
          show: false
        },

        axisTick: {
          show: false
        },
      },

      

      series: [
        {
          color: '#734DFF',
          name: '电压低',
          type: 'line',
          stack: '总量',
          data: [586, 512, 181, 10, 900, 230, 210, 520, 360, 780, 420]
        },
        {
          color: '#1980FF',
          name: '电压高',
          type: 'line',
          stack: '总量',
          data: [220, 182, 191, 234, 290, 330, 310, 784, 456, 632, 526]
        },
        {
          color: '#F27404',
          name: '过流',
          type: 'line',
          stack: '总量',
          data: [150, 232, 201, 154, 190, 330, 410, 582, 456, 368, 712]
        },
        {
          color: '#A84806',
          name: '短路',
          type: 'line',
          stack: '总量',
          data: [320, 332, 301, 334, 390, 330, 320, 752, 362, 450, 256]
        },
        {
          color: '#C2C564',
          name: '漏电',
          type: 'line',
          stack: '总量',
          data: [526, 432, 401, 290, 190, 133, 132, 785, 632, 452, 156]
        },
        {
          color: '#DAB380',
          name: '缺相',
          type: 'line',
          stack: '总量',
          data: [526, 432, 401, 290, 190, 133, 132, 785, 632, 452, 156]
        },
        {
          color: '#00DDBB',
          name: '箱门打开',
          type: 'line',
          stack: '总量',
          data: [526, 432, 401, 290, 190, 133, 132, 785, 632, 452, 156]
        },
        {
          color: '#6F7591',
          name: '设备离线',
          type: 'line',
          stack: '总量',
          data: [526, 432, 401, 290, 190, 133, 132, 785, 632, 452, 156]
        },
        {
          color: '#FF5B67',
          name: '温度过高',
          type: 'line',
          stack: '总量',
          data: [259, 132, 481, 560, 452, 119, 758, 785, 632, 152, 256]
        },
      ]
    }

    chart.setOption(options)

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
  }
</style>